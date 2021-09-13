import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Promotion } from './promotion.model';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor(private http: HttpClient) {}
  formData: Promotion = new Promotion();
  list: Promotion[];
  readonly baseURL = 'http://localhost:16221/api/Promotions';

  postPromotion() {
    return this.http.post(this.baseURL, this.formData);
  }
  putPromotion() {
    return this.http.put(
      `${this.baseURL}/${this.formData.promotionId}`,
      this.formData
    );
  }
  getPromotion() {
    return this.http.get(this.baseURL).toPromise();
  }
  deletePromotion(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http
      .get(this.baseURL)
      .toPromise()
      .then((res) => (this.list = res as Promotion[]));
  }
  //http://localhost:16221/api/Promotions
}
