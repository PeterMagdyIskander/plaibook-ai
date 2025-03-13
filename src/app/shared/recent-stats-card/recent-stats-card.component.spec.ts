import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentStatsCardComponent } from './recent-stats-card.component';

describe('RecentStatsCardComponent', () => {
  let component: RecentStatsCardComponent;
  let fixture: ComponentFixture<RecentStatsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentStatsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentStatsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
