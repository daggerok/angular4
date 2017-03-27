import { Injectable } from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import { Observable } from 'rxjs';
import { User } from './user/user';
import { JsonUtils } from '../commons/utils/json-utils';
import { CommonHandlers } from '../commons/utils/error-handlers';

@Injectable()
export class UsersModel {
  private uri: string = '/api/v1/admins';

  constructor(private http: Http) {}

  public getAll(): Observable<User[]> {
    return this.http.get(this.uri)
      .map(res => res.json() || {})
      .catch(CommonHandlers.handleError);
  }

  public adminUpdate(user: User): Observable<User> {
    return this.http.post(this.uri, user, JsonUtils.jsonOptions())
      .map(res => res.json() || {})
      .catch(CommonHandlers.handleError);
  }

  public adminDelete(user: User): Observable<Response> {
    const options = Object.assign({}, JsonUtils.jsonOptions(), { body: user, });
    return this.http.delete(this.uri, options)
      .catch(CommonHandlers.handleError);
  }
}
