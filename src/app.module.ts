import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import MongoUri from './items/keys'
@Module({
  imports: [ItemsModule,MongooseModule.forRoot(MongoUri.MongoUri)],
  controllers: [AppController],
  providers: [AppService],

})

export class AppModule {}
