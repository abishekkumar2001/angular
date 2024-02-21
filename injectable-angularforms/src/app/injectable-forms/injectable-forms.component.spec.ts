import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectableFormsComponent } from './injectable-forms.component';

describe('InjectableFormsComponent', () => {
  let component: InjectableFormsComponent;
  let fixture: ComponentFixture<InjectableFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectableFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectableFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
