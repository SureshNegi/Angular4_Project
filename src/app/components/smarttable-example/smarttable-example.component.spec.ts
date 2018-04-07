import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmarttableExampleComponent } from './smarttable-example.component';

describe('SmarttableExampleComponent', () => {
  let component: SmarttableExampleComponent;
  let fixture: ComponentFixture<SmarttableExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmarttableExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmarttableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
