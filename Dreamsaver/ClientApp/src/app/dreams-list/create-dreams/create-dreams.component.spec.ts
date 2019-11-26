import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDreamsComponent } from './create-dreams.component';

describe('CreateDreamsComponent', () => {
  let component: CreateDreamsComponent;
  let fixture: ComponentFixture<CreateDreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
