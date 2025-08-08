import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdnStatsComponent } from './adn-stats.component';

describe('AdnStatsComponent', () => {
  let component: AdnStatsComponent;
  let fixture: ComponentFixture<AdnStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdnStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdnStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
