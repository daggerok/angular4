import { Component, OnInit } from '@angular/core';

import './project/project.component.styl';
import { CommonHandlers } from '../commons/utils/error-handlers';
import { Project } from './project/project';
import { ProjectModel } from './projects.model';

@Component({
  selector: 'au-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  filter: string;

  constructor(private projectModel: ProjectModel) {}

  public ngOnInit() {
    this.projectModel.getProjects()
      .subscribe(ok => this.projects = ok);
  }

  public handleDeleteProject(project: Project) {
    this.projectModel.delete(project)
      .subscribe(ok => console.log(`project with id ${project.id} removed.`));
  }

  public onInput($event: any) {
    this.filter = $event.target.value;
  }
}
