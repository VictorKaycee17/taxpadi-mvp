# TaxGee UI Structure Blueprint


This document serves as the master blueprint for the frontend development of TaxGee. It details the hierarchy, layout, and component specifications for every page in the application, based on the TaxEaseNG research.


## 1. Global Layout (Shell)
**Path**: `/layouts/AppLayout`
- **Sidebar (`Sidebar.tsx`)**:
  - **Logo**: "TaxGee" (Top Left).
  - **Navigation Menu**:
    - Dashboard (Home icon)
    - e-Invoicing (Document icon)
    - Sales Tax (Percentage icon)
    - Policy Engine (Book icon)
    - Compliance Calendar (Calendar icon)
    - Payroll (Users icon)
    - Audit & Dispute (Shield icon)
    - Document Review (Search-doc icon)
    - Practitioner Console (Grad-cap icon)
    - Settings (Cog icon)
  - **User Profile**: Mini-profile card at bottom (Avatar + Name).
- **Top Navigation (`TopBar.tsx`)**:
  - **Global Search**: "Search for payments, invoices, or tax laws..."
  - **Notifications**: Bell icon with badge for deadlines/alerts.
  - **Gee-AI Toggle**: Button to expand/collapse the persistent AI assistant.


## 2. Dashboard (Unified Compliance Hub)
**Path**: `/pages/Dashboard`
**Components**:
- **Welcome Header**: "Welcome back, [Company Name]". Date display.
- **Health Grid** (4-col grid):
  - `MetricCard`: **Outstanding Tax** (Amount, Red status).
  - `MetricCard`: **Avg. Tax Liability** (Amount, Trend indicator).
  - `MetricCard`: **TCC Status** (Badge: "Active/Inactive", Expiry date).
  - `MetricCard`: **Compliance Score** (Circular progress meter 0-100).
- **Analytics Section**:
  - `ChartWidget`: **Tax Liability History** (Bar chart, last 6 months).
  - `ChartWidget`: **Compliance Trend** (Line chart).
- **Quick Actions**:
  - Buttons: "Pay Now", "Upload Receipt", "Ask AI".


## 3. e-Invoicing Module
**Path**: `/pages/Invoicing`
**Components**:
- **Stats Row**: Outstanding, Overdue, Paid Today.
- **Toolbar**:
  - Search Input ("Client or Invoice #").
  - Filters: Date Range, Amount Range, Tax Type (VAT, DST).
  - Primary Button: "Create New Invoice".
- **Data Table**:
  - Columns: Date, Invoice #, Client, Amount, Tax (VAT/WHT), Status, Action (Menu).
- **Modals**:
  - `CreateInvoiceModal`: Dynamic form with line items, auto-tax calculation.
  - `AddClientModal`: Client details form.


## 4. Sales Tax Intelligence
**Path**: `/pages/SalesTax`
**Components**:
- **Tabs**: "Overview", "AI Taxability Check".
- **Tab: Overview**:
  - KPI Cards: Total Sales, VAT Collected, Remittance Due.
  - `SalesChart`: Monthly visualization.
- **Tab: AI Taxability Check**:
  - **Input**: Large TextArea ("Describe your product/service...").
  - **Action**: "Check Taxability" Button (Sparkles icon).
  - **Output Card**:
    - Verdict: "Taxable" / "Exempt".
    - Explanation: AI generated reasoning citing tax laws.
    - Relevant Law: Link to VAT Act section.


## 5. Policy Intelligence Engine
**Path**: `/pages/PolicyEngine`
**Components**:
- **Search Hero**: Large central input "Sales tax rules for software...".
- **Feature Cards**:
  - "Simplifier": Upload/Paste text -> Get Plain English.
  - "Statutory Search": Filterable list of Acts/Gazettes.
  - "Exemption Checker": Search tool for specific goods (e.g., "Rice", "Books").
- **Output Area**: Split view (Source Text vs. AI Explanation).


## 6. Compliance Calendar
**Path**: `/pages/Calendar`
**Components**:
- **Layout**: Two-column (Main Calendar vs. Upcoming List).
- **Main**: `FullCalendar` component (Month/Week/Day).
  - Events color-coded by tax type (CIT=Blue, VAT=Green).
- **Sidebar List**: "Upcoming Obligations".
  - `TaskItem`: "VAT Filing Due" (High Priority badge).
- **Action**: "Sync with FIRS" (Refresh button).


## 7. Payroll (Multi-State)
**Path**: `/pages/Payroll`
**Components**:
- **Header**: "Payroll Run: [Current Month]".
- **Stats**: Total Gross, Total PAYE, Net Payable.
- **Employee Table**:
  - Columns: Name, State of Residence, Gross, PAYE, Pension, Net.
- **Action**: "Run Payroll" (Wizard stepping through Validation -> Calculation -> Approval).


## 8. Audit & Dispute Kit
**Path**: `/pages/Audit`
**Components**:
- **Audit Selector**: Dropdown ("Choose Audit Type: VAT, CIT...").
- **Checklist View**:
  - Interactive list of required documents (e.g., "Bank Statements", "Invoices").
  - Upload status for each item.
- **Dispute Drafter**:
  - Input: "Paste Query Letter from FIRS".
  - Options: Tone (Formal, Legal).
  - Output: Editable rich-text editor with drafted response.


## 9. Document Review
**Path**: `/pages/DocumentReview`
**Components**:
- **Layout**: Split Screen (Document Viewer | AI Assistant).
- **Left Panel (Viewer)**: PDF/Text viewer for Tax Acts.
- **Right Panel (AI)**:
  - Chat interface contextualized to the open document.
  - "Generic Questions" chips.


## 10. Design System Tokens
- **Colors**:
  - Primary: `Teal-600` (Brand).
  - Secondary: `Slate-800` (Dark UI elements).
  - Success: `Emerald-500` (Compliance).
  - Warning: `Amber-500` (Approaching deadlines).
  - Danger: `Rose-500` (Overdue/Non-compliant).
- **Typography**: Inter or Plus Jakarta Sans.
- **Spacing**: 4px grid system.