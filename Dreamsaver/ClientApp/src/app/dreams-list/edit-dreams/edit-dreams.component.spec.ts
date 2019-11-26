import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDreamsComponent } from './edit-dreams.component';

describe('EditDreamsComponent', () => {
  let component: EditDreamsComponent;
  let fixture: ComponentFixture<EditDreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
