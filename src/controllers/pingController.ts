import { Request, Response } from "express";



export const pingCheck = (req: Request, resp: Response) => {
    console.log("requested url",req.url);
    resp.status(200).json({
        message: "All Done"
    });
    return;
    // console.log("hii");
};

//eslint
//preetier
//husky
//lintStage