import { Body, Controller, Post } from '@nestjs/common';
import { AuthorService } from '../services/author.service';
import { CreateAuthorDto } from '../dto/create-author.dto';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.createAuthor(createAuthorDto);
  }
}
