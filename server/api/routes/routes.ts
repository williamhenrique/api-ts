import {Request, Response, Application} from 'express';

class Routes{
    constructor(app: Application){
        this.getRoutes(app);
    }

    getRoutes(app: Application){
        app.route('/').get((req: Request, res: Response) => res.send('Hello, world'))
        app.route('/ola/:nome').get((req: Request, res: Response) => res.send(`Ola ${req.params.nome}`))
    }

}

export default Routes;