import express from 'express';
import cors from 'cors';
import routes from './routes';

export default class App {
    private app: express.Application
    constructor(){
        this.app = express();
        this.middlewares();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(routes);
    }
    init(){
        const port = process.env.PORT || 3333;
        this.app.listen(port);
    }
}