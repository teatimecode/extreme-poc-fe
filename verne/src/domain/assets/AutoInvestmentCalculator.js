import { AppForm } from '../meta/model/AppForm';


/**
 * 获取定投N期以后
 *
 * 表单参数：
 *  base = 0,         本金
 *  yearly_input = 0, 年收入
 *  rate = 0.0,       年利率
 *  years = 1         定投期数
 *
 * @param  {Object} [AppForm]
 * @return {Number}                  定投终止时的金额
 */
export const getAutoInvestmentResult = (form) => {
  const {
    base = 0,
    yearly_input = 0,
    rate = 0.0,
    years = 1
  } = form;

  if (years <= 1) {
    return base * (1 + rate) + yearly_input;
  }
  return getAutoInvestmentResult({
    base,
    yearly_input,
    rate,
    years: years - 1
  }) * (1 + rate) + yearly_input;
}



/**
 * 计算每年定投，固定利率的收益。
 */
export class AutoInvestmentCalculatorForm extends AppForm {
  base = 0; // 初始本金
  yearly_input = 0; // 年末投入
  rate = 0.0; // 年利率
  years = 1; // 定投多少期/年

  calc() {
    return getAutoInvestmentResult(this); // 总收益
  }

}
