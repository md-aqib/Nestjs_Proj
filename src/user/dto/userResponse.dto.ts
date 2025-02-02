import { User } from '../schemas/user.schema';

export class UserResponseDto {
    readonly status: boolean;
    readonly message: string;
    readonly data?: User;
    readonly token?: string;
}