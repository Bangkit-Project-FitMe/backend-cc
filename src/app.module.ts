import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirestoreModule } from './firestore/firestore.module';
import { ConfigModule } from '@nestjs/config';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { ForgetPasswordModule } from './forgetPassword/forgetPassword.module';
import { UsersModule } from './users/users.module';
import { PredictionModule } from './predictions/predictions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FirestoreModule,
    RegisterModule,
    LoginModule,
    ForgetPasswordModule,
    UsersModule,
    PredictionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
