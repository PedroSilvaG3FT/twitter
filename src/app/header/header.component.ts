import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { UsersComponent } from '../home/users/users.component';
import { HomeComponent } from '../home/home.component';
import { HourlyPostComponent } from '../home/hourly-post/hourly-post.component';
import { HashtagsComponent } from '../home/hashtags/hashtags.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  private isCollapsed = true;
  bsModalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
  ) { }

  ngOnInit() { }

  openUsers() {
    this.bsModalRef = this.modalService.show(UsersComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  openHourlyPost() {
    this.bsModalRef = this.modalService.show(HourlyPostComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  openHashtag() {
    this.bsModalRef = this.modalService.show(HashtagsComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
