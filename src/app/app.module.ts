import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductSelectionComponent } from './product-selection/product-selection.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfigureProductComponent } from './configure-product/configure-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductSelectionComponent,
    ConfigureProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
