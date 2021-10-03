import { AutoInvestmentCalculatorForm } from './AutoInvestmentCalculator.js';

describe('AutoInvestmentCalculatorForm', () => {
  it('35 year, $5000 with 3% year interest rate', () => {
    const form = new AutoInvestmentCalculatorForm();
    form.base = 0;
    form.yearly_input = 5000;
    form.rate = 0.03;
    form.years = 35;

    expect(Math.floor(form.calc())).toEqual(302310)
  })
})
