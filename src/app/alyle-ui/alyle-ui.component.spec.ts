import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlyleUIComponent } from './alyle-ui.component';

describe('AlyleUIComponent', () => {
  let component: AlyleUIComponent;
  let fixture: ComponentFixture<AlyleUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlyleUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlyleUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
