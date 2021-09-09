import { CurrencyMaskConfig, CurrencyMaskInputMode } from "ngx-currency";

export class CurrencyMask {
    separator: any;
    thousandSeparator: any;
    decimalSeparator?: any;
    showMaskTyped? = 'true';

    currencyOptionsGuarani: Partial<CurrencyMaskConfig> = {
      allowNegative: true,
      precision: 0,
      thousands: '.',
      nullable: false,
      inputMode: CurrencyMaskInputMode.NATURAL,
      align: 'right',
      allowZero: true,
      prefix: '',
      suffix: '',
      min: 0,
      max: 1000000000
    };
  
    currencyOptionsNoGuarani = {
      allowNegative: true,
      precision: 2,
      thousands: ',',
      nullable: false,
      inputMode: CurrencyMaskInputMode.FINANCIAL,
      align: 'right',
      allowZero: true,
      decimal: '.',
      prefix: '',
      suffix: '',
      min: 0,
      max: 1000000
    };
  }