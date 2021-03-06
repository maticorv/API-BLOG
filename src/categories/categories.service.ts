import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import Category from './entities/category.entity';

@Injectable()
export class CategoriesService {
  /**
   * @ignore
   */
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const newCategory = await this.categoryRepository.create(createCategoryDto);
    await this.categoryRepository.save(newCategory);
    return newCategory;
  }
  /**
   * A method that fetches the categories from the database
   * @returns A promise with the list of categories
   */
  async findAll(): Promise<Category[]> {
    const posts = await this.categoryRepository.find({
      order: { id: 'ASC' },
      relations: ['posts'],
    });
    return posts;
  }

  async findOne(id: number) {
    const post = await this.categoryRepository.findOne({
      where: { id: id },
      relations: ['posts'],
    });
    if (post) {
      return post;
    }
    throw new NotFoundException(`Category with this id: ${id} does not exist`);
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const post = await this.categoryRepository.findOne(id, {
      relations: ['posts'],
    });
    if (!post) {
      throw new NotFoundException(
        `Category with this id: ${id} does not exist`,
      );
    }
    post.name = updateCategoryDto.name;

    const updatedCategory = await this.categoryRepository.save(post);

    return updatedCategory;
  }
  /**
   * A method that deletes a category from the database
   * @param id An id of a category. A category with this id should exist in the database
   */
  async remove(id: number) {
    const deleteResponse = await this.categoryRepository.softDelete(id);
    if (!deleteResponse.affected) {
      throw new NotFoundException(
        `Category with this id: ${id} does not exist`,
      );
    }
    return;
  }
}
