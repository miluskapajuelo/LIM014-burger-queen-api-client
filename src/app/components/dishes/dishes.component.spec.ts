import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailModel } from 'src/app/models/products-model';

import { DishesComponent } from './dishes.component';

describe('DishesComponent', () => {
  let component: DishesComponent;
  let fixture: ComponentFixture<DishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DishesComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit value to get Product', () => {

    spyOn(component.getProduct, 'emit');

    const item = {
      _id: '1'
    } as ProductDetailModel;

    component.GetProduct(item);
    expect(component.getProduct.emit).toHaveBeenCalled();
    expect(component.getProduct.emit).toHaveBeenCalledOnceWith(item);
  })
  it('should emit value to filter by categ', () => {

    spyOn(component.filterType, 'emit');

    const category ='algo'
    component.filterbyCateg(category);
    expect(component.filterType.emit).toHaveBeenCalled();
  })
});
