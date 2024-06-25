
import { io } from 'socket.io-client';
import { createLogger } from './logger';
import { initializeSocket } from './sockets';
import { initializeProcessHandlers } from './processes';
import { logger, socket, readlineInterface } from './app';
import * as readline from 'readline';
import winston from "winston";


// Mocking dependencies
jest.mock('readline',() => ({ createInterface: jest.fn(() => jest.mocked<readline.Interface>) }));
jest.mock('dotenv/config');
jest.mock('socket.io-client', () => ({ io: jest.fn(() => jest.mocked<object>) }));
jest.mock('./logger', () => ({ createLogger: jest.fn(() => jest.mocked<winston.Logger>) }));
jest.mock('./sockets', () => ({ initializeSocket: jest.fn() }));
jest.mock('./processes', () => ({ initializeProcessHandlers: jest.fn() }));

//const mockSocketIoClient = io as jest.Mocked<typeof io>;

describe('App Initialization', () => {

  it('should create a logger', () => {
    expect(createLogger).toHaveBeenCalled();
    expect(logger).toBeDefined();
  });

  it('should create a socket connection', () => {
    expect(io).toHaveBeenCalledWith(process.env.SOCKET_URL || 'http://localhost:3000');
    expect(socket).toBeDefined();
  });

  it('should create a readline interface', () => {
    expect(readline.createInterface).toHaveBeenCalledWith({
      input: process.stdin,
      output: process.stdout,
    });
    expect(readlineInterface).toBeDefined();
  });

  it('should initialize process handlers', () => {
    expect(initializeProcessHandlers).toHaveBeenCalled();
  });

  it('should initialize socket', () => {
    expect(initializeSocket).toHaveBeenCalled();
  });
});
