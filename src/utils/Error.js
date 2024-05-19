export class ApiError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.error = message;
    this.statusCode = statusCode;
  }
}
