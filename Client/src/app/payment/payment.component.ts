import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Voucher } from '../shared/voucher.model';
import { VoucherService } from '../shared/voucher.service';
import { PaymentService } from '../shared/payment.service';
import { Payment } from '../shared/payment.model';
import { Promotion } from '../shared/promotion.model';
import { PromotionService } from '../shared/promotion.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styles: [],
})
export class PaymentComponent implements OnInit {
  VoucherList: Voucher[];
  PromotionList: Promotion[];
  // public promo: number;
  public total: number;
  public promotionId: number;

  constructor(
    public voucherService: VoucherService,
    public promotionService: PromotionService,
    public service: PaymentService
  ) {}

  ngOnInit(): void {
    this.voucherService
      .getVocher()
      .then((res) => (this.VoucherList = res as Voucher[]));
    // this.voucherService.formData.voucherAmount
    this.promotionService
      .getPromotion()
      .then((res) => (this.PromotionList = res as Promotion[]));
  }
  // proAdd() {
  //   if (
  //     this.promotionService.formData.minAmount <= this.total &&
  //     this.promotionService.formData.maxAmount >= this.total
  //   ) {
  //     this.promotionId = this.promotionService.formData.promotionAmount;
  //   }
  // }
  onSubmit(form: NgForm) {
    if (this.service.formData.paymentId == 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
  insertRecord(form: NgForm) {
    this.service.postPayment().subscribe(
      (res) => {},
      (err) => {
        console.log(err);
      }
    );
  }
  updateRecord(form: NgForm) {
    this.service.putPayment().subscribe(
      (res) => {
        this.resetForm(form);
        this.service.refreshList();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Payment();
  }
}
