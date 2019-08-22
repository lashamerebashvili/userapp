import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  id: any;
  userdetails: any;

  constructor(public usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    /* კონკრეტული User-ის ღილაკზე დაჭერისას ვიღებთ ინფორმაციას მასზე, რომელთაგან ერთ-ერთი არის id,
    რომელიც path-ში გადაეცემა [routerLink] = "['/posts', userdetail.id]-ის საშუალებით. ქვედა ხაზზე
    მოცემული კოდით კი ამ id-ს ვიღებთ, რომელსაც თავის მხრივ გადავცემთ getUserDetails()-ს პარამეტრად,
    რათა მხოლოდ კონკრეტული User-ის ინფორმაცია მივიღოთ.
    */
    this.id = this.route.snapshot.params.id;
    this.userdetails = this.usersService.getUserDetails(this.id);
  }

}
