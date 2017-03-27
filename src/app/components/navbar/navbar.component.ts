import { Component, OnInit } from '@angular/core';
import { LinksService } from '../commons/links/links.service';
import { Link } from '../commons/links/link';
import { FullNameModel } from './full-name/full-name.model';

const $ = require('jquery');

// // todo
// class="navbar-toggle"
// data-target="#navbar"
// data-toggle="collapse"
// type="button"
// aria-expanded="true"

// class="navbar-toggle collapsed"
// data-target="#navbar"
// data-toggle="collapse"
// type="button"
// aria-expanded="false"
// $('.navbar-toggle').click();
// $('.collapse').hide();

@Component({
  selector: 'au-navbar',
  templateUrl: 'navbar.component.html',
})
export class NavbarComponent implements OnInit {
  private fullName: string;
  private main: Link;
  private navbarLinks: Link[];
  private externalLinks: Link[];

  constructor(
    private fullNameModel: FullNameModel,
    private linksService: LinksService,
  ) {}

  public ngOnInit(): void {
    this.fullNameModel.getFullName()
      .subscribe(principal => this.fullName = principal.fullName);

    this.linksService.getMainLink()
      .subscribe(link => this.main = link);

    this.linksService.getRouterLinks()
      .subscribe(links => this.navbarLinks = links);

    this.linksService.getExternalLinks()
      .subscribe(links => this.externalLinks = links);
  }
}
