import database from '../database/connection';
import { Request, Response } from 'express';
import convertHoursToMinutes from '../utils/convertHoursToMinutes';
import IScheduleItem from '../interfaces/IScheduleInterface';

export default class ClassesController {
    async create(request: Request, response: Response){
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule 
        } = request.body;
        const transactionManager = await database.transaction();
          try {
          const insertedUsersIds = await transactionManager('users').insert({
            name,
            avatar,
            whatsapp,
            bio
          });
          const [user_id] = insertedUsersIds;
          const insertedClassesIds = await transactionManager('classes').insert({subject, cost, user_id});
          const [class_id] = insertedClassesIds;
          const classSchedule = schedule.map((scheduleItem: IScheduleItem) => {
            return {
                class_id,
                week_day: scheduleItem.week_day,
                from: convertHoursToMinutes(scheduleItem.from),
                to: convertHoursToMinutes(scheduleItem.to)
            };
          });
          await transactionManager('class_schedule').insert(classSchedule);
          await transactionManager.commit();
          return response.status(201).json({message: "sucess"});
        } catch (error) {
          await transactionManager.rollback();
          return response.status(400).json({error: 'Unexpected error while creating new class'});
        }
    }
    async index(request: Request, response: Response){
      const filters = request.query;
      const subject = filters.subject as string;
      const week_day = filters.week_day as string;
      const time = filters.time as string;
      
      if(!subject || !week_day || !time) return response.status(400);

      const timeInMinutes = convertHoursToMinutes(time);

      const classes = await database('classes')
      .whereExists(function () {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', subject)
      .join('users', 'users.id', '=', 'classes.user_id')
        .select(['classes.*', 'users.*'])
      
      return response.json(classes);
    }
}
