import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare var IS_PRODUCTION: any;

if (environment.production || (typeof IS_PRODUCTION !== 'undefined' && IS_PRODUCTION)) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
