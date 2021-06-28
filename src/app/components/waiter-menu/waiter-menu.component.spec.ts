import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterMenuComponent } from './waiter-menu.component';

describe('WaiterComponent', () => {
  let component: WaiterMenuComponent;
  let fixture: ComponentFixture<WaiterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaiterMenuComponent],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be getproduct', () => {
    const item = {
      _id: "001",
      name: "burger",
      price: 14,
      type: "burger",
    };
    const result = [{
      qty: 1,
      product: {
        name: item.name,
        id: item._id,
        price: item.price
      }
    }];
    component.getProduct(item)
    expect(component.productitem).toEqual(result)
  })
  it('shold be filter Type', () => {
    const result = [
      {
        "_id": "001",
        "name": "Ham and-cheese sandwich",
        "price": 14,
        "type": "burger",
      },
      {
        "_id": "002",
        "name": "Simple burger",
        "price": 14,
        "type": "burger",
      }];
    component.items = result;
    component.filterType('burger')
    expect(component.products).toEqual(result)
  })
  it('should be addItem', () => {
    component.productitem = [{
      "qty": 1,
      "product": {
        "name": "sprite",
        "id": "111"
      }
    }];
    const item = {
      "qty": 1,
      "product": {
        "name": "sprite",
        "id": "111"
      }
    };
    component.addItem(item)
    expect(component.productitem).toEqual([{
      "qty": 2,
      "product": {
        "name": "sprite",
        "id": "111"
      }
    }])
  })
  it('should be removeItem else', () => {
    component.productitem = [{
      "qty": 2,
      "product": {
        "name": "sprite",
        "id": "2"
      }
    }, {
      "qty": 2,
      "product": {
        "name": "sprite",
        "id": "400"
      }
    }];

    const item = {
      "qty": 1,
      "product": {
        "name": "sprite",
        "id": "2"
      }
    };
    component.removeItem(item)
    expect(component.productitem).toEqual([{
      "qty": 1,
      "product": {
        "name": "sprite",
        "id": "2"
      }
    }, {
      "qty": 2,
      "product": {
        "name": "sprite",
        "id": "400"
      }
    }])
  })
  it('should be removeItem if', () => {
    component.productitem = [{
      "qty": 1,
      "product": {
        "name": "sprite",
        "id": "2"
      }
    }, {
      "qty": 2,
      "product": {
        "name": "sprite",
        "id": "400"
      }
    }];
    const item = {
      "qty": 1,
      "product": {
        "name": "sprite",
        "id": "2"
      }
    };
    component.removeItem(item)
    expect(component.productitem).toEqual([item])
  })
it('should be delete item', () => {
  component.productitem = [{
    "qty": 1,
    "product": {
      "name": "sprite",
      "id": "2"
    }
  }, {
    "qty": 2,
    "product": {
      "name": "sprite",
      "id": "400"
    }
  }];
  const item = {
    "qty": 1,
    "product": {
      "name": "sprite",
      "id": "2"
    }
  }
  component.deleteItem(item)
  expect(component.productitem).toEqual([item])
})
});
