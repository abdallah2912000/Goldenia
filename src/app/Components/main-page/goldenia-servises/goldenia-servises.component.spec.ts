import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldeniaServisesComponent } from './goldenia-servises.component';

describe('GoldeniaServisesComponent', () => {
  let component: GoldeniaServisesComponent;
  let fixture: ComponentFixture<GoldeniaServisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldeniaServisesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoldeniaServisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
