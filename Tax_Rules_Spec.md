# TaxPadi: 2026 Nigeria Tax Logic Specification
**Source Authority:** Nigeria Tax Act 2025 (Effective Jan 1, 2026)

## 1. Personal Income Tax (Individuals)
**Applicable To:** All resident individuals (Employees, Freelancers, Entrepreneurs).

### A. Income Tax Bands (Fourth Schedule)
*Apply these rates progressively to "Chargeable Income".*
1. First ₦800,000: **0%** (Tax Exempt)
2. Next ₦2,200,000: **15%**
3. Next ₦9,000,000: **18%**
4. Next ₦13,000,000: **21%**
5. Next ₦25,000,000: **23%**
6. Above ₦50,000,000: **25%**

### B. Exemptions & Reliefs (Section 30)
*Deduct these FROM Gross Income to get "Chargeable Income".*
1. **Rent Relief (New):** 20% of annual rent paid, capped at a maximum of ₦500,000.
   * *Condition:* User must declare actual rent paid.
2. **Pension Contribution:** Tax-deductible (Standard: 8% of emoluments).
3. **National Housing Fund (NHF):** Tax-deductible (Standard: 2.5% of basic salary).
4. **National Health Insurance (NHIS):** Tax-deductible (Full amount of premium paid).
5. **Minimum Wage Exemption:** Individuals earning the National Minimum Wage or less from employment are fully exempt from tax (Section 163).

### C. General Rule
* Chargeable Income = Gross Income - (Pension + NHF + NHIS + Rent Relief).

---

## 2. Companies Income Tax (CIT)
**Applicable To:** Registered Businesses and Limited Liability Partnerships.

### A. Tax Rates (Section 56)
* **Small Company** (Turnover ≤ ₦50,000,000): **0%**
* **Medium/Large Company** (Turnover > ₦50,000,000): **30%**

### B. Development Levy (Section 59)
* All companies (except Small Companies) must pay a Development Levy of **4%** on assessable profits.

---

## 3. Value Added Tax (VAT)
**Applicable To:** Goods and Services.
* **Standard Rate (Section 148):** 7.5%
* **Exempt Items (Section 186):** Medical/Pharmaceutical products, Basic food items, Educational books/materials, Baby products, Fertilizers, Locally produced animal feeds.

---

## 4. Minimum Tax Rule (Section 57)
* **Effective Tax Rate (ETR) Floor:** If a company's effective tax rate is below **15%**, they must pay an additional top-up tax to reach 15%.
* *Applies to:* Companies with turnover above ₦20 Billion (Multinationals/Large Corporates). *Note for MVP: Likely ignore this for basic users.*
---
## 5. Value Added Tax (VAT) Calculator
[cite_start]**Rule:** VAT is charged at **7.5%** on the value of taxable supplies.
**Logic:**
* **Exclusive VAT Calculation:** `Tax = Amount * 0.075`
* **Inclusive VAT Calculation:** `Tax = Amount - (Amount / 1.075)`
* [cite_start]**Exemptions:** Basic food, medical products, books, baby products, fertilizer[cite: 1136, 1137].

## 6. Capital Gains (Asset Disposal)
[cite_start]**Rule:** The old Capital Gains Tax Act is **repealed**. [cite_start]Gains are now part of "Total Income".
**Calculation Flow:**
1.  [cite_start]**Gain** = Sales Proceeds - (Cost of Acquisition + Improvement Costs + Disposal Expenses)[cite: 415, 416].
2.  **Exemptions:**
    * [cite_start]Gains on shares if disposal is < ₦150m AND gain is < ₦10m[cite: 383].
    * [cite_start]Main home (Principal Private Residence)[cite: 467].
    * [cite_start]Personal chattels (movable items) sold for < ₦5m[cite: 471].
**Result:** The output is "Chargeable Gain". This figure is added to the user's General Income Tax calculation.