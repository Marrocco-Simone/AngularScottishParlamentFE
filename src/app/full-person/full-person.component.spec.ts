import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPersonComponent } from './full-person.component';

describe('FullPersonComponent', () => {
  let component: FullPersonComponent;
  let fixture: ComponentFixture<FullPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullPersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
