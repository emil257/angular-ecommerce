import { Component, OnInit } from '@angular/core';
import { ProductCatalogService } from 'src/app/services/product-catalog.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private productCatalogService: ProductCatalogService) { }

  ngOnInit(): void {
    this.productCatalogService.clear()
    this.productCatalogService.get()
  }

}
