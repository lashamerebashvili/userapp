import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  postId: any;
  userPosts: any;

  constructor(public usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.postId = this.route.snapshot.params.id;
    this.userPosts = this.usersService.getUserPosts(this.postId);
  }

}
