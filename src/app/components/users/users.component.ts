import { Component, OnInit } from '@angular/core';
import { UsersModel } from './users.model';
import { User } from './user/user';

@Component({
  selector: 'au-users',
  templateUrl: 'users.component.html',
  styles: [],
})
export class UsersComponent implements OnInit {
  private users: User[];

  constructor(private usersModel: UsersModel) {}

  public ngOnInit(): void {
    this.usersModel.getAll()
      .subscribe(users => this.users = users);
  }

  public onInputChange($event: any) {

    const input: HTMLInputElement = $event.target;
    const val: string = input.value;

    if (val && val.length && val.length >= 4) {
      this.handleAdminUpdate(new User(
        input.value,
        true,
      ));
    }
    input.value = '';
  }

  public handleAdminUpdate(user: User) {
    this.usersModel.adminUpdate(user).subscribe(response => {

      const index = this.users.findIndex((u: User) => u.username === response.username);

      if (index >= 0) {
        this.users[index] = response;
      } else {
        this.users.push(response);
      }
    });
  }

  public handleAdminDelete(user: User) {
    this.usersModel.adminDelete(user).subscribe(() => {

      const index = this.users.findIndex((u: User) => u.username === user.username);

      if (index >= 0) {
        this.users.splice(index, 1);
      }
    });
  }
}
