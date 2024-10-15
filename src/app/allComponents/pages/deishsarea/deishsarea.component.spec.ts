import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeishsareaComponent } from './deishsarea.component';

describe('DeishsareaComponent', () => {
  let component: DeishsareaComponent;
  let fixture: ComponentFixture<DeishsareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeishsareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeishsareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
