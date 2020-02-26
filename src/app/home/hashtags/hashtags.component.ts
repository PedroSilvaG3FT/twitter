import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hashtags',
  templateUrl: './hashtags.component.html',
  styleUrls: ['./hashtags.component.scss']
})
export class HashtagsComponent implements OnInit {
  public hashtagList = HASHTAG_ARRAY;

  constructor() { }

  ngOnInit() {
  }

}


export const HASHTAG_ARRAY = [
  {
    _id: {
      hashtag: "JustinBieber",
      userLang: "ja"
    },
    count: 2
  },
  {
    _id: {
      hashtag: "iphone",
      userLang: "ja"
    },
    count: 3
  },
  {
    _id: {
      hashtag: "Euro2016",
      userLang: "it"
    },
    count: 1
  },
  {
    _id: {
      hashtag: "TheWalkingDead",
      userLang: "es"
    },
    count: 5
  },
  {
    _id: {
      hashtag: "samsung",
      userLang: "en"
    },
    count: 11
  },
  {
    _id: {
      hashtag: "Neymar",
      userLang: "und"
    },
    count: 1
  },
  {
    _id: {
      hashtag: "TheWalkingDead",
      userLang: "en"
    },
    count: 7
  },
  {
    _id: {
      hashtag: "JustinBieber",
      userLang: "en"
    },
    count: 1
  },
  {
    _id: {
      hashtag: "iphone",
      userLang: "und"
    },
    count: 1
  },
  {
    _id: {
      hashtag: "Euro2016",
      userLang: "pl"
    },
    count: 1
  },
  {
    _id: {
      hashtag: "iphone",
      userLang: "hi"
    },
    count: 1
  },
  {
    _id: {
      hashtag: "apple",
      userLang: "ja"
    },
    count: 2
  },
  {
    _id: {
      hashtag: "Euro2016",
      userLang: "ja"
    },
    count: 1
  },
  {
    _id: {
      hashtag: "Neymar",
      userLang: "pt"
    },
    count: 3
  },
  {
    _id: {
      hashtag: "IveteSangalo",
      userLang: "pt"
    },
    count: 7
  },
  {
    _id: {
      hashtag: "samsung",
      userLang: "und"
    },
    count: 1
  },
  {
    _id: {
      hashtag: "Neymar",
      userLang: "en"
    },
    count: 3
  },
  {
    _id: {
      hashtag: "JustinBieber",
      userLang: "es"
    },
    count: 1
  },
  {
    _id: {
      hashtag: "TheWalkingDead",
      userLang: "pt"
    },
    count: 1
  },
  {
    _id: {
      hashtag: "apple",
      userLang: "es"
    },
    count: 1
  },
  {
    _id: {
      hashtag: "TheWalkingDead",
      userLang: "et"
    },
    count: 1
  },
  {
    _id: {
      hashtag: "apple",
      userLang: "en"
    },
    count: 5
  },
  {
    _id: {
      hashtag: "Euro2016",
      userLang: "en"
    },
    count: 5
  },
  {
    _id: {
      hashtag: "Neymar",
      userLang: "fr"
    },
    count: 3
  },
  {
    _id: {
      hashtag: "StarWars",
      userLang: "en"
    },
    count: 12
  },
  {
    _id: {
      hashtag: "JustinBieber",
      userLang: "fr"
    },
    count: 1
  },
  {
    _id: {
      hashtag: "TheWalkingDead",
      userLang: "und"
    },
    count: 1
  },
  {
    _id: {
      hashtag: "StarWars",
      userLang: "es"
    },
    count: 1
  },
  {
    _id: {
      hashtag: "iphone",
      userLang: "es"
    },
    count: 2
  },
  {
    _id: {
      hashtag: "Euro2016",
      userLang: "und"
    },
    count: 4
  },
  {
    _id: {
      hashtag: "iphone",
      userLang: "en"
    },
    count: 1
  },
  {
    _id: {
      hashtag: "Euro2016",
      userLang: "fr"
    },
    count: 2
  }
]