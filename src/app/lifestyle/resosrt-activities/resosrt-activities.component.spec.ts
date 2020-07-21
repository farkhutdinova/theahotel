import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResosrtActivitiesComponent } from './resosrt-activities.component';

describe('ResosrtActivitiesComponent', () => {
  let component: ResosrtActivitiesComponent;
  let fixture: ComponentFixture<ResosrtActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResosrtActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResosrtActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
