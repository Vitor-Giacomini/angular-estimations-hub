import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationsListComponent } from './estimations-list.component';

describe('EstimationsListComponent', () => {
  let component: EstimationsListComponent;
  let fixture: ComponentFixture<EstimationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimationsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
