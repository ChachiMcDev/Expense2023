import { format, startOfMonth, endOfMonth } from 'date-fns'

export const getFirstOfMonthDateString = () => startOfMonth(format(new Date(Date.now()), 'MM/dd/yyyy'));
export const getEndOfMonthDateString = () => endOfMonth(format(new Date(Date.now()), 'MM/dd/yyyy'));