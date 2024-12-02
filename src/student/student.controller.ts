import { Body, Controller, Delete, Get, HttpException, Param, Post } from '@nestjs/common';
import { error } from 'console';

@Controller('student')
export class StudentController {
    @Get()
    getAll(){
        throw new Error()
    }
    @Get(":id")
        getOne(@Param('id') id: string){
        throw new HttpException("Error",500)
    }
    @Post()
    newStudent(@Body('id') id: string){
        throw new Error()
    }
    @Delete()
    deleteStudent(){
        throw new Error()
    }
}




