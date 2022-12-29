import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimizedPersonComponent } from './minimized-person.component';

describe('MinimizedPersonComponent', () => {
  let component: MinimizedPersonComponent;
  let fixture: ComponentFixture<MinimizedPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinimizedPersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinimizedPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
