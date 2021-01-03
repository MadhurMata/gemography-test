'use strict';
import moment from 'moment';

export const getDateFromAMonthAgo = () => {
  return moment(moment().subtract(30, 'days')).format('YYYY-MM-DD');
};

export const daysFromCreatedDate = (date) => {
  const todaysDate = moment(new Date());
  return Math.abs(moment(date).diff(todaysDate, 'days'));
};

export const numFormatter = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
    : '' + Math.sign(num) * Math.abs(num);
};
