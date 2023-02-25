import { Response } from 'express';
export interface IResponseWithOn extends Response {
  on(event: string, listener: (...args: any[]) => void): this;
}
