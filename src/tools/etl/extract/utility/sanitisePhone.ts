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
      return `${digits[0]}${digits[1]}${digits[2]}${digits[3]} ${digits[4]}${digits[5]}${digits[6]} ${digits[7]}${digits[8]}${digits[9]}`;
    }

    return `${digits[0]}${digits[1]} ${digits[2]}${digits[3]}${digits[4]}${digits[5]} ${digits[6]} ${digits[7]}${digits[8]}${digits[9]}`;
  }

  if (digits.length === 8) {
    return `${digits[0]}${digits[1]}${digits[2]}${digits[3]} ${digits[4]}${digits[5]}${digits[6]} ${digits[7]}`;
  }

  return digits;
};
