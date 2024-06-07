import {logger, readlineInterface, socket} from "./app";

// Function to handle graceful shutdown
const shutdown = () => {
    console.log('\nShutting down...');
    readlineInterface.close();
    socket.disconnect();
    process.exit(0);
};

// Function to initialize process event handlers
export const initializeProcessHandlers = () => {
    process.on('unhandledRejection', (reason, promise) => {
        logger.error('Unhandled Rejection at:', { promise, reason })
        console.error('Internal server error occurred');
        shutdown();
    });

    process.on('uncaughtException', (error) => {
        logger.error('Uncaught Exception thrown', { error });
        console.error('Internal server error occurred');
        shutdown();
    });

    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
};