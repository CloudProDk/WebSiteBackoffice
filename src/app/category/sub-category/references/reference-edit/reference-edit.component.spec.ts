import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceEditComponent } from './reference-edit.component';

describe('ReferenceEditComponent', () => {
  let component: ReferenceEditComponent;
  let fixture: ComponentFixture<ReferenceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
