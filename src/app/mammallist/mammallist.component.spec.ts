import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MammallistComponent } from './mammallist.component';

describe('MammallistComponent', () => {
  let component: MammallistComponent;
  let fixture: ComponentFixture<MammallistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MammallistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MammallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
