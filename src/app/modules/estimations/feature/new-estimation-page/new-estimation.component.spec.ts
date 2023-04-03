import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEstimationComponent } from './new-estimation.component';

describe('NewEstimationComponent', () => {
  let component: NewEstimationComponent;
  let fixture: ComponentFixture<NewEstimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEstimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEstimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
