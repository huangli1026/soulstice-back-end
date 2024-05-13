import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { mockUsers } from 'src/mocks/users.mock';

@Injectable()
export class RegisterService {

  private users=mockUsers;

  createNewAccount(body){
    if(this.checkExistByUsername(body.userName)){
      throw new NotAcceptableException(`userName ${body.userName} is taken`);
    }
    if(this.checkExistByEmail(body.userEmail)){
      throw new NotAcceptableException(`Email ${body.userEmail} is taken`)
    }
    if(!body.password){
      throw new NotFoundException("password is require")
    }
    const user={
      userName:body.userName,
      userEmail:body.userEmail,
      password:body.password,
      userRole:'user'
    }
    this.users.push({userName: body.userName});
    return user
  }

  checkExistByUsername(userName){
    return this.users.find(item=>item.userName.toLowerCase()===userName.toLowerCase())?true: false;
  }
  checkExistByEmail(userEmail){
    return this.users.find(item=>item.userEmail.toLowerCase()===userEmail.toLowerCase())?true: false;
  }


  // create(createRegisterDto: CreateRegisterDto) {
  //   return 'This action adds a new register';
  // }

  // findAll() {
  //   return `This action returns all register`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} register`;
  // }

  // update(id: number, updateRegisterDto: UpdateRegisterDto) {
  //   return `This action updates a #${id} register`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} register`;
  // }
}
