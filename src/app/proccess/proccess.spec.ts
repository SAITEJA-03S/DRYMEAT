import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proccess } from './proccess';

describe('Proccess', () => {
  let component: Proccess;
  let fixture: ComponentFixture<Proccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
