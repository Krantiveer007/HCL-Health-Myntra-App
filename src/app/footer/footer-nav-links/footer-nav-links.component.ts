import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-nav-links',
  templateUrl: './footer-nav-links.component.html',
  styleUrls: ['./footer-nav-links.component.css']
})
export class FooterNavLinksComponent implements OnInit {

  navlinks = ['Men',
  'Women',
  'Kids',
  'Home & Living',
  'Discover',
  'Gift Cards',
  'Myntra Insider'];

  usefulLinks = ['Contact Us',
  'FAQ',
  'T&C',
  'Terms Of Use',
  'Track Orders',
  'Shipping',
  'Cancellation',
  'Returns',
  'Whitehat',
  'Blog',
  'Careers',
  'Privacy policy'
  ];

  constructor() { }

  ngOnInit() {
  }

}
