import '@angular/common';
import '@angular/core';
import '@angular/forms';
import '@angular/http';
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/router';

import { isProduction } from './env/production';

if (isProduction()) {
  require('@angular/compiler');
}

import 'jquery';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootswatch/paper/bootstrap.css';

import 'ng2-popover';
