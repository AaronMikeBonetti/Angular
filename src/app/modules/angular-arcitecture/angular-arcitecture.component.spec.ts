import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularArcitectureComponent } from './angular-arcitecture.component';

describe('AngularArcitectureComponent', () => {
  let component: AngularArcitectureComponent;
  let fixture: ComponentFixture<AngularArcitectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularArcitectureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularArcitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
