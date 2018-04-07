import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgprimeTableExampleComponent } from './ngprime-table-example.component';

describe('NgprimeTableExampleComponent', () => {
  let component: NgprimeTableExampleComponent;
  let fixture: ComponentFixture<NgprimeTableExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgprimeTableExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgprimeTableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
