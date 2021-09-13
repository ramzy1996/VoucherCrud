import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Promotion } from 'src/app/shared/promotion.model';
import { PromotionService } from 'src/app/shared/promotion.service';

@Component({
  selector: 'app-promotion-form',
  templateUrl: './promotion-form.component.html',
  styles: [],
})
export class PromotionFormComponent implements OnInit {
  constructor(public service: PromotionService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (this.service.formData.promotionId == 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
  insertRecord(form: NgForm) {
    this.service.postPromotion().subscribe(
      (res) => {
        this.resetForm(form);
        this.service.refreshList();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  updateRecord(form: NgForm) {
    this.service.putPromotion().subscribe(
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
    this.service.formData = new Promotion();
  }
}
