import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CguConfirmation } from './cgu-confirmation';

describe('CguConfirmation', () => {
  let component: CguConfirmation;
  let fixture: ComponentFixture<CguConfirmation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CguConfirmation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CguConfirmation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
