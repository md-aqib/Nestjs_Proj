import { OnModuleInit } from '@nestjs/common';
import 'dotenv/config';
export declare class AppModule implements OnModuleInit {
    private readonly logger;
    onModuleInit(): Promise<void>;
}
