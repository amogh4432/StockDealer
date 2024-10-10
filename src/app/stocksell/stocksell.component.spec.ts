import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksellComponent } from './stocksell.component';

describe('StocksellComponent', () => {
  let component: StocksellComponent;
  let fixture: ComponentFixture<StocksellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StocksellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StocksellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
