import { Controller,Get,Post,Put,Delete,Body,Req,Res ,Param} from '@nestjs/common';
import {createitems} from './dto/create-items.dto'
import {Request,Response} from 'express'
import {ItemsService} from './items.service'
import {Item} from './interface/item.interface'
import { json } from 'stream/consumers';
import { identity } from 'rxjs';

@Controller('items')
export class ItemsController {
    constructor(private readonly items:ItemsService){}
    @Get()
     findall():Promise<Item[]>{
            return this.items.finditems()
        }
    
    @Post()
   async postall(@Body()createitems:createitems ):Promise<Item>{
        
        
        return await this.items.create(createitems)
         
        
    }
    @Delete(':id')
    async delete(@Param('id') id):Promise<Item>{
           
        return await this.items.delete(id)
    }
    @Get(':id')
    async getone(@Param('id') id):Promise<Item>{
        return await this.items.findone(id)
    }
    @Put(':id')
    async update(@Body()updateitem:createitems,@Param('id')id):Promise<Item>{

          return await this.items.update(id,updateitem)
    }
}
