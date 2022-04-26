import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.create(createUserDto);
    await this.userRepository.save(newUser);
    return newUser;
  }

  async findAll() {
    const users = await this.userRepository.find({
      order: { id: 'ASC' },
    });
    return users;
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({ id });
    if (user) {
      return user;
    }
    throw new NotFoundException(`User with this id: ${id} does not exist`);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with this id: ${id} does not exist`);
    }
    user.email = updateUserDto.email;
    user.phone = updateUserDto.phone;
    user.name = updateUserDto.name;
    if (updateUserDto.password) {
      const hashedPassword = await bcrypt.hash(updateUserDto.password, 10);
      user.password = hashedPassword;
    }

    const updatedUser = await this.userRepository.save(user);

    return updatedUser;
  }

  async remove(id: number) {
    const deleteResponse = await this.userRepository.softDelete(id);
    if (!deleteResponse.affected) {
      throw new NotFoundException(`User with this id: ${id} does not exist`);
    }
    return;
  }
  async getByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
    });
    if (user) {
      return user;
    }
    throw new NotFoundException(`User with this email:${email} does not exist`);
  }
  async getByEmailAndConfirm(email: string) {
    const user = await this.userRepository.findOne({
      where: { email, confirmEmail: true },
    });
    if (user) {
      return user;
    }
    throw new NotFoundException(`User with this email:${email} does not exist`);
  }

  async updateIp(email: string, ip: string) {
    return this.userRepository.update(
      { email },
      {
        ip: ip,
      },
    );
  }
  
  async markEmailAsConfirmed(email: string) {
    return this.userRepository.update(
      { email },
      {
        isEmailConfirmed: true,
      },
    );
  }
}
