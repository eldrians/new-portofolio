import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressiveImageComponent } from '../../../../app/shared/components/progressive-image/progressive-image.component';

describe('ProgressiveImageComponent', () => {
  let component: ProgressiveImageComponent;
  let fixture: ComponentFixture<ProgressiveImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressiveImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressiveImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
