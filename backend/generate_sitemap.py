#!/usr/bin/env python3
import json
import xml.etree.ElementTree as ET
from datetime import datetime

# Complete site structure
pages = {
    # Main pages
    "/": {"priority": "1.0", "changefreq": "daily"},
    "/learn": {"priority": "0.9", "changefreq": "weekly"},
    "/tools": {"priority": "0.9", "changefreq": "weekly"},
    "/chatbot": {"priority": "0.8", "changefreq": "monthly"},
    "/about": {"priority": "0.6", "changefreq": "monthly"},
    "/contact": {"priority": "0.6", "changefreq": "monthly"},
    "/news": {"priority": "0.7", "changefreq": "daily"},
    "/explore": {"priority": "0.7", "changefreq": "weekly"},
    
    # Learning Pillars
    "/learn/personal-finance": {"priority": "0.9", "changefreq": "weekly"},
    "/learn/traditional-investments": {"priority": "0.8", "changefreq": "weekly"},
    "/learn/market-linked-investments": {"priority": "0.8", "changefreq": "weekly"},
    "/learn/banking-payments": {"priority": "0.8", "changefreq": "weekly"},
    "/learn/insurance-risk": {"priority": "0.8", "changefreq": "weekly"},
    "/learn/corporate-finance": {"priority": "0.7", "changefreq": "monthly"},
    "/learn/govt-public-finance": {"priority": "0.7", "changefreq": "monthly"},
    "/learn/alt-fintech": {"priority": "0.7", "changefreq": "monthly"},
    
    # Traditional Investments
    "/learn/fixed-deposits": {"priority": "0.7", "changefreq": "monthly"},
    "/learn/recurring-deposits": {"priority": "0.7", "changefreq": "monthly"},
    "/learn/savings-account": {"priority": "0.7", "changefreq": "monthly"},
    "/learn/ppf": {"priority": "0.7", "changefreq": "monthly"},
    "/learn/nsc": {"priority": "0.7", "changefreq": "monthly"},
    "/learn/current-account": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/kisan-vikas-patra": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/senior-citizens-savings": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/sukanya-samriddhi-yojana": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/post-office-monthly-income": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/government-bonds": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/corporate-bonds": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/tax-free-bonds": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/state-development-loans": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/employees-provident-fund": {"priority": "0.7", "changefreq": "monthly"},
    "/learn/voluntary-provident-fund": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/national-pension-scheme": {"priority": "0.7", "changefreq": "monthly"},
    "/learn/atal-pension-yojana": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/physical-gold": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/gold-etfs": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/sovereign-gold-bonds": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/silver-investment": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/endowment-plans": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/money-back-policies": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/guaranteed-savings-plans": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/unit-linked-insurance-plans": {"priority": "0.6", "changefreq": "monthly"},
    
    # Market-Linked Investments
    "/learn/direct-equity": {"priority": "0.7", "changefreq": "weekly"},
    "/learn/blue-chip-stocks": {"priority": "0.7", "changefreq": "weekly"},
    "/learn/mid-small-cap-stocks": {"priority": "0.7", "changefreq": "weekly"},
    "/learn/ipos": {"priority": "0.7", "changefreq": "weekly"},
    "/learn/rights-issues": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/equity-mutual-funds": {"priority": "0.7", "changefreq": "weekly"},
    "/learn/debt-mutual-funds": {"priority": "0.7", "changefreq": "weekly"},
    "/learn/hybrid-funds": {"priority": "0.7", "changefreq": "weekly"},
    "/learn/index-funds-etfs": {"priority": "0.7", "changefreq": "weekly"},
    "/learn/derivatives-trading": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/futures-options": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/commodity-trading": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/currency-trading": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/index-derivatives": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/portfolio-management-services": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/alternative-investment-funds": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/hedge-funds": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/direct-real-estate": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/reits": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/fractional-real-estate": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/global-equity": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/international-mutual-funds": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/foreign-bonds": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/market-linked-gold": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/commodity-etfs": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/energy-investments": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/structured-products": {"priority": "0.6", "changefreq": "monthly"},
    "/learn/cryptocurrency": {"priority": "0.6", "changefreq": "weekly"},
    "/learn/crypto-etfs": {"priority": "0.6", "changefreq": "weekly"},
    "/learn/tokenized-assets": {"priority": "0.6", "changefreq": "monthly"},
    
    # Calculators
    "/calculators/sip": {"priority": "0.8", "changefreq": "monthly"},
    "/calculators/home-loan-emi": {"priority": "0.8", "changefreq": "monthly"},
    "/calculators/fd": {"priority": "0.7", "changefreq": "monthly"},
    "/calculators/budget-planner": {"priority": "0.7", "changefreq": "monthly"},
    "/calculators/emergency-fund": {"priority": "0.7", "changefreq": "monthly"},
    "/calculators/retirement-goal": {"priority": "0.7", "changefreq": "monthly"},
    "/calculators/ppf": {"priority": "0.7", "changefreq": "monthly"},
    "/calculators/rd": {"priority": "0.7", "changefreq": "monthly"},
    "/calculators/car-loan-emi": {"priority": "0.7", "changefreq": "monthly"},
    "/calculators/credit-card-emi": {"priority": "0.7", "changefreq": "monthly"},
    "/calculators/education-loan-emi": {"priority": "0.7", "changefreq": "monthly"},
    "/calculators/health-insurance": {"priority": "0.7", "changefreq": "monthly"},
    "/calculators/term-life-insurance": {"priority": "0.7", "changefreq": "monthly"},
    "/calculators/vehicle-insurance": {"priority": "0.6", "changefreq": "monthly"},
    "/calculators/rule-of-72": {"priority": "0.6", "changefreq": "monthly"},
    "/calculators/first-salary-planner": {"priority": "0.6", "changefreq": "monthly"},
    "/calculators/budget-rule": {"priority": "0.6", "changefreq": "monthly"},
    "/calculators/form16-breakdown": {"priority": "0.6", "changefreq": "monthly"},
    "/calculators/net-worth-tracker": {"priority": "0.6", "changefreq": "monthly"},
    "/calculators/post-office-fd": {"priority": "0.6", "changefreq": "monthly"},
    "/calculators/step-up-sip": {"priority": "0.6", "changefreq": "monthly"},
    "/calculators/lumpsum": {"priority": "0.6", "changefreq": "monthly"},
    "/calculators/mutual-fund-tracker": {"priority": "0.6", "changefreq": "monthly"},
    "/calculators/gold-investment": {"priority": "0.6", "changefreq": "monthly"},
    "/calculators/loan-eligibility": {"priority": "0.6", "changefreq": "monthly"},
    "/calculators/loan-affordability": {"priority": "0.6", "changefreq": "monthly"},
    "/calculators/epf-maturity": {"priority": "0.6", "changefreq": "monthly"},
    "/calculators/hra-exemption": {"priority": "0.6", "changefreq": "monthly"},
    "/calculators/budget-goal-planner": {"priority": "0.6", "changefreq": "monthly"},
    "/calculators/goal-based-investment": {"priority": "0.6", "changefreq": "monthly"},
    "/calculators/nps-return": {"priority": "0.6", "changefreq": "monthly"},
    "/calculators/rent-vs-buy": {"priority": "0.6", "changefreq": "monthly"},
    "/calculators/annuity": {"priority": "0.6", "changefreq": "monthly"},
    "/calculators/debt-repayment": {"priority": "0.6", "changefreq": "monthly"},
    "/calculators/real-returns": {"priority": "0.6", "changefreq": "monthly"},
    "/calculators/credit-score-simulator": {"priority": "0.6", "changefreq": "monthly"},
    
    # Credit Cards
    "/credit-cards": {"priority": "0.7", "changefreq": "weekly"},
    "/credit-cards/sbi": {"priority": "0.6", "changefreq": "monthly"},
    "/credit-cards/bob": {"priority": "0.6", "changefreq": "monthly"},
    "/credit-cards/pnb": {"priority": "0.6", "changefreq": "monthly"},
    "/credit-cards/union": {"priority": "0.6", "changefreq": "monthly"},
    "/credit-cards/canara": {"priority": "0.6", "changefreq": "monthly"},
    "/credit-cards/indian": {"priority": "0.6", "changefreq": "monthly"},
    "/credit-cards/boi": {"priority": "0.6", "changefreq": "monthly"},
    "/credit-cards/central": {"priority": "0.6", "changefreq": "monthly"},
    "/credit-cards/uco": {"priority": "0.6", "changefreq": "monthly"},
    "/credit-cards/iob": {"priority": "0.6", "changefreq": "monthly"},
    "/credit-cards/bom": {"priority": "0.6", "changefreq": "monthly"},
    
    # Other Services
    "/insurance-platforms": {"priority": "0.6", "changefreq": "monthly"},
    "/personal-loans": {"priority": "0.6", "changefreq": "monthly"},
    "/government-schemes": {"priority": "0.6", "changefreq": "monthly"},
    "/finance-jobs": {"priority": "0.6", "changefreq": "monthly"},
    "/business-tools": {"priority": "0.6", "changefreq": "monthly"},
    "/rewards": {"priority": "0.6", "changefreq": "monthly"},
    "/expert-consultation": {"priority": "0.6", "changefreq": "monthly"},
    "/pan-check": {"priority": "0.5", "changefreq": "monthly"},
    "/loan-check": {"priority": "0.5", "changefreq": "monthly"},
    
    # Legal Pages
    "/privacy": {"priority": "0.4", "changefreq": "yearly"},
    "/terms": {"priority": "0.4", "changefreq": "yearly"},
    "/disclaimer": {"priority": "0.4", "changefreq": "yearly"},
    "/cookies": {"priority": "0.4", "changefreq": "yearly"},
}

