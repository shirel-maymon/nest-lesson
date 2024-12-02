import { Body, HttpException, Injectable, Param } from '@nestjs/common';

@Injectable()
export class StudentService {
    getAll(){
        throw new HttpException("Error",500)
    }

    getOne(@Param('id') id: string){
        throw new HttpException("Error",500)
    }

    newStudent(@Body('id') id: string){
        throw new HttpException("Error",500)
    }

    deleteStudent(){
        throw new HttpException("Error",500)
    }

}
