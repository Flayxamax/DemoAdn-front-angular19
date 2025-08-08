import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdnListComponent } from './adn-list.component';

describe('AdnListComponent', () => {
  let component: AdnListComponent;
  let fixture: ComponentFixture<AdnListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdnListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
