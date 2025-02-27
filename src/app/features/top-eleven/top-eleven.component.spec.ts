import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopElevenComponent } from './top-eleven.component';

describe('TopElevenComponent', () => {
  let component: TopElevenComponent;
  let fixture: ComponentFixture<TopElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopElevenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