def generate_complete_sitemap():
    # Generate XML sitemap
    urlset = ET.Element("urlset")
    urlset.set("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9")
    
    for path, meta in pages.items():
        url = ET.SubElement(urlset, "url")
        loc = ET.SubElement(url, "loc")
        loc.text = f"https://neocred.in{path}"
        
        priority = ET.SubElement(url, "priority")
        priority.text = meta["priority"]
        
        changefreq = ET.SubElement(url, "changefreq")
        changefreq.text = meta["changefreq"]
        
        lastmod = ET.SubElement(url, "lastmod")
        lastmod.text = datetime.now().strftime("%Y-%m-%d")
    
    tree = ET.ElementTree(urlset)
    ET.indent(tree, space="  ", level=0)
    tree.write("../frontend/public/sitemap-complete.xml", encoding="utf-8", xml_declaration=True)
    
    # Generate JSON for AI crawlers
    site_data = {
        "site": "NeoCred",
        "url": "https://neocred.in",
        "description": "AI-Powered Financial Platform with 40+ calculators and comprehensive learning resources",
        "lastUpdated": datetime.now().isoformat(),
        "totalPages": len(pages),
        "pages": []
    }
    
    for path, meta in pages.items():
        page_data = {
            "url": f"https://neocred.in{path}",
            "path": path,
            "priority": float(meta["priority"]),
            "changefreq": meta["changefreq"],
            "category": get_category(path)
        }
        site_data["pages"].append(page_data)
    
    with open("../frontend/public/complete-site-data.json", "w") as f:
        json.dump(site_data, f, indent=2)
    
    print(f"Generated complete sitemap with {len(pages)} pages")
    print("Files created:")
    print("- sitemap-complete.xml")
    print("- complete-site-data.json")

def get_category(path):
    if path.startswith("/learn/"):
        return "Learning"
    elif path.startswith("/calculators/"):
        return "Calculators"
    elif path.startswith("/credit-cards/"):
        return "Credit Cards"
    elif path in ["/", "/learn", "/tools", "/chatbot"]:
        return "Main"
    else:
        return "Other"

if __name__ == "__main__":
    generate_complete_sitemap()