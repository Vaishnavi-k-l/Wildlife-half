import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdcardsComponent } from './birdcards.component';

describe('BirdcardsComponent', () => {
  let component: BirdcardsComponent;
  let fixture: ComponentFixture<BirdcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
