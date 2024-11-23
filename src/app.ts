const express = require('express');
const app = express();
import { Server } from "@overnightjs/core";
import cors from 'cors';
import { PORT } from "./config";
import { logger } from "./logger";
import * as mongo from "./db";
import { saveData } from "./services/inventory.service";

export default class Main extends Server {

    constructor() {
        super();
        this.corsPolicy()
        mongo.connect().then(dbConnect => {
            // this.loadControllers();
            // this.loadCrons();
            saveData()
        });
    }

    private corsPolicy() {
        express.Router()
        this.app.use((_req: any, res: { header: (arg0: string, arg1: string) => void; }, next: () => void) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization, projects, Client-Type");
            next();
        });
        this.app.use(cors({
            origin: "*",
            methods: "GET, PUT, POST, DELETE, OPTIONS",
            credentials: true
        }))
    }

    private handleShutDown(server: any) {
        // Graceful shutdown
        process.on('SIGINT', () => {
            const cleanUp = async () => {
                // Clean up other resources like DB connections
                //await mongo.close();
            }
            //logger.info('Closing server...')
            server.close(() => {
                logger.info('Server closed !!! ')
                cleanUp()
                process.exit()
            });
            // Force close server after 5secs
            setTimeout((e: any) => {
                logger.info('Forcing server close !!!', e)
                cleanUp()
                process.exit(1)
            }, 5000);
        });
    }

    start() {
        const server = app.listen(PORT, () => {
            console.log(`App listening at port: ${PORT}`);
            this.handleShutDown(server)
        });
    }
}
