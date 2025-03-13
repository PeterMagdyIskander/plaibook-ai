import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentStatsDataCardComponent } from './recent-stats-data-card.component';

describe('RecentStatsDataCardComponent', () => {
  let component: RecentStatsDataCardComponent;
  let fixture: ComponentFixture<RecentStatsDataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentStatsDataCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentStatsDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
