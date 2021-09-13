import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VoucherComponent } from './voucher/voucher.component';
import { VoucherFormComponent } from './voucher/voucher-form/voucher-form.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotionFormComponent } from './promotion/promotion-form/promotion-form.component';
// import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';

// const appRoutes: Routes = [
//   { path: 'voucher', component: VoucherComponent },
//   { path: 'promotion', component: PromotionComponent },
// ];
@NgModule({
  declarations: [
    AppComponent,
    VoucherComponent,
    VoucherFormComponent,
    PromotionComponent,
    PromotionFormComponent,
    PaymentComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
