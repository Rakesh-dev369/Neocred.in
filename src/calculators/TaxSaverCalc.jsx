import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MAX_80C = 150000;
const MAX_80D = 25000;
const STANDARD_DEDUCTION = 50000;

const validationSchema = Yup.object({
  annualIncome: Yup.number()
    .required('Annual income is required')
    .min(100000, 'Minimum income is ₹1,00,000')
    .max(50000000, 'Maximum income is ₹5 crores'),
  investment80C: Yup.number()
    .min(0, 'Cannot be negative')
    .max(MAX_80C, `Maximum is ₹${MAX_80C.toLocaleString()}`),
  medicalInsurance: Yup.number()
    .min(0, 'Cannot be negative')
    .max(MAX_80D, `Maximum is ₹${MAX_80D.toLocaleString()}`),
  hraExemption: Yup.number()
    .min(0, 'Cannot be negative'),
  regime: Yup.string().required('Tax regime is required')
});

const TaxSaverCalculator = () => {
  const [result, setResult] = useState(null);

  const calculateTax = (values) => {
    const { total: totalDeductions } = getDeductionsOldRegime(values);
    const taxableIncomeOld = Math.max(values.annualIncome - totalDeductions, 0);
    const taxOld = taxOldRegime(taxableIncomeOld);
    const taxNew = taxNewRegime(values.annualIncome);
    const selectedTax = values.regime === "old" ? taxOld : taxNew;
    
    setResult({
      inputs: values,
      totalDeductions,
      taxableIncomeOld,
      taxOld,
      taxNew,
      selectedTax
    });
  };

  const getDeductionsOldRegime = (inputs) => {
    const deduction80C = Math.min(inputs.investment80C, MAX_80C);
    const deduction80D = Math.min(inputs.medicalInsurance, MAX_80D);
    const total = deduction80C + deduction80D + inputs.hraExemption + STANDARD_DEDUCTION;
    return { deduction80C, deduction80D, total };
  };

  const taxOldRegime = (income) => {
    if (income <= 250000) return 0;
    if (income <= 500000) return (income - 250000) * 0.05;
    if (income <= 1000000) return 12500 + (income - 500000) * 0.2;
    return 112500 + (income - 1000000) * 0.3;
  };

  const taxNewRegime = (income) => {
    if (income <= 300000) return 0;
    if (income <= 600000) return (income - 300000) * 0.05;
    if (income <= 900000) return 15000 + (income - 600000) * 0.1;
    if (income <= 1200000) return 45000 + (income - 900000) * 0.15;
    if (income <= 1500000) return 90000 + (income - 1200000) * 0.2;
    return 150000 + (income - 1500000) * 0.3;
  };



  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Income Tax Calculator (Old vs New)</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold mb-6 text-white">Income Tax Calculator</h3>
          
          <Formik
            initialValues={{
              annualIncome: 800000,
              investment80C: 100000,
              medicalInsurance: 20000,
              hraExemption: 60000,
              regime: "old"
            }}
            validationSchema={validationSchema}
            onSubmit={calculateTax}
          >
            {({ values, isSubmitting }) => (
              <Form className="space-y-4">
                <div className="flex gap-4 mb-4">
                  <label className="flex items-center gap-2 text-white">
                    <Field
                      type="radio"
                      name="regime"
                      value="old"
                      className="text-white"
                    />
                    Old Regime
                  </label>
                  <label className="flex items-center gap-2 text-white">
                    <Field
                      type="radio"
                      name="regime"
                      value="new"
                      className="text-white"
                    />
                    New Regime
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Annual Income (₹)
                  </label>
                  <Field
                    name="annualIncome"
                    type="number"
                    className="input-field"
                    placeholder="800000"
                  />
                  <ErrorMessage name="annualIncome" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {values.regime === "old" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-1">
                        Investments under Section 80C (max ₹1,50,000)
                      </label>
                      <Field
                        name="investment80C"
                        type="number"
                        className="input-field"
                        placeholder="100000"
                      />
                      <ErrorMessage name="investment80C" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-1">
                        Medical Insurance (Section 80D, max ₹25,000)
                      </label>
                      <Field
                        name="medicalInsurance"
                        type="number"
                        className="input-field"
                        placeholder="20000"
                      />
                      <ErrorMessage name="medicalInsurance" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-1">
                        HRA Exemption
                      </label>
                      <Field
                        name="hraExemption"
                        type="number"
                        className="input-field"
                        placeholder="60000"
                      />
                      <ErrorMessage name="hraExemption" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Calculate Tax
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4">Tax Calculation Results</h3>
              <div className="space-y-3">
                {result.inputs.regime === "old" && (
                  <>
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="text-white/80">Standard Deduction:</span>
                      <span className="text-blue-400 font-semibold">₹{STANDARD_DEDUCTION.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="text-white/80">Total Deductions:</span>
                      <span className="text-green-400 font-semibold">₹{result.totalDeductions.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="text-white/80">Taxable Income (Old):</span>
                      <span className="text-white font-semibold">₹{result.taxableIncomeOld.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="text-white/80">Tax (Old Regime):</span>
                      <span className="text-red-400 font-semibold">₹{result.taxOld.toLocaleString()}</span>
                    </div>
                  </>
                )}

                {result.inputs.regime === "new" && (
                  <>
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="text-white/80">Taxable Income:</span>
                      <span className="text-white font-semibold">₹{result.inputs.annualIncome.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="text-white/80">Tax (New Regime):</span>
                      <span className="text-green-400 font-semibold">₹{result.taxNew.toLocaleString()}</span>
                    </div>
                  </>
                )}

                <div className="flex justify-between items-center py-2 pt-4">
                  <span className="text-white/80 text-lg">Final Estimated Tax:</span>
                  <span className="text-yellow-400 font-bold text-xl">₹{result.selectedTax.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Tax Comparison</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                  <span className="text-white/80">Old Regime Tax:</span>
                  <span className="text-red-400 font-semibold">₹{result.taxOld.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                  <span className="text-white/80">New Regime Tax:</span>
                  <span className="text-green-400 font-semibold">₹{result.taxNew.toLocaleString()}</span>
                </div>
                <div className="text-center p-3 bg-white/10 rounded">
                  <p className="text-white/80 text-sm mb-1">Recommended:</p>
                  <p className="text-yellow-400 font-bold">
                    {result.taxOld < result.taxNew ? 'Old Regime' : 'New Regime'}
                  </p>
                  <p className="text-white/60 text-xs mt-1">
                    Save ₹{Math.abs(result.taxOld - result.taxNew).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaxSaverCalculator;
