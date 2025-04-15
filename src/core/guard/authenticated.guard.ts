/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { Request } from 'express';
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request: Request = context.switchToHttp().getRequest();
  
      const token = this.extractTokenFromCookie(request);
  
      if (!token) {
        throw new UnauthorizedException('Token not provided');
      }
  
      try {
        const payload = await this.jwtService.verifyAsync(token, {
          secret: process.env.JWT_SECRET,
        });
  
        request['user'] = {
          id: payload.sub,
          email: payload.email,
          role: payload.role,
        };
      } catch (error) {
        console.log(error);
        throw new UnauthorizedException();
      }
  
      return true;
    }
    private extractTokenFromCookie(request: Request): string | undefined {
      return request.cookies['access_token'];
    }
  }