function calcNetSalary(basicSalary, benefits) {
  //  Gross salary
  let grossSalary = basicSalary + benefits;

  //  Tier1 and Tier2 NssfDeduction i used Math.min so that i can get the minimum number for the tie1 and tier2
  let pensionablePay = Math.min (grossSalary, 72000);
  let Tier1 = Math.min (pensionablePay, 8000) * 0.06;
  let Tier2 = 0;
  if (pensionablePay > 8000) {
    nssfTier2 = Math.min (pensionablePay - 8000) * 0.06;
  }
  let nssfDeduction = Tier1 + Tier2;

  // SHIF (2.75% of gross) – tax deductible
  let shifDeduction = grossSalary * 0.0275;

  // Housing Levy (1.5% of gross) – tax deductible
  let housingLevy = grossSalary * 0.015;

  // Taxable Pay
  let taxablePay = grossSalary - (nssfDeduction + shifDeduction + housingLevy);

  //  PAYE Taxes rates from the lowest to highest
  function PAYE(income) {
    let tax = 0;
    if (income <= 24000) {
      tax = income * 0.10;
    } else if (income <= 32333) {
      tax = (24000 * 0.10) + ((income - 24000) * 0.25);
    } else if (income <= 500000) {
      tax = (24000 * 0.10) + (8333 * 0.25) + ((income - 32333) * 0.30);
    } else if (income <= 800000) {
      tax = (24000 * 0.10) + (8333 * 0.25) + ((500000 - 32333) * 0.30) + ((income - 500000) * 0.325);
    } else {
      tax = (24000 * 0.10) + (8333 * 0.25) + ((500000 - 32333) * 0.30) + (300000 * 0.325) + ((income - 800000) * 0.35);
    }
    return tax;
  }

  let paye = PAYE(taxablePay);

  // Personal relief (Ksh 2,400 per month)
  let personalRelief = 2400;
  let netPAYE = (paye - personalRelief);

  // Net Salary
  let netSalary = grossSalary - (nssfDeduction + shifDeduction + housingLevy + netPAYE);

  // Used toFixed methord so that i can round of to two dp
  return {
    grossSalary: grossSalary.toFixed(2), 
    nssfDeduction: nssfDeduction.toFixed(2),
    shifDeduction: shifDeduction.toFixed(2),
    paye: netPAYE.toFixed(2),
    netSalary: netSalary.toFixed(2)
  };
}
// Test
let result = calcNetSalary(60000, 10000); // Basic = 60,000; Benefits = 10,000 Total Salary = 70,000
console.log(result);