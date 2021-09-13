export class Voucher {
  voucherId: number = 0;
  voucherCode: string =
    'VR#' + Math.floor(100000 + Math.random() * 900000).toString();
  voucherName: string = '';
  voucherAmount: number;
}
