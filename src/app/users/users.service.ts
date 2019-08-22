import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  location: Location;

  constructor(private http: HttpClient, location: Location) {
    this.location = location;
  }

  /* გადავწყვიტე რომ ამ სერვისში მომეთავსებინა ყველა ძირითადი მეთოდი და სწორედ ამ სერვისის
  საშუალებით გამომეყენებინა ისინი სხვადასხვა კომპონენტში. ამ გზით მათი ხელახლა გამოყენება ან
  საჭიროების შემთხვევაში ცვლილებების შეტანა გაცილებით მარტივი ხდება, რადგან არ მოგვიწევს სათითაოდ
  კომპონენტებში მათი ძებნა.
  */

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUserDetails(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/users' + '?id=' + id);
  }

  getUserPosts(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts' + '?userId=' + id);
  }

  goBack(): void {
    /* გარკვეულ კომპონენტებზე გადასვლის შემდგომ უკან დაბრუნების ფუნქციის შესაქმნელად გადავწყვიტე
    @angular/common-დან Location სერვისის გამოყენება. მისი დახმარებით  შეგვიძლია
    ბრაუზერის URL-ით გვერდებს შორის გადასვლა. ამ შემთხვევაში მის ერთ-ერთ ფუნქციას
    back()-ს ვიყენებ, რაც გვაძლევს საშუალებას პლატფორმის ისტორიაზე დაყრდნობით დავბრუნდეთ წინა ბმულზე */
    this.location.back();
  }

}
