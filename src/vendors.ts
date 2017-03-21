import '@angular/common';
import '@angular/core';
import '@angular/forms';
import '@angular/http';
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/router';

import { environment } from './environments/environment';

declare var IS_PRODUCTION: any;
declare var require: any;

if (environment.production || (typeof IS_PRODUCTION !== 'undefined' && IS_PRODUCTION)) {
  require('@angular/compiler');
}

import 'normalize.css/normalize.css';
