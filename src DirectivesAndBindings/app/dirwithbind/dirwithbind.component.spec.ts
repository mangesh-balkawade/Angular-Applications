import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirwithbindComponent } from './dirwithbind.component';

describe('DirwithbindComponent', () => {
  let component: DirwithbindComponent;
  let fixture: ComponentFixture<DirwithbindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirwithbindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirwithbindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
