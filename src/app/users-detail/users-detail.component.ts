import { Component, OnInit , Input } from '@angular/core';
import { User } from '../user';
import { Location } from '@angular/common';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private location: Location) { }

  user!: User;
  ngOnInit(): void {
    this.getUser();
  }


  getUser(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }
  goBack(): void {
    this.location.back();
  }
}
