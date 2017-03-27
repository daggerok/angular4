import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { CommonHandlers } from '../../commons/utils/error-handlers';
import { Principal } from './full-name';

@Injectable()
export class FullNameModel {
  private getFullNameUri: string = '/api/v1/me/fullName';

  constructor(private http: Http) {}

  public getFullName(): Observable<Principal> {
    return this.http.get(this.getFullNameUri)
      .map(response => response.json())
      .catch(CommonHandlers.handleError);
  }
}
