import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { hash } from "bcrypt";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await hash(createUserDto.password, 10);
    const user = new User({ ...createUserDto, password: hashedPassword });

    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOneBy({
      id,
    });
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOneBy({ email });
  }
}
