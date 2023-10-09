import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Admin } from "../admin/models/admin.model";

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest();
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            throw new UnauthorizedException('Admin Unauthorized');
        }

        const [bearer, token] = authHeader.split(' ');

        if (bearer !== 'Bearer' || !token) {
            throw new UnauthorizedException('Admin Unauthorized');
        }

        try {
            const admin: Partial<Admin> = await this.jwtService.verify(token, {
                secret: process.env.ACCESS_TOKEN_KEY,
            });

            if (!admin) {
                throw new UnauthorizedException('Invalid token');
            }

            req.admin = admin;
            return true;
        } catch (error) {
            throw new UnauthorizedException(error.message);
        }
    }
}