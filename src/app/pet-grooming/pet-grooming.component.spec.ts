import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetGroomingComponent } from './pet-grooming.component';

describe('PetGroomingComponent', () => {
  let component: PetGroomingComponent;
  let fixture: ComponentFixture<PetGroomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetGroomingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetGroomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
