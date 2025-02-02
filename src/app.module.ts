import { Module, OnModuleInit, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { UserModule } from './user/user.module'
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config'

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URL),
    PropertyModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  private readonly logger = new Logger(AppModule.name);

  async onModuleInit() {
    this.logger.log('✅ MongoDB Connected Successfully');
  }
}
//export class AppModule {}
