import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDatalistComponent } from './product-datalist.component';

describe('ProductDatalistComponent', () => {
  let component: ProductDatalistComponent;
  let fixture: ComponentFixture<ProductDatalistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDatalistComponent]
    });
    fixture = TestBed.createComponent(ProductDatalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
