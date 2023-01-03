import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChokesComponent } from './chokes.component';

describe('ChokesComponent', () => {
  let component: ChokesComponent;
  let fixture: ComponentFixture<ChokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChokesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
