import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageeComponent } from './home-page.component';

describe('HomePageeComponent', () => {
  let component: HomePageeComponent;
  let fixture: ComponentFixture<HomePageeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
