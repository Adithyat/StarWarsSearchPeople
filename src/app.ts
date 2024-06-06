import * as readline from 'readline';
import 'dotenv/config';
import { io } from 'socket.io-client';
import {initializeSocket} from "./sockets";
import {createLogger} from "./logger";
import {initializeProcessHandlers} from "./processes";

// Program startup file
export const logger = createLogger();
export const socket = io(process.env.SOCKET_URL || 'http://localhost:3000');
export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Initial prompt
initializeProcessHandlers()
initializeSocket()
