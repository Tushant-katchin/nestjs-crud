import { Injectable } from '@nestjs/common';
import {Item} from './interface/item.interface'
import { Module } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { identity } from 'rxjs';
import {Request,Response} from 'express'

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel:Model<Item>){}
    async finditems():Promise<Item[]>{
        return await this.itemModel.find()
    }
    
   async findone(id:string):Promise<Item>{
       return await this.itemModel.findOne({id:id})
   }
    async create(item:Item):Promise<Item>{
        const newitem= new this.itemModel(item)
        return await newitem.save()
    }
    async delete(id:string):Promise<Item>{
       return await this.itemModel.findByIdAndRemove(id)
    }
    async update(id:string,item:Item):Promise<Item>{

        return await this.itemModel.findByIdAndUpdate(id,item,{new:true})
    }
}
