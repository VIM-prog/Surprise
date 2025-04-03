import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entitites/project.entity';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectService: ProjectsService) {}

    @Get('all')
    async findAll(): Promise<any> {
        return this.projectService.findAll();
    }

    @Post()
    async create(@Body() createServiceDto: CreateProjectDto){
        this.projectService.createProject(createServiceDto);
    }

    @Patch(':id') 
    async edit (
        @Param('id') id: number,
        @Body() updateData: UpdateProjectDto): Promise<Project | null> {
            const updateProject = await this.projectService.edit(id, updateData)
            return updateProject
        }

    @Delete(':id') 
    async delete(@Param('id') id: number) {
        this.projectService.deleteProject(id)
    }

}
