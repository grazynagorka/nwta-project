import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodsComponent } from './page/foods.component';
import { FoodsRoutingModule } from './foods-routing.module';



@NgModule({
  declarations: [FoodsComponent],
  imports: [
    CommonModule,
    FoodsRoutingModule
  ]
})
export class FoodsModule { }
