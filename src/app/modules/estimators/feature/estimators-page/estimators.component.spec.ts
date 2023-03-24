import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatorsComponent } from './estimators.component';

describe('EstimatorsPageComponent', () => {
  let component: EstimatorsComponent;
  let fixture: ComponentFixture<EstimatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
