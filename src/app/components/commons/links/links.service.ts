import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Link } from './link';

@Injectable()
export class LinksService {
  private links: Link[] = [
    // main
    {
      href: '/',
      name: 'Administration',
      title: 'Management console',
      description: 'Chose an administrative action',
    },
    // router links
    {
      href: '/users',
      name: 'Users',
      title: 'Assign User Role',
      description: 'Map administrative role to Sigma Software (LDAP) user',
    },
    {
      href: '/projects',
      name: 'Projects',
      title: 'Update Projects',
      description: 'Remove wrong, useless or outdated project project...',
    },
    // external links (<a target="_black"/>)
    {
      href: '/#/tainv/projects',
      name: 'Tainv',
      title: 'Test Inventory Application',
      description: 'Back to Test Inventory application home page',
      external: true,
    },
    {
      href: '/logout',
      name: 'Logout',
      title: 'Logout',
      description: 'Go to logout page. Bye-bye...',
      external: true,
    },
  ];

  constructor() {}

  public getMainLink(): Observable<Link> {
    return Observable
      .from(this.links)
      // // .filter((link: Link, index: number) => index !== 0);
      // .take(1)
      .first();
  }

  public getRouterLinks(): Observable<Link[]> {
    return Observable
      .from(this.links)
      .map(link => link)
      .skip(1)
      .filter(link => !link.external)
      .toArray();
  }

  public getExternalLinks(): Observable<Link[]> {
    return Observable
      .from(this.links)
      .filter(link => !!link.external)
      .toArray();
  }
}
