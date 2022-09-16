import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOptionsComponent } from './show-options.component';

describe('ShowOptionsComponent', () => {
  let component: ShowOptionsComponent;
  let fixture: ComponentFixture<ShowOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
