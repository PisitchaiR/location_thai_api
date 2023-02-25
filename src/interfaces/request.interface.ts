import { Request } from 'express';
export interface IRequestWithUrl extends Request {
  originalUrl: string;
}
