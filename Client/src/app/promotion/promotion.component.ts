import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../shared/promotion.service';
import { Promotion } from '../shared/promotion.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styles: [],
})
export class PromotionComponent implements OnInit {
  constructor(public service: PromotionService) {}

  // navigateToVoucher(): void {
  //   this.router.navigate(['/voucher']);
  // }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord: Promotion) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id: number) {
    if (confirm('are you to delete?')) {
      this.service.deletePromotion(id).subscribe(
        (res) => {
          this.service.refreshList();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
