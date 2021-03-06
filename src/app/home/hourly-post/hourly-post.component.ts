import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hourly-post',
  templateUrl: './hourly-post.component.html',
  styleUrls: ['./hourly-post.component.scss']
})
export class HourlyPostComponent implements OnInit {
  public hourslyPostList = HOURS_ARRAY;

  constructor() { }

  ngOnInit() { }

}


export const HOURS_ARRAY = [
  {
    hour: "05",
    count: 1
  },
  {
    hour: "21",
    count: 57
  },
  {
    hour: "11",
    count: 1
  },
  {
    hour: "03",
    count: 1
  },
  {
    hour: "02",
    count: 2
  },
  {
    hour: "08",
    count: 1
  },
  {
    hour: "14",
    count: 1
  },
  {
    hour: "06",
    count: 1
  },
  {
    hour: "09",
    count: 1
  },
  {
    hour: "22",
    count: 1
  },
  {
    hour: "12",
    count: 1
  },
  {
    hour: "19",
    count: 8
  },
  {
    hour: "15",
    count: 1
  },
  {
    hour: "20",
    count: 15
  },
  {
    hour: "07",
    count: 1
  }
]