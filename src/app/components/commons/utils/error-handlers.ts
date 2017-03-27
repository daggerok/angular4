import { Observable } from 'rxjs';
import { Response }   from '@angular/http';

export class CommonHandlers {
  public static handleError(error: Response | any) {
    const errMsg = error.message ? error.message : error.toString();
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
