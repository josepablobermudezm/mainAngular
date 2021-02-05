import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WannaflexComponent } from './wannaflex.component';

describe('WannaflexComponent', () => {
  let component: WannaflexComponent;
  let fixture: ComponentFixture<WannaflexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WannaflexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WannaflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
