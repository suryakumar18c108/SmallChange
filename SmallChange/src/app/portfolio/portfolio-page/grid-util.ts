import { ValueFormatterParams } from 'ag-grid-community';

export class GridUtil {
  static cellStyleProfitLoss(value: number | null) {
    if (value && value < 0) {
      return { color: 'red' };
    }
    return { color: 'green' };
  }
  static cellStyleLoss(value: number | null) {
    if (value && value < 0) {
      return { color: 'red' };
    }
    return null;
  }

  static percentValueFormatter(params: ValueFormatterParams<any, any>) {
    if (params.value) {
      if (params.value > 0) return '+' + params.value + '%';
      else return params.value + '%';
    } else return '';
  }

  static percentUnsignedValueFormatter(params: ValueFormatterParams<any, any>) {
    if (params.value) {
      return params.value + '%';
    } else return '';
  }

  static currencySignedValueFormatter(params: ValueFormatterParams<any, any>) {
    if (params.value) {
      if (params.value > 0) return '+$' + params.value;
      else return '-$' + Math.abs(params.value);
    } else return '';
  }

  static currencyBillionValueFormatter(params: ValueFormatterParams<any, any>) {
    if (params.value) {
      //   if (params.value > 0) return '+$' + params.value;
      //   else return '-$' + Math.abs(params.value) ;
      return '$' + params.value + ' billion';
    } else return '';
  }

  static currencyValueFormatter(params: ValueFormatterParams<any, any>) {
    if (params.value) {
      if (params.value >= 0) return '$' + params.value;
      else return '-$' + Math.abs(params.value);
    } else return '';
  }
}
