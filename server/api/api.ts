import * as express from 'express';
import {Application} from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import Routes from './routes/routes';
class Api{
    public express: Application;
    constructor(){
        this.express = express()    
    }

    middleware(){
        this.express.use(morgan('dev'))
        this.express.use(bodyParser.urlencoded({extended: true}))
        this.express.use(bodyParser.json())
        this.routes(this.express)
    }

    private routes(app: Application){
        new Routes(app);
    }
}

export default new Api().express