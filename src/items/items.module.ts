import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import {itemSchema} from './dto/schema/item.schema'

@Module({
  imports: [MongooseModule.forFeature([{name:'Item', schema:itemSchema}])],
  controllers: [ItemsController],
  providers: [ ItemsService],
  
})
export class ItemsModule {}
