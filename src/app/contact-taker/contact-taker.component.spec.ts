import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTakerComponent } from './contact-taker.component';

describe('ContactTakerComponent', () => {
  let component: ContactTakerComponent;
  let fixture: ComponentFixture<ContactTakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactTakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactTakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
