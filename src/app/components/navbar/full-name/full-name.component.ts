import { Component, Input } from '@angular/core';
import { Link } from '../../commons/links/link';

@Component({
  selector: '[au-full-name]',
  templateUrl: 'full-name.component.html',
})
export class FullNameComponent {
  @Input() private fullName: string;
  @Input() private externalLinks: Link[];
}
