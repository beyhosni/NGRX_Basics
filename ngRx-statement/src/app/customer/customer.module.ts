import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomerViewComponent, CustomerAddComponent]
})
export class CustomerModule { }
