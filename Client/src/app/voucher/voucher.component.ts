import { Component, OnInit } from '@angular/core';
import { Voucher } from '../shared/voucher.model';
import { VoucherService } from '../shared/voucher.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styles: [],
})
export class VoucherComponent implements OnInit {
  constructor(public service: VoucherService) {}

  // navigateToPromo(): void {
  //   this.router.navigate(['/promotion']);
  // }
  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord: Voucher) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id: number) {
    if (confirm('are you to delete?')) {
      this.service.deleteVoucher(id).subscribe(
        (res) => {
          this.service.refreshList();
          // this.toastr.error('Deleted successful', 'Coupon');
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
