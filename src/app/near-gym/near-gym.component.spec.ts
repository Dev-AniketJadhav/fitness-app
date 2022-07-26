import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearGymComponent } from './near-gym.component';

describe('NearGymComponent', () => {
  let component: NearGymComponent;
  let fixture: ComponentFixture<NearGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearGymComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
