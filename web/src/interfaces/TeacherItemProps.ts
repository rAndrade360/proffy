import TeacherScheduleProps from "./TeacherScheduleProps";

export default interface TeacherItemProps{
    teacher: {
        id?: number,
        avatar: string,
        name: string,
        subject: string,
        bio: string,
        cost: number,
        whatsapp: number,
        schedules?: Array<TeacherScheduleProps>
    }
}