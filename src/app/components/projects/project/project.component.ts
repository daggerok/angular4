import { Component, Input, Output, EventEmitter } from '@angular/core';
import './project.component.styl';
import { Project } from './project';

@Component({
  selector: 'au-project',
  templateUrl: './project.component.html',
})
export class ProjectComponent {
  @Input() project: Project;
  @Output() projectDeleteEvent: EventEmitter<Project> = new EventEmitter<Project>();

  public isProjectName(confirm?: string) {
    return confirm === this.project.name;
  }

  public onProjectDelete(project: Project) {
    this.projectDeleteEvent.emit(project);
  }
}
