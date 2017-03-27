import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//
import { PopoverModule } from 'ng2-popover';
//
// import { AppRoutes } from './app.routes';
import { AppRoutingModule as AppRoutes } from './app-routing.module';
//
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FullNameComponent } from './components/navbar/full-name/full-name.component';
import { JumbotronComponent } from './components/commons/jumbotron/jumbotron.component';
//
import { HomeComponent } from './components/home/home.component';
//
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/projects/project/project.component';
//
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
//
import { ProjecstPipe } from './components/projects/projects.pipe';
//
import { ProjectModel } from './components/projects/projects.model';
import { FullNameModel } from './components/navbar/full-name/full-name.model';
import { UsersModel } from './components/users/users.model';
//
import { LinksService } from './components/commons/links/links.service';

@NgModule({
  imports: [
    AppRoutes,
    BrowserModule,
    FormsModule,
    HttpModule,
    PopoverModule,
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    // components
    AppComponent,
    // nav
    NavbarComponent,
    FullNameComponent,
    // jumbotron
    JumbotronComponent,
    // pages
    HomeComponent,
    ProjectsComponent,
    ProjectComponent,
    UsersComponent,
    UserComponent,
    // pipes
    ProjecstPipe,
  ],
  providers: [
    // models
    FullNameModel,
    ProjectModel,
    UsersModel,
    // services
    LinksService,
  ],
})
export class AppModule {}

