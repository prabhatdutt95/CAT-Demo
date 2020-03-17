import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductSelectionComponent } from './product-selection/product-selection.component';
import { ConfigureProductComponent } from './configure-product/configure-product.component';

const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full'},
  {path: 'product', component: ProductSelectionComponent},
  {path: 'configure', component: ConfigureProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
