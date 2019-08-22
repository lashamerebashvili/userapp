import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(public usersService: UsersService) { }
  /* ngOnInit lifecycle hook-ის გამოყენებით ინიციალიზაციას ვუკეთებ მასში არსებულ კოდს.
    ვუთითებ void-ს, ვინაიდან არ ვაბრუნებთ არაფერს.
  */
  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

}
