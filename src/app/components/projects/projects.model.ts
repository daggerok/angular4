import { Injectable }     from '@angular/core';
import { Http }           from '@angular/http';
import { Observable }     from 'rxjs';

import { Project }        from './project/project';
import { JsonUtils }      from '../commons/utils/json-utils';
import { CommonHandlers } from '../commons/utils/error-handlers';

@Injectable()
export class ProjectModel {
  private deleteUri = '/api/Project';
  private getProjectsUri = '/api/Project/all';

  constructor(private _http: Http) {}

  public delete(project: Project) {
    return this._http.delete(`${this.deleteUri}/${project.id}`);
  }

  public getProjects(): Observable<Project[]> {
    return this._http.get(this.getProjectsUri)
      .map(JsonUtils.extract)
      .map(json => this.projects(json))
      .catch(CommonHandlers.handleError);
  }

  private projects(json: any): Project[] {
    if (json) {
      return json.map((p: any) => new Project(p.id, p.name));
    }
    return [];
  }
}
