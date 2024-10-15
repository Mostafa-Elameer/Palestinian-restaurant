import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatallmealsComponent } from './eatallmeals.component';

describe('EatallmealsComponent', () => {
  let component: EatallmealsComponent;
  let fixture: ComponentFixture<EatallmealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EatallmealsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EatallmealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
