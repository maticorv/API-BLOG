import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  DiskHealthIndicator,
  HealthCheck,
  HealthCheckService,
  MemoryHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
@ApiTags('health')
export class HealthController {
  constructor(
    private readonly healthService: HealthCheckService,
    private typeOrmHealthIndicator: TypeOrmHealthIndicator,
    private memoryHealthIndicator: MemoryHealthIndicator,
    private diskHealthIndicator: DiskHealthIndicator,
  ) {}

  // @Post()
  // create(@Body() createHealthDto: CreateHealthDto) {
  //   return this.healthService.create(createHealthDto);
  // }

  @Get()
  @HealthCheck()
  check() {
    return this.healthService.check([
      () => this.typeOrmHealthIndicator.pingCheck('database'),
      // the process should not use more than 300MB memory
      () =>
        this.memoryHealthIndicator.checkHeap('memory heap', 300 * 1024 * 1024),
      // The process should not have more than 300MB RSS memory allocated
      () =>
        this.memoryHealthIndicator.checkRSS('memory RSS', 300 * 1024 * 1024),
      // the used disk storage should not exceed the 50% of the available space
      () =>
        this.diskHealthIndicator.checkStorage('disk health', {
          thresholdPercent: 0.5,
          path: '/',
        }),
    ]);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.healthService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateHealthDto: UpdateHealthDto) {
  //   return this.healthService.update(+id, updateHealthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.healthService.remove(+id);
  // }
}
