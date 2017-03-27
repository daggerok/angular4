import { Component, OnInit } from '@angular/core';

import './home.component.styl';
import { LinksService } from '../commons/links/links.service';
import { Link } from '../commons/links/link';

@Component({
  selector: 'au-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private links: Link[];

  constructor(private linksService: LinksService) {}

  public ngOnInit(): void {
    this.linksService.getRouterLinks()
      .subscribe(links => this.links = links);
  }
}
