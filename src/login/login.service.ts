import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { mockUsers } from 'src/mocks/users.mock';

@Injectable()
export class LoginService {

  private users=mockUsers;

  checkUsernamePassword(body){
    const profile = this.users.find((item) => item.userEmail === body.userEmail);
    if(!profile){
      throw new NotFoundException(`Login with userEmail ${body.userEmail} not found`);
    }
    
    return profile.password===body.password? true : false; 
  }


  // create(createLoginDto: CreateLoginDto) {
  //   return 'This action adds a new login';
  // }

  // findAll() {
  //   return `This action returns all login`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} login`;
  // }

  // update(id: number, updateLoginDto: UpdateLoginDto) {
  //   return `This action updates a #${id} login`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} login`;
  // }
}
