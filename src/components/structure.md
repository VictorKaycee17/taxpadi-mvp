# TaxGee: Project Structure & Features

This document outlines the planned modules and layout for TaxGee, based on the research from TaxEaseNG.

## 1. Unified Compliance Hub (Dashboard)
- **Compliance Score**: A dynamic meter (0-100) indicating tax health.
- **Trend Charts**: Monthly tax liability vs. actual payments (Bar/Line charts).
- **KPI Overview**: Outstanding Tax, Average Liability, and TCC Status.
- **Security Badges**: Real-time status indicators (e.g., "Excellent Standing").

## 2. Smart e-Invoicing
- **Lifecycle Management**: Create, send, and track invoices with automated reminders.
- **Tax Filters**: Filter by Tax Type (VAT, DST), date, and amount ranges.
- **AI Reminders**: Automated follow-up scheduling based on client behavior.

## 3. Intelligence Modules
- **Gee-GPT Assistant**: Persistent sidebar AI for contextual tax queries.
- **Policy Engine**:
    - *Policy Simplifier*: AI that translates complex legal "legalese" into plain English.
    - *VAT Exemption Lookup*: Instant AI-driven check for exempt categories.
    - *Policy Analytics*: Real-time interpretation of changes in Finance Acts.
- **Sales Tax (VAT/DST) Intelligence**:
    - *AI Taxability Check*: Describe a product/service to get instant VAT/DST liability assessment.
- **Document Review (Interactive)**:
    - *Contextual Q&A*: Ask questions specifically about the document being viewed (e.g., "What is the rate in section 7?").
    - *Statutory Cross-referencing*: Automatic links to relevant tax laws.

## 4. Workflow Tools
- **Payroll (PAYE & Multi-State)**:
    - Automated Nigerian PAYE, Pension (PENCOM), and statutory deduction calculations.
    - Multi-state employee residency management.
- **Audit & Dispute Kit**:
    - *Proactive Checklist*: AI-generated list of documents required for specific audit types.
    - *Drafter*: AI generation of formal responses to tax authority queries.
- **Compliance Calendar**: 
    - Google/Outlook integration.
    - AI-Sync with government gazettes for dynamic deadline updates.

## 5. Practitioner Console (Education & Pro Hub)
- **Educational Repository**: Finance Acts, Case Law Summaries, and Training Modules.
- **Global Search**: Find laws, precedents, and training content across the platform.

## 6. Proposed Tech Stack
- **Frontend**: Vite + React + Tailwind CSS (Premium Dark Mode support).
- **Backend**: Node.js / Python (AI integration).
- **AI**: OpenAI / Claude via API for tax intelligence tasks.
