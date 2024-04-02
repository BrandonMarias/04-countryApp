import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiinerLoaderComponent } from './spiiner-loader.component';

describe('SpiinerLoaderComponent', () => {
  let component: SpiinerLoaderComponent;
  let fixture: ComponentFixture<SpiinerLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpiinerLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpiinerLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
