import { Component, OnInit } from '@angular/core';
import { faUser, faShoppingBag, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appLogo = '../assets/images/app-logo.png';
  searchIcon = '../assets/images/search.png';
  navlinks = ['Men', 'Women', 'Kids', 'Home & Living', 'Discover'];
  userOptions = ['Profile', 'Wishlist', 'Bag'];
  faUser = faUser;
  faShoppingBag = faShoppingBag;
  faHeart = faHeart;
  constructor() { }

  ngOnInit() {
  }

}
