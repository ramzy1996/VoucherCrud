export class Promotion {
  promotionId: number = 0;
  promotionName: string;
  promotionCode: string =
    'PRO#' + Math.floor(100000 + Math.random() * 900000).toString();
  minAmount: number;
  maxAmount: number;
  promotionAmount: number;
}
