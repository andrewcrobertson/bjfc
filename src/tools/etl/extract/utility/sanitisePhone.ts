import startsWith from 'lodash/startsWith';

export const sanitisePhone = (value: string) => {
  if (value === null) return null;

  const digitsRaw = (value.match(/\d/g) ?? []).join('');
  const digits = (digitsRaw.length === 9 && digitsRaw[0] === '4' ? `0` : '') + digitsRaw;

  if (digits.length === 0) {
    return null;
  }

  if (digits.length === 10) {
    if (startsWith(digits, '04')) {
      return `${digits.substring(0, 4)} ${digits.substring(4, 7)} ${digits.substring(7, 10)}`;
    }

    return `${digits.substring(0, 2)} ${digits.substring(2, 6)} ${digits.substring(6, 10)}`;
  }

  if (digits.length === 8) {
    return `${digits.substring(0, 4)} ${digits.substring(4, 8)}`;
  }

  return digits;
};
