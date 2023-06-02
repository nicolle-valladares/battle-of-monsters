import { StatusCodes } from 'http-status-codes';

export class ApplicationError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class BadRequest extends ApplicationError {
  constructor(message: string) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

export class InternalError extends ApplicationError {
  constructor(message: string) {
    super(message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
