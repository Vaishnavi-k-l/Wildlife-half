import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MammalDetailsComponent } from './mammal-details.component';

describe('MammalDetailsComponent', () => {
  let component: MammalDetailsComponent;
  let fixture: ComponentFixture<MammalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MammalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MammalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
