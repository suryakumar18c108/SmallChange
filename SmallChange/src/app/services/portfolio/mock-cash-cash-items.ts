import { CashCashItem } from "./model/cash-cash-item";

export const CASH_CASH_ITEMS: CashCashItem[] = [
    {
      date: '20 Dec 2019',
      type: 'Payout',
      description: 'Payout from WBC.AX',
      amount: 30,
      balance: 39395,
    },
    {
      date: '18 Dec 2019',
      type: 'Deposit',
      description: 'Payout from WBC.AX',
      amount: 60000,
      balance: 39425,
    },
    {
      date: '1 Dec 2019',
      type: 'Buy trade',
      description: 'Buy trade of 1000 VGLAX shares',
      amount: 500,
      balance: -20575,
    },
    {
      date: '15 Nov 2019',
      type: 'Sell trade',
      description: 'Sell trade of 200 AAPL shares',
      amount: 1000,
      balance: -20075,
    },
    {
      date: '3 Nov 2019',
      type: 'Payout',
      description: 'Payout from SOL.AX',
      amount: 250,
      balance: -30075,
    },
  ];