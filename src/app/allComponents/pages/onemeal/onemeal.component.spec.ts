import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnemealComponent } from './onemeal.component';

describe('OnemealComponent', () => {
  let component: OnemealComponent;
  let fixture: ComponentFixture<OnemealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnemealComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnemealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
