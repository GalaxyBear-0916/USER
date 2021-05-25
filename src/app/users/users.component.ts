import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  selectUser: User;
  users: (User | { name: string; id: string; age: number })[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  onSelect(user: User): void{
    this.selectUser = user;
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  addUser(): void {
    this.userService.addUser(
      { id: this.users.length + 1,
      name: '新用户',
      age: 0
    });
  }
  deleteUser(id: number): void {
    this.userService.deleteUser(id);
  }
}
