import { Body, Controller, Delete, Get, HttpException, Param, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { error } from 'console';

@Controller('student')
export class StudentController {
constructor(private StudentService:StudentService){}

    @Get()
     getAll(){
        return this.StudentService.getAll();
      }

    @Get(":id")
        getOne(){
            return this.StudentService.getOne("id");
          }

    @Post()
    newStudent(){
        return this.StudentService.newStudent("id");
      }

    @Delete()
    deleteStudent(){
        return this.StudentService.deleteStudent();
      }
}




