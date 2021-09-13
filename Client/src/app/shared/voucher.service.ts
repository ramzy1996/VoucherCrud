import { Injectable } from '@angular/core';
import { Voucher } from './voucher.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VoucherService {
  constructor(private http: HttpClient) {}
  formData: Voucher = new Voucher();
  list: Voucher[];
  readonly baseURL = 'http://localhost:16221/api/Vouchers';

  postVoucher() {
    return this.http.post(this.baseURL, this.formData);
  }
  getVocher() {
    return this.http.get(this.baseURL).toPromise();
  }
  putVoucher() {
    return this.http.put(
      `${this.baseURL}/${this.formData.voucherId}`,
      this.formData
    );
  }

  deleteVoucher(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http
      .get(this.baseURL)
      .toPromise()
      .then((res) => (this.list = res as Voucher[]));
  }
}
