import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import './user.component.styl';
import { User } from './user';

@Component({
  selector: 'au-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Input() private user: User;
  @Input() private provideTooltip: string;
  @Input() private revokeTooltip: string;

  @Output() private adminUpdate: EventEmitter<User> = new EventEmitter();
  @Output() private adminDelete: EventEmitter<User> = new EventEmitter();

  public handleAdminUpdate(payload: boolean): void {
    this.user.active = payload;
    this.adminUpdate.emit(this.user);
  }

  public handleAdminDelete(payload: User): void {
    this.adminDelete.emit(this.user);
  }
}
