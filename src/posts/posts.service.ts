import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const newPost = await this.postRepository.create(createPostDto);
    await this.postRepository.save(newPost);
    return newPost;
  }

  async findAll() {
    const posts = await this.postRepository.findAndCount({
      order: { id: 'ASC' },
    });
    return posts;
  }

  async findOne(id: number) {
    const post = await this.postRepository.findOne({ id });
    if (post) {
      return post;
    }
    throw new NotFoundException(`Post with this id: ${id} does not exist`);
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.postRepository.findOne(id);
    if (!post) {
      throw new NotFoundException(`Post with this id: ${id} does not exist`);
    }
    post.title = updatePostDto.title;
    post.paragraphs = updatePostDto.paragraphs;

    const updatedPost = await this.postRepository.save(post);

    return updatedPost;
  }

  async remove(id: number) {
    const deleteResponse = await this.postRepository.softDelete(id);
    if (!deleteResponse.affected) {
      throw new NotFoundException(`Post with this id: ${id} does not exist`);
    }
    return;
  }
}
