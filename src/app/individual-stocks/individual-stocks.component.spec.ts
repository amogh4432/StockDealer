import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualStocksComponent } from './individual-stocks.component';

describe('IndividualStocksComponent', () => {
  let component: IndividualStocksComponent;
  let fixture: ComponentFixture<IndividualStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualStocksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
