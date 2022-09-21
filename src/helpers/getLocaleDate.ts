import { IOptionsLocaleDate } from '../interfaces';

const getLocaleDate = (
  date: string | null,
  options: IOptionsLocaleDate,
): string => {
  return date
    ? new Date(date).toLocaleDateString('en-US', options)
    : new Date().toLocaleDateString('en-US', options);
};

export default getLocaleDate;
