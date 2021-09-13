import { Injectable } from '@angular/core';
import { Payment } from './payment.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}
  formData: Payment = new Payment();
  list: Payment[];
  readonly baseURL = 'http://localhost:16221/api/Payments';

  postPayment() {
    return this.http.post(this.baseURL, this.formData);
  }
  putPayment() {
    return this.http.put(
      `${this.baseURL}/${this.formData.promotionId}`,
      this.formData
    );
  }
  refreshList() {
    this.http
      .get(this.baseURL)
      .toPromise()
      .then((res) => (this.list = res as Payment[]));
  }
}
