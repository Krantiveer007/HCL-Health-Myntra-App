import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNavLinksComponent } from './footer-nav-links.component';

describe('FooterNavLinksComponent', () => {
  let component: FooterNavLinksComponent;
  let fixture: ComponentFixture<FooterNavLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterNavLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterNavLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
