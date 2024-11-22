import mongoose from "mongoose";
import { logger } from "./logger";
import * as config from './config';

let dbUrl = 'mongodb://' + config.DB_HOST + '/' + config.DB_NAME;

export const connect = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            mongoose.connection.on('connected', () => { logger.info(`-----Db connected to ${config.DB_HOST} with user ${config.DB_SOURCE}-----`); });
            mongoose.connection.on('close', () => { logger.error('-----lost Db connection-----'); });
            mongoose.connection.on('reconnected', () => { logger.info('-----Db reconnected-----'); });
            mongoose.connection.on('error', () => { logger.error('-----Db connection error-----'); });

            await mongoose.connect(dbUrl)
            resolve(1);
        } catch (err) {
            logger.debug('Error while db connection ' + JSON.stringify(err));
            reject(err);
        }
    })
}

export const close = () => {
    mongoose.connection.close();
}