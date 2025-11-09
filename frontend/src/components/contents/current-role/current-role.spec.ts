import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRole } from './current-role';

describe('CurrentRole', () => {
  let component: CurrentRole;
  let fixture: ComponentFixture<CurrentRole>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentRole]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentRole);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
