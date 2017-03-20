import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare var process: any;
const development = process.env.DEVELOPEMNT;

if (environment.production || !development) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
