import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entitites/project.entity';
import { Service } from './entitites/service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project, Service])],
  providers: [ProjectsService],
  controllers: [ProjectsController]
})
export class ProjectsModule {}
