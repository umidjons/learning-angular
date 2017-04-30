import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from "../product.model";

@Component({
    selector: 'products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

    @Input()
    productList: Product[];

    @Output()
    onProductSelected: EventEmitter<Product>;

    private currentProduct: Product;

    constructor() {
        this.onProductSelected = new EventEmitter();
    }

    ngOnInit() {
    }

    clicked(product: Product): void {
        this.currentProduct = product;
        this.onProductSelected.emit(this.currentProduct);
    }

    isSelected(product: Product): boolean {
        if (!product || !this.currentProduct) {
            return false;
        }

        return product.sku === this.currentProduct.sku;
    }

}
