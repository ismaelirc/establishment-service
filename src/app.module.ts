import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { EstablishmentModule } from './establishment/establishment.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    EstablishmentModule,
    DatabaseModule,
  ],
  providers: [],
})
export class AppModule { }
