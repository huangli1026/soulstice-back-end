import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';

@Controller('api/register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post('createNewAccount')
  createNewAccount(@Body() body) {
    return this.registerService.createNewAccount(body);
}

  @Get('checkExistByUsername/:username')
    checkExistByUsername(@Param('username') userName: string) {
      return this.registerService.checkExistByUsername(userName);
  }

  @Get('checkExistByEmail/:userEmail')
  checkExistByEmail(@Param('userEmail') userEmail: string) {
    return this.registerService.checkExistByUsername(userEmail);
}

  // @Post()
  // create(@Body() createRegisterDto: CreateRegisterDto) {
  //   return this.registerService.create(createRegisterDto);
  // }

  // @Get()
  // findAll() {
  //   return this.registerService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.registerService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateRegisterDto: UpdateRegisterDto) {
  //   return this.registerService.update(+id, updateRegisterDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.registerService.remove(+id);
  // }
}


