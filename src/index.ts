//this below follow commonjs module 
//---> Modify your TypeScript code to use require for importing modules. Since require doesn't support named imports directly, 
//you'll use the type declaration for Express separately:

// const express = require("express");
// import type { Express } from "express";
// const app:Express = express();



import express, { Express } from "express";

import serverConfig from "./config/server.config";
import apiRouter from "./routes";
const app: Express = express();
 
app.use("/api",apiRouter);

app.listen(serverConfig.PORT, () => {
    console.log("Server started at this Port:", serverConfig.PORT);
});

