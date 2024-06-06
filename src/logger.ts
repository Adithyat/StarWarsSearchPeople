import winston from "winston";

export const createLogger = () =>
    winston.createLogger({
        level: 'error',
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json()
        ),
        transports: [
            new winston.transports.File({ filename: 'error.log' })
        ]
    });
