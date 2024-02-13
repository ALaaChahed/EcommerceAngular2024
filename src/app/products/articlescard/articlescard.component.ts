import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-articlescard',
  templateUrl: './articlescard.component.html',
  styleUrls: ['./articlescard.component.css']
})
export class ArticlescardComponent {
  productsList: Products[] = [];
  dtOptions: DataTables.Settings = {};

  constructor(private productsServ: ProductsService) { }
  
 
  ngOnInit() {
    
    this.productsServ.getAllProduct().subscribe((data: Products[])=> {
      
      this.productsList = data;

    })

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }


}
