import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PaginationParams } from 'src/shared/utilities/paginationParams';
import { GetUser } from 'src/shared/decorators/get-user.decorator';

@Controller('posts')
@ApiTags('posts')
@ApiBearerAuth()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@GetUser() user, @Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto, user);
  }

  @Get()
  findAll(
    @Query('search') search: string,
    @Query() { offset, limit }: PaginationParams,
  ) {
    if (search) {
      return this.postsService.searchForPosts(search);
    } else {
      return this.postsService.findAll(offset, limit);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
