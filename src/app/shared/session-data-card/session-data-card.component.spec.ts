import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionDataCardComponent } from './session-data-card.component';

describe('SessionDataCardComponent', () => {
  let component: SessionDataCardComponent;
  let fixture: ComponentFixture<SessionDataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionDataCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
