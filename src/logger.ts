import { LOGS_PATH } from "./config";
const DailyRotateFile = require('winston-daily-rotate-file');
const winston = require('winston');

// Daily File Rotation for Combined Logs
const DailyLogTransport = new DailyRotateFile({
    filename: `${LOGS_PATH}/combined-%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    level: 'info'
})

export const ConsoleLogTransport = new winston.transports.Console({
    level: 'info',
    handleExceptions: true
})


// Generic Error/Exception Logger Handler 
const UnCaughtExceptionHandler = new winston.transports.File({ filename: `${LOGS_PATH}/exceptions.log` });

export const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }), // To ensure stack trace is included for errors
        winston.format.printf((info: { timestamp: any; level: any; message: any; stack: any; }) => {
            const { timestamp, level, message, stack } = info;
            if (level == 'error' && stack) {
                let stackTrace = stack;
                const stackLines = stackTrace.split('\n');
                if (stackLines.length <= 2) {
                    stackTrace = stackLines.join('\n');
                }
                else {
                    stackTrace = stackLines.slice(0, 2).join('\n');
                }
                if (!stackTrace.includes(message)) {
                    stackTrace = message + stackTrace
                }
                return `[${timestamp}] : [${level}] ${stackTrace || message}`;
            }
            return `[${timestamp}] : [${level}] ${message}`;
        })
    ),
    transports: [
        ConsoleLogTransport,
        DailyLogTransport
    ],
    exceptionHandlers: [
        UnCaughtExceptionHandler
    ],
    exitOnError: false
});