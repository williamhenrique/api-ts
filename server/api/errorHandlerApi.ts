import {Request, Response, ErrorRequestHandler, NextFunction} from 'express';

export function errorHanderApi(res: Response, req: Request, error: ErrorRequestHandler, next: NextFunction){
    console.error(`Houve um erro ${error}` )
    res.status(500).json({
        "Err-Code" : '001',
        "message" : "Houve um erro interno"
    })
}