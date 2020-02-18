import { Component, OnInit } from '@angular/core';
import { POPULAR_SEARCHES } from 'src/app/shared/app.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  popularSearches = POPULAR_SEARCHES;
  googlePlayIcon = "../assets/images/google-play.png";
  appleStoreIcon = "../assets/images/apple-store.png";
  objectKeys = Object.keys;
  socialApps = [
    "../assets/images/facebook.png",
    "../assets/images/twitter.png",
    "../assets/images/youtube.png",
    "../assets/images/instagram.png"
  ];
  myntraFeatures = {
    'original' : {
      'src' : "../assets/images/original-tag.png",
      'keyFeature' : "100% ORIGINAL",
      'featureDescription' : " guarantee for all products at myntra.com"
    },
    '30DaysReturn' : {
      'src' : "../assets/images/return30Days-logo.png",
      'keyFeature' : "Return within 30days",
      'featureDescription' : " of receiving your order"
    },
    'freeDelivery' : {
      'src' : "../assets/images/truck.png",
      'keyFeature' : "Return within 30days",
      'featureDescription' : " for every order above Rs. 1199"
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
