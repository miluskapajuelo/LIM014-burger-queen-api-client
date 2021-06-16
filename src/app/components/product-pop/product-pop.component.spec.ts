import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPopComponent } from './product-pop.component';

describe('ProductPopComponent', () => {
  let component: ProductPopComponent;
  let fixture: ComponentFixture<ProductPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
