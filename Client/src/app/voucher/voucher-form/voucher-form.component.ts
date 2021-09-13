import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Voucher } from 'src/app/shared/voucher.model';
import { VoucherService } from 'src/app/shared/voucher.service';

@Component({
  selector: 'app-voucher-form',
  templateUrl: './voucher-form.component.html',
  styles: [],
})
export class VoucherFormComponent implements OnInit {
  constructor(public service: VoucherService) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    if (this.service.formData.voucherId == 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
  insertRecord(form: NgForm) {
    this.service.postVoucher().subscribe(
      (res) => {
        this.resetForm(form);
        this.service.refreshList();
        // this.toastr.success('Submitted Success!', 'Coupon');
      },
      (err) => {
        console.log(err);
      }
    );
  }
  updateRecord(form: NgForm) {
    this.service.putVoucher().subscribe(
      (res) => {
        this.resetForm(form);
        this.service.refreshList();
        // this.toastr.info('Updated Success!', 'Coupon');
      },
      (err) => {
        console.log(err);
      }
    );
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Voucher();
  }
}
