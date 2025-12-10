# TaxPadi MVP

A modern Nigerian Tax Calculator web application for the 2026 tax regime.

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Features

### Individual Tax Calculation
- Gross Income input
- Automatic deductions (Pension, NHF, NHIS)
- Rent Relief (20% of rent, capped at ₦500k)
- Progressive tax bands (0%, 15%, 18%, 21%, 23%, 25%)
- First ₦800,000 tax-exempt

### Company Tax Calculation
- Annual turnover input
- Small companies (≤₦50M): 0% tax
- Large companies (>₦50M): 30% tax

### General Features
- User type selection (Individual/Company)
- Nigeria Tax Act 2025 compliance
- Mobile-first responsive design
- Clean fintech UI with green/white palette

## License

MIT
