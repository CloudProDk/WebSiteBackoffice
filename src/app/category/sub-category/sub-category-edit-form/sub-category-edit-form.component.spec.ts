import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryEditFormComponent } from './sub-category-edit-form.component';

describe('SubCategoryEditFormComponent', () => {
  let component: SubCategoryEditFormComponent;
  let fixture: ComponentFixture<SubCategoryEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategoryEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoryEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
