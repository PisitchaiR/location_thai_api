import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { IRequestWithUrl } from 'src/interfaces/request.interface';
import { IResponseWithOn } from 'src/interfaces/response.interface';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name);

  use(req: IRequestWithUrl, res: IResponseWithOn, next: NextFunction) {
    const start = performance.now();

    res.on('finish', () => {
      const duration = performance.now() - start;
      this.logger.log(
        `${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms`,
      );
    });

    next();
  }
}
