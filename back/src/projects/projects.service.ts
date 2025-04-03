import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entitites/project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { Service } from './entitites/service.entity';

@Injectable()
export class ProjectsService {
    constructor(
        @InjectRepository(Project)
         private readonly projectRepository: Repository<Project>,
         @InjectRepository(Service)
        private readonly serviceRepository: Repository<Service> 
        ) {}

    async findAll(): Promise<Project[]> {
        return this.projectRepository.find()
    }

    async deleteProject(_id: number): Promise<Project | null> {
        const project = this.projectRepository.findOne({where: {id: _id}})
        if(project) {
            await this.projectRepository.delete(_id)
            return project
        }
        return null
    }

    async createProject(createProjectDto: CreateProjectDto): Promise<Project> {
      const { serviceId, ...projectData } = createProjectDto;
      const project = this.projectRepository.create({
          ...projectData,
          service: { id: serviceId } 
      });
      return this.projectRepository.save(project);
    }

    async edit(_id: number, updateData: Partial<Project>): Promise<Project | null> {
      const project = this.projectRepository.findOne({where: {id: _id}})
      if (!project) {
        return null
      }
      await this.projectRepository.update(_id, updateData);
      return this.projectRepository.findOne({where: {id: _id}})
    }
}
