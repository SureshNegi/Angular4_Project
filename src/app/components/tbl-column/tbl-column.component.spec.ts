import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TblColumnComponent } from './tbl-column.component';

describe('TblColumnComponent', () => {
  let component: TblColumnComponent;
  let fixture: ComponentFixture<TblColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TblColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TblColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
