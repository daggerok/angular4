import { Response, Headers }   from '@angular/http';

export class JsonUtils {
  public static extract(response: Response) {
    return response.json() || {};
  }

  public static jsonOptions = () => ({
    headers: new Headers({
      'content-type': 'application/json',
      'accept': 'application/json',
    }),
  });
}
