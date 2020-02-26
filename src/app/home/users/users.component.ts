import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public usersList = USERS_ARRAY;

  constructor() { }

  ngOnInit() { }

}

export const USERS_ARRAY = [
  {
    user: "Alvin Foo",
    followers: 44369,
    lang: "en"
  },
  {
    user: "Salvador Carnaval",
    followers: 24596,
    lang: "pt"
  },
  {
    user: "We ❤ Star Wars",
    followers: 9093,
    lang: "en"
  },
  {
    user: "Tech Help KB 📚",
    followers: 8918,
    lang: "en"
  },
  {
    user: "Rcchoi😷 🖐 ☝",
    followers: 6567,
    lang: "en"
  }
]