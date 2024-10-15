import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagelayoutComponent } from './pagelayout.component';

describe('PagelayoutComponent', () => {
  let component: PagelayoutComponent;
  let fixture: ComponentFixture<PagelayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagelayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagelayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
