import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchProductPipe } from 'src/app/pipes/search-product.pipe';

import { ManageProductsTableComponent } from './manage-products-table.component';

describe('ManageProductsTableComponent', () => {
  let component: ManageProductsTableComponent;
  let fixture: ComponentFixture<ManageProductsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageProductsTableComponent, SearchProductPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
