import split from 'lodash/split';

export const getNextBirthday = (dateOfBirth: string) => {
  const monthRaw = new Date().getMonth() + 1;
  const [year, month, day] = split(dateOfBirth, '-');
  const yearCheck = (new Date().getFullYear() + (parseInt(month) < monthRaw ? 1 : 0)).toString();
  const nextBirthday = `${yearCheck}-${month}-${day}`;
  return nextBirthday;
};
