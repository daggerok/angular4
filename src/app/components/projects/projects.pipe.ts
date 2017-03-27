import { Pipe, PipeTransform }  from '@angular/core';
import { Project } from './project/project';

@Pipe({
  name: 'projects'
})
export class ProjecstPipe implements PipeTransform {
  public transform(projects: Project[], name?: string): Project[] {
    if (!name || name.trim().length === 0) {
      return projects;
    }
    return projects.filter(
      p => p.name.toLowerCase()
        .indexOf(name.toLowerCase()) !== -1);
  }
}
