import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('❌ Authorization token is missing.');
    }

    const token = authHeader.split(' ')[1]; // Extract token from "Bearer <token>"
    if (!token) {
      throw new UnauthorizedException('❌ Invalid token format.');
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
      request.user = decoded; // Attach decoded user data to request
      return true; // Allow access
    } catch (error) {
      console.log(error)
      throw new UnauthorizedException({
        statusCode: 401,
        status: false,
        message: '❌ Invalid or expired token.',
        error: 'Unauthorized',
        details: error.message || 'The token is either invalid or has expired.'
      });
    }
  }
}
