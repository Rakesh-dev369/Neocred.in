import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowTrendingUpIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  ClockIcon,
  ShieldCheckIcon,
  HeartIcon,
  UserGroupIcon,
  TruckIcon,
  GlobeAltIcon,
  CalculatorIcon,
  BanknotesIcon,
  ExclamationTriangleIcon,
  CreditCardIcon,
  ScaleIcon,
  DevicePhoneMobileIcon,
  BuildingOfficeIcon,
  DocumentChartBarIcon,
  WrenchScrewdriverIcon,
  BriefcaseIcon,
  AcademicCapIcon as GraduationCapIcon
} from '@heroicons/react/24/outline';

const CircleCard = ({ icon: Icon, title, href, delay = 0, learningContent, pageRoute }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const targetRoute = learningContent ? pageRoute : href;

  return (
    <Link
      to={targetRoute}
      className={`group flex flex-col items-center transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-300">
          <Icon className="w-8 h-8 md:w-10 md:h-10 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
        </div>
      </div>
      <span className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 max-w-20 leading-tight">
        {title}
      </span>
    </Link>
  );
};

const SectionHeading = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <h2 className={`text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-all duration-700 transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
    }`}>
      {children}
    </h2>
  );
};

const CategorySection = ({ title, items, delay = 0 }) => {
  return (
    <section className="mb-16">
      <SectionHeading delay={delay}>{title}</SectionHeading>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
        {items.map((item, index) => (
          <CircleCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            href={item.href}
            delay={delay + 100 + (index * 100)}
            learningContent={item.learningContent}
            pageRoute={item.pageRoute}
          />
        ))}
      </div>
    </section>
  );
};

export default function Home() {
  const categories = [
    {
      title: "🟢 Beginner Investments (Safe Returns)",
      items: [
        { 
          icon: CurrencyDollarIcon, 
          title: "Fixed Deposits", 
          href: "/tools?tool=FD Calculator",
          pageRoute: "/investments/fixed-deposits",
          learningContent: (
            <div>
              <h4 className="text-lg font-semibold mb-4">Fixed Deposits (FDs) - Guaranteed Returns</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                FDs offer guaranteed returns with zero risk. Your money is locked for a fixed period with predetermined interest rates.
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">How it Works:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Deposit lump sum for fixed tenure (7 days to 10 years)</li>
                    <li>• Earn fixed interest rate (5-7% annually)</li>
                    <li>• Get principal + interest at maturity</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Required Documents:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• PAN Card, Aadhaar Card</li>
                    <li>• Bank account details</li>
                    <li>• Address proof</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Best Banks (2025 Rates):</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• SBI: 6.50% (1-2 years)</li>
                    <li>• HDFC: 7.00% (2-3 years)</li>
                    <li>• ICICI: 6.75% (1-5 years)</li>
                    <li>• Axis Bank: 7.25% (1-2 years)</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        { 
          icon: BanknotesIcon, 
          title: "Recurring Deposits", 
          href: "/tools?tool=RD Calculator",
          pageRoute: "/investments/recurring-deposits",
          learningContent: (
            <div>
              <h4 className="text-lg font-semibold mb-4">Recurring Deposits (RDs) - Monthly Savings</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                RDs help you save a fixed amount monthly for a predetermined period with guaranteed returns.
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">How it Works:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Deposit fixed amount monthly (min ₹100)</li>
                    <li>• Choose tenure (6 months to 10 years)</li>
                    <li>• Earn compound interest quarterly</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Required Documents:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Savings account in same bank</li>
                    <li>• KYC documents (PAN, Aadhaar)</li>
                    <li>• Auto-debit mandate</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Best Options:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Post Office RD: 6.70%</li>
                    <li>• SBI RD: 6.50%</li>
                    <li>• HDFC RD: 6.75%</li>
                    <li>• ICICI RD: 6.50%</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        { 
          icon: DocumentTextIcon, 
          title: "PPF", 
          href: "/tools?tool=PPF Calculator",
          pageRoute: "/investments/ppf",
          learningContent: (
            <div>
              <h4 className="text-lg font-semibold mb-4">Public Provident Fund (PPF) - Tax-Free Wealth</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                PPF is a 15-year government-backed savings scheme offering tax benefits and tax-free returns.
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">How it Works:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Invest ₹500 to ₹1.5L annually for 15 years</li>
                    <li>• Current rate: 7.10% (tax-free)</li>
                    <li>• Lock-in period: 15 years (extendable)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Required Documents:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• PAN Card (mandatory)</li>
                    <li>• Aadhaar Card</li>
                    <li>• Passport size photos</li>
                    <li>• Nomination form</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Where to Open:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Any nationalized bank</li>
                    <li>• Post offices</li>
                    <li>• Online through bank websites</li>
                    <li>• SBI, HDFC, ICICI, Axis Bank</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        { 
          icon: BuildingOfficeIcon, 
          title: "NSC", 
          href: "/tools?tool=FD Calculator",
          pageRoute: "/investments/nsc",
          learningContent: (
            <div>
              <h4 className="text-lg font-semibold mb-4">National Savings Certificate (NSC) - Government Backed</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                NSC is a 5-year government savings scheme offering tax benefits under Section 80C.
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">How it Works:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Minimum investment: ₹1,000</li>
                    <li>• Current rate: 6.80% (compounded annually)</li>
                    <li>• Lock-in: 5 years (no premature withdrawal)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Required Documents:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• PAN Card</li>
                    <li>• Identity proof (Aadhaar/Passport)</li>
                    <li>• Address proof</li>
                    <li>• Passport size photo</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Where to Buy:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Post offices nationwide</li>
                    <li>• Designated banks</li>
                    <li>• Online through India Post</li>
                    <li>• No maximum investment limit</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "🟡 Intermediate Investments (Balanced Growth)",
      items: [
        { 
          icon: ArrowTrendingUpIcon, 
          title: "Mutual Funds", 
          href: "/tools?tool=SIP Calculator",
          pageRoute: "/investments/mutual-funds",
          learningContent: (
            <div>
              <h4 className="text-lg font-semibold mb-4">Mutual Funds - Your Gateway to Markets</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Mutual funds pool money from investors to buy diversified portfolios managed by professionals.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <div>
                    <h5 className="font-medium">Equity Funds (High Growth)</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">12-15% returns, 5+ years horizon</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <div>
                    <h5 className="font-medium">Debt Funds (Stable)</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">6-8% returns, 1-3 years horizon</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <div>
                    <h5 className="font-medium">Hybrid Funds (Balanced)</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">8-12% returns, moderate risk</p>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        { 
          icon: ChartBarIcon, 
          title: "SIP", 
          href: "/tools?tool=SIP Calculator",
          pageRoute: "/investments/sip",
          learningContent: (
            <div>
              <h4 className="text-lg font-semibold mb-4">SIP - The Wealth Building Machine</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Systematic Investment Plan helps you invest regularly and benefit from rupee cost averaging.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <div>
                    <h5 className="font-medium">Start Small</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Begin with just ₹500/month</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <div>
                    <h5 className="font-medium">Compounding Magic</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">₹5,000/month × 20 years = ₹46 lakhs (12% returns)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <div>
                    <h5 className="font-medium">Auto-Pilot Investing</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Disciplined investing without timing markets</p>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        { 
          icon: DocumentChartBarIcon, 
          title: "ETFs", 
          href: "/tools?tool=Lumpsum Investment Calculator",
          learningContent: (
            <div>
              <h4 className="text-lg font-semibold mb-4">Exchange Traded Funds (ETFs) - Low-Cost Investing</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                ETFs track market indices and offer diversified exposure with lower costs than mutual funds.
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">How it Works:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Tracks indices like Nifty 50, Sensex</li>
                    <li>• Low expense ratio (0.05-0.50%)</li>
                    <li>• Trade like stocks on exchanges</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Required:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Demat account</li>
                    <li>• Trading account</li>
                    <li>• KYC completion</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Best ETFs (2025):</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Nippon India Nifty 50 ETF</li>
                    <li>• SBI Nifty 50 ETF</li>
                    <li>• HDFC Nifty 50 ETF</li>
                    <li>• UTI Nifty Next 50 ETF</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        { 
          icon: ShieldCheckIcon, 
          title: "Bonds", 
          href: "/tools?tool=FD Calculator",
          learningContent: (
            <div>
              <h4 className="text-lg font-semibold mb-4">Bonds - Fixed Income Securities</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Bonds are debt instruments where you lend money to corporations or government for fixed returns.
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Types Available:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Government bonds (G-Secs): 6-7%</li>
                    <li>• Corporate bonds: 7-9%</li>
                    <li>• Tax-free bonds: 5-6%</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">How to Invest:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Through demat account</li>
                    <li>• Bond platforms (GoldenPi, IndiaBonds)</li>
                    <li>• Mutual fund route (debt funds)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Best Platforms:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Zerodha Coin</li>
                    <li>• Groww</li>
                    <li>• HDFC Securities</li>
                    <li>• ICICI Direct</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "🔴 Advanced Investments (High Risk, High Return)",
      items: [
        { 
          icon: ArrowTrendingUpIcon, 
          title: "Direct Stocks", 
          href: "/tools?tool=Lumpsum Investment Calculator",
          learningContent: (
            <div>
              <h4 className="text-lg font-semibold mb-4">Direct Stocks - Own Company Shares</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Buy shares of individual companies and become a part-owner. High returns possible but requires research.
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">How to Start:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Open demat + trading account</li>
                    <li>• Complete KYC process</li>
                    <li>• Fund your account</li>
                    <li>• Research and buy stocks</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Best Brokers (2025):</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Zerodha: ₹20/trade</li>
                    <li>• Groww: ₹20/trade</li>
                    <li>• Upstox: ₹20/trade</li>
                    <li>• Angel One: ₹20/trade</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Top Stocks to Watch:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Reliance Industries</li>
                    <li>• TCS, Infosys (IT)</li>
                    <li>• HDFC Bank, ICICI Bank</li>
                    <li>• Asian Paints, Nestle</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        { 
          icon: BuildingOfficeIcon, 
          title: "REITs", 
          href: "/tools?tool=Real Returns Calculator",
          learningContent: (
            <div>
              <h4 className="text-lg font-semibold mb-4">REITs - Real Estate Without Buying Property</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Real Estate Investment Trusts let you invest in commercial real estate with small amounts.
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">How it Works:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Minimum investment: ₹10,000-15,000</li>
                    <li>• Quarterly dividend payouts</li>
                    <li>• Listed on stock exchanges</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Available REITs (2025):</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Embassy Office Parks REIT</li>
                    <li>• Mindspace Business Parks REIT</li>
                    <li>• Brookfield India Real Estate</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Where to Buy:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Any stock broker</li>
                    <li>• Zerodha, Groww, Upstox</li>
                    <li>• Bank trading platforms</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        { 
          icon: CurrencyDollarIcon, 
          title: "Commodities", 
          href: "/tools?tool=Gold Investment Calculator",
          learningContent: (
            <div>
              <h4 className="text-lg font-semibold mb-4">Commodities - Gold, Silver & More</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Invest in physical commodities like gold, silver, crude oil through various instruments.
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Investment Options:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Gold ETFs, Gold Mutual Funds</li>
                    <li>• Sovereign Gold Bonds (SGB)</li>
                    <li>• Silver ETFs</li>
                    <li>• Commodity futures</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Best Gold Options:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• SBI Gold ETF</li>
                    <li>• HDFC Gold ETF</li>
                    <li>• Sovereign Gold Bonds</li>
                    <li>• Digital Gold (Paytm, PhonePe)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Platforms:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Zerodha Coin</li>
                    <li>• Groww</li>
                    <li>• Paytm Money</li>
                    <li>• HDFC Securities</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        { 
          icon: WrenchScrewdriverIcon, 
          title: "Crypto", 
          href: "/tools?tool=Real Returns Calculator",
          learningContent: (
            <div>
              <h4 className="text-lg font-semibold mb-4">Cryptocurrency - Digital Assets</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                <span className="text-red-500 font-medium">High Risk:</span> Cryptocurrencies are highly volatile. Invest only what you can afford to lose.
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Popular Cryptocurrencies:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Bitcoin (BTC)</li>
                    <li>• Ethereum (ETH)</li>
                    <li>• Binance Coin (BNB)</li>
                    <li>• Cardano (ADA)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Indian Exchanges (2025):</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• WazirX</li>
                    <li>• CoinDCX</li>
                    <li>• Zebpay</li>
                    <li>• Mudrex</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Tax Implications:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• 30% tax on crypto gains</li>
                    <li>• 1% TDS on transactions</li>
                    <li>• No loss offset allowed</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "🎯 Goal-Based Investing",
      items: [
        { 
          icon: GraduationCapIcon, 
          title: "Child Education", 
          href: "/tools?tool=Education Cost Estimator",
          learningContent: (
            <div>
              <h4 className="text-lg font-semibold mb-4">Child Education Fund - Secure Their Future</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Education costs are rising at 10-12% annually. Start early to build a substantial corpus.
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Cost Estimates (2025):</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Engineering: ₹20-50 lakhs</li>
                    <li>• Medical: ₹30-80 lakhs</li>
                    <li>• MBA: ₹25-60 lakhs</li>
                    <li>• Study abroad: ₹50L-2 crores</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Best Investment Options:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Equity mutual funds (15+ years)</li>
                    <li>• Child education plans</li>
                    <li>• Sukanya Samriddhi (girl child)</li>
                    <li>• PPF + SIP combination</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Recommended Funds:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• SBI Magnum Children's Benefit Fund</li>
                    <li>• HDFC Children's Gift Fund</li>
                    <li>• ICICI Pru Child Care Plan</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        { 
          icon: HeartIcon, 
          title: "Marriage Fund", 
          href: "/tools?tool=Goal-Based Investment Planner",
          learningContent: (
            <div>
              <h4 className="text-lg font-semibold mb-4">Marriage Fund - Dream Wedding Planning</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Plan for wedding expenses 5-10 years in advance to avoid financial stress.
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Average Costs (2025):</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Simple wedding: ₹5-10 lakhs</li>
                    <li>• Mid-range: ₹15-25 lakhs</li>
                    <li>• Lavish: ₹50L+ lakhs</li>
                    <li>• Destination: ₹20-50 lakhs</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Investment Strategy:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• 5+ years: Equity funds (70%)</li>
                    <li>• 2-5 years: Hybrid funds (50%)</li>
                    <li>• &lt;2 years: Debt funds/FD</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Best Options:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• SIP in large-cap funds</li>
                    <li>• Balanced advantage funds</li>
                    <li>• Target date funds</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        { 
          icon: BuildingOfficeIcon, 
          title: "Home Purchase", 
          href: "/tools?tool=Rent vs Buy Home Calculator",
          learningContent: (
            <div>
              <h4 className="text-lg font-semibold mb-4">Home Purchase Fund - Own Your Dream Home</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Build corpus for down payment (20-25% of property value) and reduce loan burden.
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Property Costs (2025):</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Tier-1 cities: ₹1-5 crores</li>
                    <li>• Tier-2 cities: ₹50L-2 crores</li>
                    <li>• Tier-3 cities: ₹20-80 lakhs</li>
                    <li>• Down payment: 20-25%</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Investment Timeline:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• 10+ years: Equity funds (80%)</li>
                    <li>• 5-10 years: Balanced funds</li>
                    <li>• 3-5 years: Debt funds</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Additional Costs:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Registration: 5-7%</li>
                    <li>• Stamp duty: 3-7%</li>
                    <li>• Legal fees: 1-2%</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        { 
          icon: ClockIcon, 
          title: "Retirement", 
          href: "/tools?tool=Retirement Goal Planner",
          learningContent: (
            <div>
              <h4 className="text-lg font-semibold mb-4">Retirement Planning - Financial Freedom at 60</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Build a corpus that can sustain your lifestyle for 25-30 years post-retirement.
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Corpus Required:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Basic lifestyle: ₹2-5 crores</li>
                    <li>• Comfortable: ₹5-10 crores</li>
                    <li>• Luxurious: ₹10+ crores</li>
                    <li>• Rule: 25x annual expenses</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Best Investment Mix:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• EPF/PPF: 30%</li>
                    <li>• Equity funds: 50%</li>
                    <li>• NPS: 10%</li>
                    <li>• Debt funds: 10%</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Key Schemes:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• National Pension Scheme (NPS)</li>
                    <li>• Employee Provident Fund</li>
                    <li>• Retirement mutual funds</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "💰 Tax-Saving Investments (80C Benefits)",
      items: [
        { 
          icon: ChartBarIcon, 
          title: "ELSS Funds", 
          href: "/tools?tool=Tax Saver",
          learningContent: (
            <div>
              <h4 className="text-lg font-semibold mb-4">ELSS Funds - Tax Saving + Wealth Creation</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Equity Linked Savings Scheme offers tax deduction up to ₹1.5L with potential for high returns.
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Key Features:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Tax deduction: Up to ₹1.5L (80C)</li>
                    <li>• Lock-in period: 3 years (shortest)</li>
                    <li>• Expected returns: 12-15% annually</li>
                    <li>• LTCG tax: 10% above ₹1L</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Top ELSS Funds (2025):</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Axis Long Term Equity Fund</li>
                    <li>• Mirae Asset Tax Saver Fund</li>
                    <li>• DSP Tax Saver Fund</li>
                    <li>• Invesco India Tax Plan</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Where to Invest:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Groww, Zerodha Coin</li>
                    <li>• Paytm Money, ET Money</li>
                    <li>• Direct from AMC websites</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        { 
          icon: CurrencyDollarIcon, 
          title: "Tax Saver FD", 
          href: "/tools?tool=FD Calculator",
          learningContent: (
            <div>
              <h4 className="text-lg font-semibold mb-4">Tax Saver Fixed Deposits - Safe Tax Benefits</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                5-year FDs offering tax deduction under 80C with guaranteed returns but lower growth.
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Features:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Lock-in: 5 years (no premature withdrawal)</li>
                    <li>• Tax deduction: Up to ₹1.5L</li>
                    <li>• Interest: 6.5-7.5% annually</li>
                    <li>• Interest taxable as per slab</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Best Rates (2025):</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• SBI: 6.50%</li>
                    <li>• HDFC Bank: 7.00%</li>
                    <li>• ICICI Bank: 6.75%</li>
                    <li>• Axis Bank: 7.25%</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Comparison:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• ELSS: Higher returns, 3-year lock-in</li>
                    <li>• Tax Saver FD: Safe, 5-year lock-in</li>
                    <li>• PPF: 15-year, tax-free returns</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        { 
          icon: ShieldCheckIcon, 
          title: "Life Insurance", 
          href: "/tools?tool=Term Life Insurance Estimator",
          learningContent: (
            <div>
              <h4 className="text-lg font-semibold mb-4">Life Insurance - Protection + Tax Benefits</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Life insurance premiums qualify for 80C deduction while providing financial security to family.
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Types Available:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Term insurance: Pure protection</li>
                    <li>• Endowment: Insurance + savings</li>
                    <li>• ULIP: Insurance + investment</li>
                    <li>• Money-back: Periodic returns</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Best Term Plans (2025):</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• LIC Tech Term</li>
                    <li>• HDFC Life Click 2 Protect Plus</li>
                    <li>• ICICI Pru iProtect Smart</li>
                    <li>• Max Life Smart Secure Plus</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Coverage Needed:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Rule: 10-15x annual income</li>
                    <li>• Consider loans, expenses</li>
                    <li>• Buy early for lower premiums</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        { 
          icon: DocumentTextIcon, 
          title: "PPF & NPS", 
          href: "/tools?tool=NPS Return Calculator",
          learningContent: (
            <div>
              <h4 className="text-lg font-semibold mb-4">PPF & NPS - Long-term Tax-free Growth</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Both offer tax benefits under 80C with additional benefits under other sections.
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">PPF Benefits:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• EEE status (tax-free throughout)</li>
                    <li>• Current rate: 7.10%</li>
                    <li>• 15-year lock-in</li>
                    <li>• Loan facility after 6 years</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">NPS Benefits:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• 80C: Up to ₹1.5L</li>
                    <li>• 80CCD(1B): Additional ₹50K</li>
                    <li>• Market-linked returns</li>
                    <li>• Retirement corpus building</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Other 80C Options:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• NSC: 6.80% for 5 years</li>
                    <li>• Sukanya Samriddhi: 8.20%</li>
                    <li>• Home loan principal</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "Insurance",
      items: [
        { icon: HeartIcon, title: "Health", href: "/tools?tool=Health Insurance Premium Estimator" },
        { icon: ShieldCheckIcon, title: "Life", href: "/tools?tool=Term Life Insurance Estimator" },
        { icon: UserGroupIcon, title: "Term Plan", href: "/tools?tool=Term Life Insurance Estimator" },
        { icon: TruckIcon, title: "Vehicle", href: "/tools?tool=Vehicle Insurance Estimator" },
        { icon: GlobeAltIcon, title: "Travel", href: "/insurance-platforms" }
      ]
    },
    {
      title: "Emergency Fund Plan",
      items: [
        { icon: CalculatorIcon, title: "Budget Planner", href: "/tools?tool=Budget Planner" },
        { icon: BanknotesIcon, title: "50/30/20 Rule", href: "/tools?tool=50/30/20 Rule Budgeter" },
        { icon: ExclamationTriangleIcon, title: "Emergency Fund Calculator", href: "/tools?tool=Emergency Fund Calculator" }
      ]
    },
    {
      title: "Banking & Credit",
      items: [
        { icon: CreditCardIcon, title: "Best Credit Cards", href: "/credit-cards" },
        { icon: ScaleIcon, title: "Debt Manager", href: "/tools?tool=Debt Repayment Planner" },
        { icon: CalculatorIcon, title: "Loan EMI Calculator", href: "/tools?tool=Home Loan EMI Calculator" },
        { icon: DevicePhoneMobileIcon, title: "UPI & Payments", href: "/business-tools" }
      ]
    },
    {
      title: "Business & Startup Finance",
      items: [
        { icon: BuildingOfficeIcon, title: "Govt Schemes", href: "/government-schemes" },
        { icon: DocumentChartBarIcon, title: "GST Calculator", href: "/business-tools" },
        { icon: WrenchScrewdriverIcon, title: "Business Tools", href: "/business-tools" },
        { icon: BriefcaseIcon, title: "Startup Loans", href: "/personal-loans" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master Your Financial Future
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Comprehensive financial tools, AI guidance, and expert insights for your wealth journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/learn"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Learning
            </Link>
            <Link
              to="/chatbot"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
            >
              Ask AI Assistant
            </Link>
            <Link
              to="/expert-consultation"
              className="bg-purple-600 text-white hover:bg-purple-700 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              📞 Expert Consultation
            </Link>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="bg-gray-900 dark:bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Financial Life?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands who've already started their journey to financial freedom
          </p>
          <Link
            to="/tools"
            className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg inline-block"
          >
            Explore All Tools
          </Link>
        </div>
      </section>


    </div>
  );
}