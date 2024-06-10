import * as readline from 'readline';
import { io } from 'socket.io-client';
import { createLogger } from '../src/logger';
import { initializeSocket } from '../src/sockets';
import { initializeProcessHandlers } from '../src/processes';
import { logger, socket, readlineInterface } from '../src/app';

// Mocking dependencies
jest.mock('readline');
jest.mock('dotenv/config');
jest.mock('socket.io-client');
jest.mock('../src/logger');
jest.mock('../src/sockets');
jest.mock('../src/processes');

describe('App Initialization', () => {
  beforeAll(() => {
    (io as jest.Mock).mockReturnValue({ on: jest.fn(), emit: jest.fn() });
  });

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
