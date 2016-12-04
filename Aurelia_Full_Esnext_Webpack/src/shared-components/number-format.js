import numeral from 'numeral';

export class NumberFormatValueConverter {
  toView(value) {
    return numeral(value).format('0,0');
  }
}
