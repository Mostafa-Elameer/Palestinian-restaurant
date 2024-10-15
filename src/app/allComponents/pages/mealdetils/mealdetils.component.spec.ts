import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealdetilsComponent } from './mealdetils.component';

describe('MealdetilsComponent', () => {
  let component: MealdetilsComponent;
  let fixture: ComponentFixture<MealdetilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealdetilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MealdetilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
