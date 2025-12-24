# TAXGEE PRO RECEIPTS PAGE – UI/UX SPECIFICATION

**Version:** 1.0  
**Product Tier:** Pro (₦40,000/year)  
**Effective Date:** December 24, 2025  
**Last Updated:** December 24, 2025  
**Design System:** TaxGee Design System v1.0

---

## TABLE OF CONTENTS

1. [Overview & Purpose](#1-overview--purpose)
2. [Page Architecture](#2-page-architecture)
3. [Layout & Grid System](#3-layout--grid-system)
4. [Component Specifications](#4-component-specifications)
5. [Receipt Upload & Processing](#5-receipt-upload--processing)
6. [Receipt Library & Management](#6-receipt-library--management)
7. [Receipt Details & Tagging](#7-receipt-details--tagging)
8. [Filtering & Search](#8-filtering--search)
9. [Receipt Linking & Matching](#9-receipt-linking--matching)
10. [Export & Reporting](#10-export--reporting)
11. [Interactive Behaviors](#11-interactive-behaviors)
12. [Data Bindings & States](#12-data-bindings--states)
13. [User Workflows](#13-user-workflows)
14. [Responsive Design Rules](#14-responsive-design-rules)
15. [Accessibility Requirements](#15-accessibility-requirements)
16. [Performance & Loading States](#16-performance--loading-states)
17. [React Component Structure](#17-react-component-structure)
18. [API Endpoints](#18-api-endpoints)
19. [Appendix: Design System Alignment](#19-appendix-design-system-alignment)

---

## 1. OVERVIEW & PURPOSE

### Receipts Page Function

The TaxGee Pro Receipts Page enables business owners and finance managers to store, organize, categorize, and link purchase receipts for tax deduction substantiation and audit readiness. It serves as a **digital receipt vault** that automates receipt processing through OCR, enables intelligent tagging, and facilitates audit-ready export.

**Key Distinction:**
- **Operations Module**: Core business transactions (invoicing, sales tax, payroll)
- **Receipts Module**: Supporting documentation for expense deductions and tax compliance

### Core Capabilities

1. **Receipt Upload & Processing**: Multiple input methods (file, image, email forwarding) with OCR extraction
2. **Automatic Data Extraction**: OCR reads date, vendor, amount, tax info, and line items
3. **Smart Categorization**: AI-suggested expense categories based on vendor/description
4. **Tax Type Tagging**: Link to CIT, VAT (input), WHT, PAYE, or other deduction types
5. **Project/Cost Center Linking**: Allocate receipts to projects, clients, or cost centers
6. **Transaction Matching**: Link receipts to invoices, payments, and payroll records
7. **Advanced Filtering**: Date range, vendor, amount, category, tax type, match status
8. **Deductibility Assessment**: Smart indicators for deductible vs. non-deductible expenses
9. **Audit Pack Export**: Zip file with receipts + indexed CSV for FIRS audits
10. **Tax Year Reporting**: Deductible expenses report with totals per category and tax type

### User Personas

1. **Business Owner**: Uploads receipts, tracks deductible expenses, reviews audit reports
2. **Finance Manager**: Organizes receipts, tags expenses, manages allocations
3. **Accountant**: Reviews tagged receipts, links to records, generates audit packs
4. **Compliance Officer**: Ensures receipt quality, validates deductibility, handles disputes
5. **Tax Manager**: Prepares tax year reports, deductible expenses summary

---

## 2. PAGE ARCHITECTURE

### Overall Layout Structure

```text
┌──────────────────────────────────────────────────────────────┐
│ [Logo] TaxGee     [Global Search]  🔔  [Gee-AI]  👤        │  ← Top Bar
├────────┬──────────────────────────────────────────────────────┤
│        │                                                      │
│ Sidebar│ Receipts & Expenses                                  │
│        │ [Breadcrumb: Home > Receipts & Expenses]            │
│  Nav   │                                                      │
│  Menu  │ ┌─────── Quick Stats Bar ─────────────────────────┐ │
│        │ │ Total Receipts: 324  |  This Month: 42          │ │
│        │ │ Total Deductible: ₦2.4M  |  Untagged: 8        │ │
│        │ └────────────────────────────────────────────────┘ │
│        │                                                      │
│        │ [📤 Upload Receipt] [🔍 Search/Filter] [📊 Reports] │
│        │                                                      │
│        │ ┌─────── Filter Bar ─────────────────────────────┐ │
│        │ │ Date: [Jan-Dec 2025 ▼] | Category: [All ▼]   │ │
│        │ │ Tax Type: [All ▼] | Status: [All ▼]          │ │
│        │ │ Amount: [₦0 - ₦1M ▼]                          │ │
│        │ │                             [Clear Filters]    │ │
│        │ └────────────────────────────────────────────────┘ │
│        │                                                      │
│        │ ┌─ Receipt List/Grid View ──────────────────────┐ │
│        │ │                                                 │ │
│        │ │ [Receipt Cards in Grid or Table View]           │ │
│        │ │                                                 │ │
│        │ │ Pagination: < 1 2 3 ... 15 >                  │ │
│        │ │                                                 │ │
│        │ └─────────────────────────────────────────────────┘ │
│        │                                                      │
└────────┴──────────────────────────────────────────────────────┘
```

### Information Architecture

```text
Receipts Module
├─ Page Header
│  ├─ Page Title & Breadcrumb
│  ├─ Quick Stats Dashboard (key metrics)
│  └─ Primary Action Buttons
├─ Filter & Search Section
│  ├─ Date Range Picker
│  ├─ Category Filter
│  ├─ Tax Type Filter
│  ├─ Status Filter (Matched/Unmatched/Deductible)
│  ├─ Amount Range Slider
│  ├─ Vendor Search
│  └─ Clear All Filters Button
├─ View Toggle (Grid / Table / List)
│  └─ View Preferences Selector
├─ Receipt Display Area
│  ├─ Receipt Cards (with preview thumbnail)
│  ├─ Receipt Table Rows (detailed view)
│  └─ Pagination Controls
├─ Bulk Actions Bar (appears on selection)
│  ├─ Multi-select Checkbox
│  ├─ Bulk Tag
│  ├─ Bulk Export
│  └─ Bulk Delete
└─ Footer
   └─ Records Count & Last Updated
```

---

## 3. LAYOUT & GRID SYSTEM

### Grid System (Consistent with All Modules)

- **Base Unit**: 4px
- **Column Count**: 12-column grid
- **Gutter Width**: 20px
- **Max Content Width**: 1400px

### Receipts Page Specific

- **Max content width**: 1400px, centered on desktop
- **Main content padding**: 32px desktop, 20px tablet, 16px mobile
- **Card spacing**: 16px (compact receipts grid)
- **Section spacing**: 24px between major sections
- **Filter bar height**: 80px
- **Quick stats bar height**: 60px

### Responsive Breakpoints

| Breakpoint        | Layout                                    |
|-------------------|------------------------------------------ |
| Desktop (≥1024px) | Grid view (3-4 cards/row) + table option |
| Tablet (768–1023) | Grid view (2-3 cards/row), table wrapped |
| Mobile (<768px)   | Single column list view, table vertical  |

---

## 4. COMPONENT SPECIFICATIONS

### 4.1 Page Header Component

**Component Name:** `ReceiptsHeader`  
**Path:** `/components/receipts/ReceiptsHeader.tsx`

**Layout:**

```text
┌──────────────────────────────────────────────────────────────┐
│ Home > Receipts & Expenses                                   │
│                                                              │
│ Receipts & Expenses                                          │
│ Store and organize purchase receipts for tax deductions.    │
│                                                              │
│ [📤 Upload Receipt] [🔍 Advanced Search] [📊 Reports] [⚙️]  │
└──────────────────────────────────────────────────────────────┘
```

**Container:**

- Background: Linear gradient (Teal-50 to White)
- Border-bottom: 1px solid Slate-200
- Padding: 24px
- Margin-bottom: 24px

**Title:**

- Font-size: 28px
- Font-weight: 700
- Color: Slate-900
- Margin-bottom: 8px

**Subtitle:**

- Font-size: 14px
- Color: Slate-600
- Font-weight: 400
- Margin-bottom: 20px

**Action Buttons:**

- Display: Flex, gap: 12px
- **Upload Receipt**: Primary button (Teal-500, with upload icon)
- **Advanced Search**: Secondary button (Slate-200)
- **Reports & Export**: Secondary button (Slate-200)
- **Settings**: Tertiary icon button (⚙️ Slate-600)

---

### 4.2 Quick Stats Bar

**Component Name:** `QuickStatsBar`  
**Path:** `/components/receipts/QuickStatsBar.tsx`

**Layout:**

```text
┌──────────────────────────────────────────────────────────────┐
│ 📄 Total Receipts: 324  |  📅 This Month: 42                 │
│ 💰 Total Deductible: ₦2,456,000  |  ⚠️ Untagged: 8          │
│ 📊 This Year VAT Input: ₦184,320                             │
└──────────────────────────────────────────────────────────────┘
```

**Container:**

- Background: Teal-50
- Border: 1px solid Teal-200
- Border-radius: 8px
- Padding: 16px
- Margin-bottom: 24px
- Display: Grid
- Grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
- Gap: 24px

**Stat Item:**

- Display: Flex, flex-direction: column, gap: 4px

**Stat Icon:**

- Font-size: 20px
- Margin-right: 8px
- Inline with label

**Stat Label:**

- Font-size: 12px
- Font-weight: 500
- Color: Slate-600

**Stat Value:**

- Font-size: 18px
- Font-weight: 700
- Color: Teal-700

**Stat Badges (if applicable):**

- Untagged: Rose-100 background, Rose-700 text
- Pending Match: Amber-100 background, Amber-700 text
- Matched: Emerald-100 background, Emerald-700 text

---

### 4.3 Filter Bar Component

**Component Name:** `ReceiptFiltersBar`  
**Path:** `/components/receipts/ReceiptFiltersBar.tsx`

**Layout:**

```text
┌──────────────────────────────────────────────────────────────┐
│ Date Range: [Jan - Dec 2025 ▼]  Category: [All ▼]          │
│ Tax Type: [All ▼]  Match Status: [All ▼]                   │
│ Amount: [₦0 - ₦1M ▼]  Vendor Search: [_________]           │
│ [🔍 Search] [Clear All Filters] [Save Filter Set ⭐]       │
└──────────────────────────────────────────────────────────────┘
```

**Container:**

- Background: White
- Border: 1px solid Slate-200
- Border-radius: 8px
- Padding: 16px
- Margin-bottom: 20px
- Display: Grid
- Grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))
- Gap: 12px

**Filter Item:**

- Display: Flex, flex-direction: column, gap: 4px

**Filter Label:**

- Font-size: 12px
- Font-weight: 600
- Color: Slate-900

**Filter Input (Dropdown/Select):**

- Padding: 8px 12px
- Border: 1px solid Slate-200
- Border-radius: 6px
- Font-size: 13px
- Background: White
- Cursor: pointer

**Filter Input Focus:**

- Border-color: Teal-500
- Box-shadow: 0 0 0 3px rgba(33, 128, 141, 0.1)

**Clear Filters Button:**

- Secondary button, Slate-200
- Font-size: 13px
- Margin-top: 20px (spans full width on mobile)

**Save Filter Set Button:**

- Link button (Teal-600)
- Icon: ⭐ (star)
- Saves current filter combination for quick reuse

---

### 4.4 Receipt Card Component (Grid View)

**Component Name:** `ReceiptCard`  
**Path:** `/components/receipts/ReceiptCard.tsx`

**Layout:**

```text
┌──────────────────────────────────┐
│ [PDF Thumbnail / Image Preview]  │
│                                  │
│ Vendor Name                      │
│ Amount: ₦45,000 | Date: 15 Dec  │
│                                  │
│ Category: Office Supplies        │
│ Tax Type: VAT Input ✓            │
│ Status: [Matched ✓]             │
│                                  │
│ [View Details] [⋮ Menu]         │
└──────────────────────────────────┘
```

**Container:**

- Background: White
- Border: 1px solid Slate-200
- Border-radius: 8px
- Padding: 12px
- Transition: all 0.2s ease
- Cursor: pointer
- Hover: Box-shadow lift, border-color change to Teal-300

**Thumbnail:**

- Height: 120px
- Background: Slate-100
- Border-radius: 6px
- Margin-bottom: 12px
- Display: Flex, align-items: center, justify-content: center
- Font-size: 40px (if no preview available)

**Vendor Name:**

- Font-size: 14px
- Font-weight: 600
- Color: Slate-900
- Margin-bottom: 8px
- Truncate (1 line)

**Amount & Date:**

- Font-size: 13px
- Color: Slate-700
- Margin-bottom: 8px
- Display: Flex, justify-content: space-between

**Category & Tax Type:**

- Font-size: 12px
- Color: Slate-600
- Margin-bottom: 8px
- Display: Flex, gap: 8px

**Status Badge:**

- Matched: Emerald-100 background, Emerald-700 text, ✓ icon
- Unmatched: Slate-100 background, Slate-600 text
- Untagged: Amber-100 background, Amber-700 text
- Font-size: 11px
- Padding: 2px 8px
- Border-radius: 12px

**Card Actions:**

- [View Details]: Link button (Teal-600)
- [⋮ Menu]: Icon button with dropdown (More options)

**Card States:**

- **Selected**: Border-color: Teal-500, background: Teal-50
- **Hover**: Box-shadow: 0 4px 12px rgba(0,0,0,0.1)
- **Untagged**: Amber-100 border, highlights need for tagging

---

### 4.5 Receipt Table Component (Table View)

**Component Name:** `ReceiptTable`  
**Path:** `/components/receipts/ReceiptTable.tsx`

**Layout:**

```text
┌─────┬──────────────┬────────────┬─────────────┬─────────────────┐
│ ☐   │ Vendor       │ Amount     │ Date        │ Category        │
├─────┼──────────────┼────────────┼─────────────┼─────────────────┤
│ ☐   │ First Bank   │ ₦45,000    │ 15 Dec 2025 │ Office Supplies │
│     │ VAT Input ✓  │ Matched ✓  │             │ TAX: VAT Input  │
├─────┼──────────────┼────────────┼─────────────┼─────────────────┤
│ ☐   │ Zenith Bank  │ ₦120,500   │ 14 Dec 2025 │ Professional... │
│     │ Untagged ⚠️  │ Unmatched  │             │ TAX: -          │
└─────┴──────────────┴────────────┴─────────────┴─────────────────┘
```

**Table Structure:**

- Background: White
- Border: 1px solid Slate-200
- Border-radius: 8px
- Padding: 0

**Table Header:**

- Background: Slate-50
- Border-bottom: 2px solid Slate-200
- Padding: 12px 16px
- Font-size: 12px
- Font-weight: 600
- Color: Slate-700

**Table Row:**

- Border-bottom: 1px solid Slate-200
- Padding: 12px 16px
- Hover: Background Slate-50

**Table Cells:**

- Font-size: 13px
- Color: Slate-900

**Column Widths:**

- Checkbox: 40px
- Vendor: 25% (min 150px)
- Amount: 15% (min 100px)
- Date: 15% (min 120px)
- Category: 20% (min 140px)
- Tax Type: 15% (min 100px)
- Status: 10% (min 80px)
- Actions: 60px (sticky right)

**Sortable Columns:**

- Vendor, Amount, Date, Category (click to sort ascending/descending)
- Sort indicator: Up/Down arrow next to header text

**Row Expansion:**

- Click row to expand and show:
  - Full description/notes
  - Line items (if present)
  - Linked transaction (invoice/payment)
  - Actions (Edit, View, Delete, Link)

---

## 5. RECEIPT UPLOAD & PROCESSING

### 5.1 Upload Modal Component

**Component Name:** `UploadReceiptModal`  
**Path:** `/components/receipts/UploadReceiptModal.tsx`

**Layout:**

```text
┌──────────────────────────────────────────────┐
│ Upload Receipt                            [✕] │
├──────────────────────────────────────────────┤
│                                              │
│ Choose Upload Method:                        │
│                                              │
│ [📄 File Upload] [📸 Camera] [📧 Email]     │
│                                              │
│ ────────────────────────────────────────────│
│                                              │
│ Drag & drop files here or                   │
│ [Browse Files]                               │
│                                              │
│ Supported: PDF, PNG, JPG, TIFF               │
│ Max size: 10MB per file                      │
│                                              │
│ Or forward receipts to:                      │
│ receipts@taxgee.ng                          │
│ (Will auto-import to your account)          │
│                                              │
│ [Upload Files] [Cancel]                     │
│                                              │
└──────────────────────────────────────────────┘
```

**Modal Container:**

- Width: 600px (desktop), 90vw (mobile)
- Background: White
- Border-radius: 12px
- Box-shadow: 0 20px 25px rgba(0,0,0,0.15)

**Upload Methods:**

- **File Upload**: Drag & drop zone or file picker
- **Camera**: Direct image capture from device
- **Email Forwarding**: Auto-import from dedicated email address

**Drag & Drop Zone:**

- Background: Slate-50
- Border: 2px dashed Teal-300
- Border-radius: 8px
- Padding: 40px 20px
- Text-align: center

**Drag & Drop (Active):**

- Background: Teal-50
- Border-color: Teal-500

**File Input Label:**

- Font-size: 14px
- Font-weight: 600
- Color: Slate-900
- Margin-bottom: 8px

**File Types & Size Info:**

- Font-size: 12px
- Color: Slate-600
- Margin-top: 12px

**Upload Button:**

- Primary button (Teal-500)
- Disabled until files selected
- Shows file count: "Upload 3 Files"

---

### 5.2 Receipt Processing & OCR

**Component Name:** `ReceiptProcessing`  
**Path:** `/components/receipts/ReceiptProcessing.tsx`

**Processing States:**

```text
Upload in Progress:
┌──────────────────────────┐
│ Uploading: 3 of 5 files  │
│ ▓▓▓▓▓░░░░░░░░░░░░  60%  │
│ Estimating 15s remaining │
└──────────────────────────┘

Processing with OCR:
┌──────────────────────────┐
│ Processing: 2 of 5 files │
│ Extracting data...       │
│ [Spinner animation]      │
└──────────────────────────┘

Completed:
┌──────────────────────────┐
│ ✓ 5 of 5 receipts ready  │
│ Ready for tagging        │
│ [Next: Tag Receipts]    │
└──────────────────────────┘
```

**Progress Indicators:**

- File upload progress bar (0-100%)
- OCR processing spinner with current file count
- Extraction status messages
- Estimated time remaining

**OCR Extraction Details:**

Automatically extracted fields (if found):
- **Receipt Date** (detected from document)
- **Vendor/Merchant Name** (from header or receipt)
- **Receipt/Invoice Number** (unique identifier)
- **Amount** (total/subtotal + tax breakdown)
- **Tax Amount & Type** (VAT, WHT, etc. if present)
- **Payment Method** (Cash, Card, Bank Transfer)
- **Line Items** (products/services with amounts)
- **Notes/Description** (extracted from document)

**Confidence Levels:**

- 95-100%: High (green checkmark)
- 80-95%: Medium (amber warning)
- Below 80%: Low (requires manual review)

---

### 5.3 Receipt Auto-Tagging Modal

**Component Name:** `AutoTaggingModal`  
**Path:** `/components/receipts/AutoTaggingModal.tsx`

**Layout:**

```text
┌──────────────────────────────────────────────────────┐
│ Review & Tag Receipts                            [✕] │
├──────────────────────────────────────────────────────┤
│                                                      │
│ Receipt 1 of 3: First Bank - ₦45,000              │
│ ┌────────────────────────────────────────────────┐ │
│ │ [Receipt Thumbnail/Preview]                    │ │
│ │                                                │ │
│ │ Extracted Data (Review & Correct):             │ │
│ │                                                │ │
│ │ Date: [15 Dec 2025]  Amount: [45,000]         │ │
│ │ Vendor: [First Bank]  Payment: [Card]         │ │
│ │                                                │ │
│ │ Suggested Category: Office Supplies            │ │
│ │ Category: [Office Supplies ▼]                  │ │
│ │ Confidence: 92%                                │ │
│ │                                                │ │
│ │ Suggested Tax Type: VAT Input                  │ │
│ │ Tax Type: [VAT Input ▼]                        │ │
│ │ Confidence: 87%                                │ │
│ │                                                │ │
│ │ Cost Center/Project (Optional):                │ │
│ │ [Project Name or Cost Center ▼]               │ │
│ │                                                │ │
│ │ Notes (Optional):                              │ │
│ │ [This is a stationery purchase for office...] │ │
│ │                                                │ │
│ │ Deductible: [Toggle: Yes ✓]                   │ │
│ │ Comment: [This is a tax-deductible expense]  │ │
│ │                                                │ │
│ └────────────────────────────────────────────────┘ │
│                                                      │
│ [< Previous] [Save & Next] [Save & Close]          │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Modal Container:**

- Width: 800px (desktop), 95vw (mobile)
- Background: White
- Max-height: 90vh
- Overflow-y: auto

**Receipt Preview:**

- Height: 200px
- Background: Slate-100
- Border-radius: 8px
- Margin-bottom: 16px

**Extracted Data Section:**

- Background: Slate-50
- Border: 1px solid Slate-200
- Border-radius: 8px
- Padding: 16px
- Margin-bottom: 16px

**Form Fields:**

- **Date**: Date picker (required, auto-extracted)
- **Amount**: Numeric input (required, auto-extracted)
- **Vendor Name**: Text input (required, auto-extracted)
- **Payment Method**: Dropdown (auto-extracted)
- **Category**: Dropdown with search (required, AI-suggested)
- **Tax Type**: Dropdown (VAT Input, WHT, CIT support, PAYE, Other)
- **Cost Center/Project**: Optional dropdown with company's cost centers
- **Notes**: Textarea (optional, for additional context)
- **Deductible**: Toggle switch (default: Yes, based on category)

**AI Suggestions:**

- Shown with confidence percentage (green if >85%, amber if 60-85%)
- User can accept, modify, or override suggestions
- Confidence badges appear next to suggested fields

**Navigation:**

- [< Previous]: Go to previous receipt
- [Save & Next]: Save current and move to next
- [Save & Close]: Save and return to receipts list
- All buttons disabled during save operation

---

## 6. RECEIPT LIBRARY & MANAGEMENT

### 6.1 Receipt List View (Default)

**Component Name:** `ReceiptsList`  
**Path:** `/components/receipts/ReceiptsList.tsx`

**Features:**

- Grid view: 3-4 cards per row (responsive)
- Table view: Detailed rows with sortable columns
- List view: Compact single-column view
- View toggle in header

**Pagination:**

```text
Showing 1-20 of 324 receipts
< 1 2 3 4 5 ... 15 >  |  Jump to page: [___]
```

**Bulk Actions:**

- Multi-select checkboxes on all cards/rows
- Bulk action bar appears when ≥1 selected:
  - [☐ Select All]
  - [Bulk Tag]: Assign category/tax type to selected
  - [Bulk Download]: ZIP selected receipts
  - [Bulk Delete]: Delete with confirmation
  - Selection count: "3 receipts selected"

**Empty State:**

```text
┌──────────────────────────────┐
│         📁 No Receipts       │
│                              │
│ You haven't uploaded any     │
│ receipts yet.               │
│                              │
│ [📤 Upload Your First Receipt]
│                              │
│ Tips:                        │
│ • Capture clear images      │
│ • Include date & vendor    │
│ • Tag for deductions        │
└──────────────────────────────┘
```

---

### 6.2 Receipt Detail View

**Component Name:** `ReceiptDetail`  
**Path:** `/components/receipts/ReceiptDetail.tsx`

**Layout (2-Column):**

```text
┌──────────────────────────────────────────┐
│ Left Column (60%):         Right Column:  │
│                            (40%)          │
│ [Receipt Preview - Large]  Status Info   │
│                            Category      │
│ Receipt Metadata:          Tax Type      │
│ • Date: 15 Dec 2025        Cost Center   │
│ • Vendor: First Bank       Match Status  │
│ • Amount: ₦45,000          Tags          │
│ • Payment: Card            Link Section  │
│ • Tax: VAT (₦7,500)        Documents     │
│                                          │
│ Extracted Details:         Notes Section │
│ • Line Items (if present)  Activity Log  │
│ • Description             │ Version      │
│                           │ History      │
│ [Edit Extraction]         │              │
│ [Download Receipt]        │              │
│ [Delete Receipt]          │              │
│                                          │
└──────────────────────────────────────────┘
```

**Left Column (Receipt Preview & Data):**

**Receipt Preview:**

- Height: 400px (or fit-content)
- Background: Slate-100
- Border-radius: 8px
- Display PDF/image with zoom controls

**Metadata Display:**

- Background: White
- Border: 1px solid Slate-200
- Border-radius: 8px
- Padding: 16px
- Margin-top: 16px

**Metadata Items:**

- **Date**: 15 Dec 2025 (formatted)
- **Vendor**: First Bank Nigeria
- **Amount**: ₦45,000.00 (with currency, formatted)
- **Payment Method**: Card (detected)
- **Tax Breakdown**: VAT: ₦7,500 | WHT: ₦0

**Extracted Line Items (if present):**

```text
Description          Qty    Unit Price    Amount
─────────────────────────────────────────────────
Printer Paper 500s    2      ₦5,000        ₦10,000
Ballpoint Pens Box    1      ₦2,500        ₦2,500
Toner Cartridge       3      ₦10,000       ₦30,000
                                   Subtotal: ₦42,500
                                   VAT (18%): ₦7,650
                                   TOTAL: ₦50,150
```

**Right Column (Tagging & Metadata):**

**Status Card:**

- Background: White
- Border: 1px solid Teal-200
- Border-radius: 8px
- Padding: 16px

**Status Indicators:**

- Match Status: [Matched ✓] / [Unmatched] / [Pending]
- Tagged Status: [Tagged ✓] / [Untagged ⚠️]
- Deductible: [Yes ✓] / [No ✕] / [Pending Review]

**Category & Tax Type (Editable):**

- **Category**: [Office Supplies ▼] | [Edit]
- **Tax Type**: [VAT Input ✓] | [Edit]
- **Cost Center**: [Project A ▼] | [Edit]

**Linked Transactions Section:**

- **Linked Invoice**: First Bank Invoice #INV-2025-0142
  - Date: 15 Dec 2025
  - Amount: ₦50,150
  - [View] [Unlink]

- **Linked Payment**: Bank Transfer to First Bank
  - Date: 15 Dec 2025
  - Amount: ₦50,150
  - [View] [Unlink]

**Notes & Comments:**

```text
Notes (Editable):
[This is office supply purchase for the main office.
Includes printer paper, toner, and writing materials.]

Edit  Save  Cancel
```

**Activity Log (Read-Only):**

```text
Timeline:
• 24 Dec 2025, 2:30 PM - Uploaded by John Adeyemi
• 24 Dec 2025, 2:32 PM - Processed & tagged (Office Supplies, VAT Input)
• 24 Dec 2025, 3:00 PM - Linked to Invoice #INV-2025-0142
```

**Action Buttons:**

- [✏️ Edit Tags]
- [🔗 Link Transaction]
- [⬇️ Download]
- [🗑️ Delete]
- [← Back to List]

---

## 7. RECEIPT DETAILS & TAGGING

### 7.1 Category Taxonomy

**Expense Categories (expandable):**

```text
Operations
├─ Office & Supplies (Stationery, printing, office equipment)
├─ Utilities (Electricity, water, internet, phone)
├─ Rent & Facilities (Office rent, maintenance, repairs)
├─ Equipment & Assets (Furniture, computers, machinery)
└─ Subscriptions (Software, memberships, licenses)

Personnel
├─ Salaries & Wages
├─ Employee Benefits (Health insurance, bonuses)
├─ Training & Development
└─ Payroll Taxes & Deductions

Operations & Services
├─ Professional Services (Accounting, legal, consulting)
├─ Marketing & Advertising
├─ Travel & Transportation
├─ Meals & Entertainment
└─ Insurance

Finance & Admin
├─ Bank Charges
├─ Interest Expense
├─ Depreciation
└─ Other Professional Fees

Capital Assets
├─ Vehicle Purchase
├─ Building/Property Purchase
├─ Equipment Purchase
└─ Improvements & Renovations

Non-Deductible
├─ Personal Expenses
├─ Entertainment (Some may not be deductible)
├─ Gifts (Some limits apply)
└─ Penalties & Fines
```

### 7.2 Tax Type Options

| Tax Type | Description | Deductibility |
|----------|-------------|---------------|
| **VAT Input** | VAT paid on purchases (recoverable) | Deductible (input credit) |
| **VAT Expense** | VAT paid on imports or special cases | Potentially deductible |
| **WHT Evidence** | Withholding tax on payments received | Tax credit (non-deductible) |
| **PAYE Support** | Salary & wage expenses | Deductible (operating expense) |
| **CIT Deduction** | General business expense for CIT | Deductible |
| **Customs Duty** | Import duties (if applicable) | Deductible or capitalized |
| **Other/Mixed** | Multi-tax receipts or unclear | Requires review |
| **Non-Tax** | No tax component | Deductible if operational |

### 7.3 Deductibility Rules Engine

**Smart Deductibility Assessment:**

- **Category-based**: Default deductibility per category
  - Office Supplies: ✓ Deductible
  - Meals & Entertainment: ⚠️ Partially deductible (50% limit)
  - Non-Deductible Items: ✕ Not deductible

- **Amount-based**: Thresholds for certain deductions
  - Gifts: ✓ Deductible up to ₦10,000 per recipient/year
  - Vehicle: ⚠️ Subject to depreciation (capital asset)

- **Documentation-based**: Evidence quality
  - ✓ Complete receipt (date, vendor, amount, tax breakdown)
  - ⚠️ Incomplete (missing date, vendor, or tax)
  - ✕ Insufficient (just an amount with no details)

- **Manual Override**: User can override default assessment with justification

---

## 8. FILTERING & SEARCH

### 8.1 Filter Options

**Date Range:**

- Preset: Today, This Week, This Month, This Quarter, This Year
- Custom: Date picker (From - To)

**Category:**

- Multi-select dropdown
- Search/filter by keyword
- Show count per category

**Tax Type:**

- Multi-select: VAT Input, WHT, PAYE, CIT, Other
- Show count per type

**Status:**

- Matched (linked to transaction)
- Unmatched (not yet linked)
- Deductible (approved deductions)
- Non-Deductible (flagged as not deductible)
- Untagged (no category/tax type assigned)

**Amount Range:**

- Slider: ₦0 to Max
- Or text inputs: From [___] to [___]
- Show distribution (histogram)

**Vendor Search:**

- Text search by vendor/merchant name
- Auto-complete suggestions from recent vendors

**Match Status:**

- Matched: Linked to invoice/payment
- Unmatched: Not yet linked
- Pending: Awaiting review

### 8.2 Saved Filter Sets

**Component Name:** `SavedFilterSets`  
**Path:** `/components/receipts/SavedFilterSets.tsx`

**Feature:**

Users can save filter combinations for quick reuse:

```text
My Filters:
• ⭐ VAT Input (This Year) - 84 results
• ⭐ Travel Expenses (Q4 2025) - 12 results
• ⭐ Untagged & High Value - 8 results
• ⭐ Non-Deductible Review - 5 results

[+ New Filter Set] [Manage] [Share]
```

**Actions per Filter Set:**

- Click to apply
- [⭐] to favorite/pin
- [✏️] to rename
- [🗑️] to delete
- [📤] to export results

---

## 9. RECEIPT LINKING & MATCHING

### 9.1 Intelligent Receipt Matching

**Component Name:** `ReceiptMatching`  
**Path:** `/components/receipts/ReceiptMatching.tsx`

**Auto-Matching Logic:**

System automatically suggests matches based on:

1. **Amount Match**: Receipt amount matches invoice/payment amount (±5% tolerance)
2. **Date Proximity**: Receipt date within ±3 days of invoice/payment
3. **Vendor Match**: Receipt vendor name matches invoice/payment vendor
4. **Tax Components**: VAT/WHT amounts align

**Match Confidence:**

```text
High Confidence (95-100%):     ✓ Green - Auto-linked
Medium Confidence (75-95%):    ⚠️ Amber - Manual review suggested
Low Confidence (Below 75%):    ⚠️ Amber - Manual review required
```

### 9.2 Receipt Linking Modal

**Component Name:** `ReceiptLinkingModal`  
**Path:** `/components/receipts/ReceiptLinkingModal.tsx`

**Layout:**

```text
┌──────────────────────────────────────────────┐
│ Link Receipt to Transaction                  │
├──────────────────────────────────────────────┤
│                                              │
│ Receipt: First Bank - ₦45,000 (15 Dec 2025) │
│                                              │
│ ────────────────────────────────────────────│
│                                              │
│ Suggested Matches:                           │
│                                              │
│ [✓] Invoice #INV-2025-0142                 │
│     Vendor: First Bank Nigeria              │
│     Amount: ₦45,000 | Date: 15 Dec 2025    │
│     Confidence: 98% [High]                  │
│     [Link This] [Decline]                   │
│                                              │
│ [ ] Payment #PAY-2025-0156                  │
│     To: First Bank Nigeria                  │
│     Amount: ₦45,000 | Date: 15 Dec 2025    │
│     Confidence: 95% [High]                  │
│     [Link This] [Decline]                   │
│                                              │
│ [ ] Expense #EXP-2025-0089                  │
│     Description: Office Supplies            │
│     Amount: ₦42,500 | Date: 14 Dec 2025    │
│     Confidence: 72% [Medium]                │
│     [Link This] [Decline]                   │
│                                              │
│ ────────────────────────────────────────────│
│ Can't find the right match?                 │
│ [Search Manually] [Create New Expense]     │
│                                              │
│ [Skip] [Cancel]                             │
│                                              │
└──────────────────────────────────────────────┘
```

**Match Items:**

- Radio button (single selection per receipt)
- Transaction type badge (Invoice, Payment, Expense)
- Amount & date comparison
- Confidence indicator with color
- Link/Decline buttons

**Manual Search:**

- User can search by transaction ID, vendor, or amount
- Filter by date range
- Select from search results

---

## 10. EXPORT & REPORTING

### 10.1 Reports & Export Modal

**Component Name:** `ReportsExportModal`  
**Path:** `/components/receipts/ReportsExportModal.tsx`

**Layout:**

```text
┌──────────────────────────────────────────────┐
│ Reports & Export                          [✕]│
├──────────────────────────────────────────────┤
│                                              │
│ SELECT REPORT TYPE:                          │
│                                              │
│ [📦 Audit Pack]                             │
│ Complete proof of expenses for audit        │
│                                              │
│ [📊 Deductible Expenses Report]             │
│ Tax-deductible expenses by category         │
│                                              │
│ [🔍 Tax Type Summary]                       │
│ VAT Input, WHT, PAYE breakdown              │
│                                              │
│ [📋 Custom Report]                          │
│ Build your own report                        │
│                                              │
│ ────────────────────────────────────────────│
│                                              │
│ REPORT PARAMETERS:                           │
│                                              │
│ Date Range: [Jan - Dec 2025 ▼]              │
│ Include: [All Categories ▼]                 │
│ Format: [PDF ▼] [Excel] [CSV]               │
│ Include: ☑ Receipts  ☑ Summary  ☐ Notes   │
│                                              │
│ [Preview Report] [Generate & Download]     │
│                                              │
└──────────────────────────────────────────────┘
```

### 10.2 Audit Pack Export

**Component Name:** `AuditPackExport`  
**Path:** `/components/receipts/AuditPackExport.tsx`

**Audit Pack Contents:**

```text
audit_pack_2025_jan_dec.zip
├── receipts/
│   ├── receipt_001.pdf
│   ├── receipt_002.jpg
│   ├── receipt_003.pdf
│   └── ... (all receipt files)
├── index.csv
├── summary.txt
└── metadata.json
```

**Index CSV Format:**

```csv
Receipt ID,Date,Vendor,Amount,Currency,Tax Type,Category,Cost Center,Match Status,Deductible,Notes
RCP-2025-001,15 Dec 2025,First Bank,45000,NGN,VAT Input,Office Supplies,Project A,Matched,Yes,Office supply purchase
RCP-2025-002,14 Dec 2025,Zenith Bank,120500,NGN,Untagged,Professional Services,Project B,Unmatched,Pending,Awaiting review
```

**Summary Report (txt):**

```text
AUDIT PACK SUMMARY
Generated: 24 Dec 2025

Period: January - December 2025

Total Receipts: 324
Total Amount: ₦2,456,000
Deductible Amount: ₦2,314,500
Non-Deductible Amount: ₦141,500

By Tax Type:
- VAT Input: ₦1,850,000 (184,320 VAT recovered)
- WHT Evidence: ₦320,000
- PAYE Support: ₦156,000
- Other: ₦130,000

By Category:
- Office Supplies: ₦425,000
- Professional Services: ₦580,000
- Travel: ₦156,000
- ... (more categories)

Matched Receipts: 318 (98%)
Unmatched Receipts: 6 (2%)
```

### 10.3 Deductible Expenses Report

**Component Name:** `DeductibleExpensesReport`  
**Path:** `/components/receipts/DeductibleExpensesReport.tsx`

**Report Content:**

```text
DEDUCTIBLE EXPENSES REPORT
Tax Year: 2025

Total Deductible Expenses: ₦2,314,500

By Category:
┌─────────────────────────────┬──────────┬──────────┐
│ Category                    │ Count    │ Amount   │
├─────────────────────────────┼──────────┼──────────┤
│ Office Supplies             │ 84       │ ₦425,000 │
│ Professional Services       │ 23       │ ₦580,000 │
│ Travel & Transportation     │ 45       │ ₦156,000 │
│ Utilities                   │ 12       │ ₦96,000  │
│ Equipment & Assets          │ 8        │ ₦450,000 │
│ Marketing                   │ 15       │ ₦280,000 │
│ Insurance                   │ 4        │ ₦227,500 │
│ Other                       │ 133      │ ₦120,000 │
└─────────────────────────────┴──────────┴──────────┘

Tax Recovery Potential:
- VAT Input Credits: ₦184,320 (at 18%)
- WHT Evidence: ₦16,000 (at 5%)
- Total Tax Recoverable: ₦200,320
```

---

## 11. INTERACTIVE BEHAVIORS

### 11.1 Upload Flow

```text
User clicks [📤 Upload Receipt]
         ↓
Upload modal opens
         ↓
User selects upload method:
  • Drag & drop file(s)
  • Or click to browse
         ↓
Files being uploaded (progress bar)
         ↓
Files uploaded successfully
         ↓
OCR processing begins (spinner)
         ↓
Auto-tagging modal opens with extracted data
         ↓
User reviews, corrects, and confirms
         ↓
Modal closes, receipt added to list
         ↓
Toast: "✓ Receipt uploaded and tagged"
```

### 11.2 Receipt Tagging Flow

```text
User opens receipt detail
         ↓
User clicks [✏️ Edit Tags]
         ↓
Modal opens with current tags
         ↓
User modifies:
  • Category
  • Tax Type
  • Cost Center
  • Notes
  • Deductible status
         ↓
User clicks [Save]
         ↓
Validation runs
         ↓
API updates receipt
         ↓
Toast: "✓ Receipt updated"
         ↓
Detail view refreshes
```

### 11.3 Receipt Matching Flow

```text
User opens unmatched receipt
         ↓
System suggests matches
         ↓
User sees suggested match with confidence
         ↓
User clicks [Link This] or [Search Manually]
         ↓
If auto-match:
  Link created, status updates to "Matched ✓"
         ↓
If manual search:
  Search modal opens
  User finds and selects transaction
  Link created
         ↓
Toast: "✓ Receipt linked to Invoice #..."
         ↓
Detail view updates with linked transaction
```

### 11.4 Filter & Search Flow

```text
User opens receipts list
         ↓
User adjusts filters (date, category, status, etc.)
         ↓
Results update in real-time (debounced)
         ↓
Quick stats bar updates
         ↓
User can:
  • Save current filter set for reuse
  • Clear all filters
  • Export filtered results
         ↓
Results display with pagination
```

### 11.5 Bulk Operations Flow

```text
User multi-selects receipts (checkboxes)
         ↓
Bulk action bar appears
         ↓
User can:
  [Bulk Tag]: Tag all selected with same category/tax type
  [Bulk Download]: ZIP all selected
  [Bulk Delete]: Delete with confirmation
         ↓
If Bulk Tag:
  Modal opens for tag selection
  All selected receipts updated
  Toast: "✓ 5 receipts tagged"
         ↓
If Bulk Download:
  ZIP created
  Download starts
  Toast: "✓ 5 receipts downloaded"
         ↓
If Bulk Delete:
  Confirmation modal
  Upon confirm, receipts deleted
  Toast: "✓ 5 receipts deleted"
```

---

## 12. DATA BINDINGS & STATES

### 12.1 Receipts Management Hook

```typescript
const useReceiptManagement = () => {
  const [receipts, setReceipts] = useState<Receipt[]>([]);
  const [filters, setFilters] = useState<ReceiptFilters>({
    dateRange: { start: null, end: null },
    categories: [],
    taxTypes: [],
    status: [],
    amountRange: { min: 0, max: null },
    vendor: ''
  });
  const [selectedReceipts, setSelectedReceipts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'table' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [sortBy, setSortBy] = useState<'date' | 'amount' | 'vendor'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  useEffect(() => {
    const fetchReceipts = async () => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams({
          page: String(currentPage),
          pageSize: String(pageSize),
          sortBy,
          sortOrder,
          ...flattenFilters(filters)
        });
        const data = await api.get(`/receipts?${params}`);
        setReceipts(data.data.receipts);
      } catch (err) {
        console.error('Failed to load receipts:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReceipts();
  }, [filters, currentPage, pageSize, sortBy, sortOrder]);

  const uploadReceipt = async (files: File[]) => {
    try {
      const formData = new FormData();
      files.forEach(file => formData.append('receipts', file));
      const response = await api.post('/receipts/upload', formData);
      // Process receipts with OCR
      return response.data;
    } catch (err) {
      throw new Error('Failed to upload receipts');
    }
  };

  const tagReceipt = async (receiptId: string, tags: ReceiptTags) => {
    try {
      const response = await api.patch(`/receipts/${receiptId}/tag`, tags);
      setReceipts(prev =>
        prev.map(r => (r.id === receiptId ? response.data : r))
      );
    } catch (err) {
      throw new Error('Failed to tag receipt');
    }
  };

  const linkReceipt = async (receiptId: string, transactionId: string) => {
    try {
      const response = await api.post(`/receipts/${receiptId}/link`, {
        transactionId
      });
      setReceipts(prev =>
        prev.map(r => (r.id === receiptId ? response.data : r))
      );
    } catch (err) {
      throw new Error('Failed to link receipt');
    }
  };

  const bulkTag = async (receiptIds: string[], tags: ReceiptTags) => {
    try {
      await api.post('/receipts/bulk-tag', { receiptIds, tags });
      // Refresh receipts
      setCurrentPage(1);
    } catch (err) {
      throw new Error('Failed to bulk tag receipts');
    }
  };

  const deleteReceipt = async (receiptId: string) => {
    try {
      await api.delete(`/receipts/${receiptId}`);
      setReceipts(prev => prev.filter(r => r.id !== receiptId));
    } catch (err) {
      throw new Error('Failed to delete receipt');
    }
  };

  return {
    receipts,
    filters,
    setFilters,
    selectedReceipts,
    setSelectedReceipts,
    isLoading,
    viewMode,
    setViewMode,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    uploadReceipt,
    tagReceipt,
    linkReceipt,
    bulkTag,
    deleteReceipt
  };
};
```

### 12.2 Receipt OCR Hook

```typescript
const useReceiptOCR = () => {
  const [extractedData, setExtractedData] = useState<ExtractedReceiptData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [ocrError, setOcrError] = useState<string | null>(null);

  const processReceiptWithOCR = async (file: File | string) => {
    setIsProcessing(true);
    setOcrError(null);
    try {
      const formData = new FormData();
      if (typeof file === 'string') {
        formData.append('fileUrl', file);
      } else {
        formData.append('file', file);
      }
      
      const response = await api.post('/receipts/ocr-process', formData);
      setExtractedData(response.data.extracted);
      
      return response.data.extracted;
    } catch (err) {
      const errorMsg = 'Failed to extract receipt data';
      setOcrError(errorMsg);
      throw new Error(errorMsg);
    } finally {
      setIsProcessing(false);
    }
  };

  const suggestCategories = async (vendorName: string, description: string) => {
    try {
      const response = await api.post('/receipts/suggest-category', {
        vendor: vendorName,
        description
      });
      return response.data.suggestions; // Array of category suggestions with confidence
    } catch (err) {
      return [];
    }
  };

  const suggestTaxType = async (extractedData: ExtractedReceiptData) => {
    try {
      const response = await api.post('/receipts/suggest-tax-type', extractedData);
      return response.data.suggestions; // Array of tax type suggestions
    } catch (err) {
      return [];
    }
  };

  return {
    extractedData,
    isProcessing,
    ocrError,
    processReceiptWithOCR,
    suggestCategories,
    suggestTaxType
  };
};
```

### 12.3 Receipt Matching Hook

```typescript
const useReceiptMatching = () => {
  const [matches, setMatches] = useState<MatchSuggestion[]>([]);
  const [isMatching, setIsMatching] = useState(false);

  const findMatches = async (receiptId: string) => {
    setIsMatching(true);
    try {
      const response = await api.get(`/receipts/${receiptId}/find-matches`);
      setMatches(response.data.matches); // Sorted by confidence
      return response.data.matches;
    } catch (err) {
      console.error('Failed to find matches:', err);
      return [];
    } finally {
      setIsMatching(false);
    }
  };

  const confirmMatch = async (receiptId: string, transactionId: string) => {
    try {
      const response = await api.post(`/receipts/${receiptId}/confirm-match`, {
        transactionId
      });
      return response.data;
    } catch (err) {
      throw new Error('Failed to confirm match');
    }
  };

  return {
    matches,
    isMatching,
    findMatches,
    confirmMatch
  };
};
```

---

## 13. USER WORKFLOWS

### 13.1 New User Onboarding Workflow

```text
User navigates to Receipts & Expenses
         ↓
Empty state with tips is displayed
         ↓
User clicks [📤 Upload Your First Receipt]
         ↓
Upload modal opens
         ↓
User uploads image or PDF
         ↓
OCR processes the receipt
         ↓
Auto-tagging modal shows extracted data
         ↓
User reviews categories and tax type (AI-suggested)
         ↓
User confirms and saves
         ↓
Receipt appears in list
         ↓
Tutorial tip: "Next step: link this to your invoice"
         ↓
User clicks receipt to open detail
         ↓
Link modal suggests matching invoice
         ↓
User links receipt
         ↓
Onboarding complete: "✓ Your first receipt is ready!"
```

### 13.2 Batch Receipt Upload & Tagging

```text
User has 10 receipts to upload
         ↓
User clicks [📤 Upload Receipt]
         ↓
User drags & drops or selects 10 files
         ↓
Upload shows progress (10/10 uploaded)
         ↓
OCR processing bar shows (processing 5/10)
         ↓
Auto-tagging modal shows first receipt
         ↓
User reviews and tags
         ↓
Clicks [Save & Next]
         ↓
Modal shows next receipt
         ↓
Repeat for all 10 receipts
         ↓
After last receipt: [Save & Close]
         ↓
Modal closes, returns to list
         ↓
All 10 receipts now visible and tagged
         ↓
Toast: "✓ 10 receipts uploaded and tagged"
```

### 13.3 Link Receipts to Payments Workflow

```text
User navigates to Receipts
         ↓
Filters applied: "Unmatched" status
         ↓
6 unmatched receipts displayed
         ↓
User clicks first receipt
         ↓
Detail view opens
         ↓
Right panel shows "Unmatched ⚠️"
         ↓
System suggests matching payment: "Payment #PAY-2025-0156"
         ↓
User clicks [🔗 Link Transaction]
         ↓
Modal shows suggested matches with confidence
         ↓
User selects the correct match
         ↓
Modal closes
         ↓
Detail view now shows "Matched ✓" with linked payment
         ↓
Toast: "✓ Receipt linked to Payment #PAY-2025-0156"
         ↓
User goes back to list
         ↓
Receipt count updates (5 unmatched remaining)
```

### 13.4 Export Audit Pack Workflow

```text
User navigates to Receipts
         ↓
User applies filters: "2025 tax year, all receipts"
         ↓
324 receipts displayed
         ↓
User clicks [📊 Reports & Export]
         ↓
Reports modal opens
         ↓
User selects [📦 Audit Pack]
         ↓
Modal shows parameters:
  - Date Range: Jan - Dec 2025 (auto-populated)
  - Include receipts: ✓
  - Include summary: ✓
  - Include index: ✓
         ↓
User clicks [Generate & Download]
         ↓
Processing bar: "Preparing audit pack..."
         ↓
ZIP file generated (audit_pack_2025_jan_dec.zip)
         ↓
Download starts
         ↓
Toast: "✓ Audit pack ready (324 receipts, 450 MB)"
         ↓
User can now share ZIP with auditor or tax authority
```

### 13.5 Deductible Expenses Reporting Workflow

```text
User navigates to Receipts
         ↓
User clicks [📊 Reports & Export]
         ↓
Reports modal opens
         ↓
User selects [📊 Deductible Expenses Report]
         ↓
Modal shows parameters:
  - Date Range: [Jan - Dec 2025 ▼]
  - Categories: [All ▼]
  - Format: [PDF ▼]
         ↓
User clicks [Preview Report]
         ↓
Preview shows:
  - Total Deductible: ₦2,314,500
  - By Category breakdown table
  - Tax Recovery potential
         ↓
User clicks [Generate & Download]
         ↓
PDF report generated and downloaded
         ↓
Toast: "✓ Report generated (Deductible_Expenses_2025.pdf)"
         ↓
User can now use report for:
  - Tax filing
  - Financial review
  - Audit preparation
```

---

## 14. RESPONSIVE DESIGN RULES

### 14.1 Breakpoints & Adjustments

| Breakpoint        | Layout                                    |
|-------------------|------------------------------------------ |
| Desktop (≥1024px) | Grid (3-4 cards/row), table view option  |
| Tablet (768–1023) | Grid (2-3 cards/row), table wraps        |
| Mobile (<768px)   | Single column list, table vertical mode  |

### 14.2 Desktop (≥1024px)

- Grid: 3-4 receipt cards per row
- Table: Full width with scroll on small columns
- Filter bar: Horizontal layout, 2 rows
- Detail view: 2-column (60/40 split)

### 14.3 Tablet (768–1023px)

- Grid: 2-3 receipt cards per row
- Table: Horizontal scroll for columns
- Filter bar: Stacked, reduced spacing
- Detail view: Stacked single column
- Upload modal: Full screen
- Reports modal: Full screen

### 14.4 Mobile (<768px)

- List: Single column, compact cards
- Table: Vertical mode (rows as cards)
- Filter bar: Collapsed into drawer/accordion
- Header: Title stacked, buttons stacked
- Detail view: Single column, full screen
- Modals: Full screen, bottom sheet or overlay

---

## 15. ACCESSIBILITY REQUIREMENTS

### 15.1 WCAG 2.1 Level AA Compliance

**Color Contrast:**

- Text on backgrounds: ≥4.5:1 ratio
- Status badges include text labels + colors
- Links underlined or visually distinct

**Keyboard Navigation:**

```text
Tab: Navigate through filters, buttons, cards
Shift+Tab: Navigate backward
Enter: Open receipt detail, submit form
Space: Toggle checkbox, select item
Escape: Close modal, return to list
Ctrl+F: Search/filter receipts
```

**Form Accessibility:**

- All form labels associated with inputs
- Error messages linked with `aria-describedby`
- Required fields marked with `aria-required="true"`
- Date pickers have associated labels

**Screen Reader Support:**

- Page title announced: "Receipts & Expenses"
- Filter status announced: "Filters applied: Date range, Category"
- Card content announced: "Receipt from First Bank, ₦45,000, Office Supplies"
- Match status announced: "Matched to Invoice #INV-2025-0142"
- Action buttons announced: "Link Receipt", "Delete Receipt"
- Upload progress announced: "Upload in progress, 50%"

**Focus Management:**

- Visible focus ring: 2px solid Teal-500
- Focus order matches logical/visual order
- Modals trap focus (Tab cycles within modal)
- Focus returns to trigger button after modal closes

---

## 16. PERFORMANCE & LOADING STATES

### 16.1 Performance Targets

| Metric                   | Target  |
|--------------------------|---------|
| Receipts list load       | < 2s    |
| Upload & OCR per file    | < 3s    |
| Filter/search results    | < 500ms |
| Detail view open         | < 1s    |
| Export audit pack        | < 10s   |
| Report generation        | < 5s    |

### 16.2 Loading States

**Page Load:**

```text
┌──────────────────────────────┐
│ ▓▓▓▓░░░░░░░░░░░░░░░░  40%   │
│ Loading receipts...          │
└──────────────────────────────┘
```

**Upload Progress:**

```text
Uploading: 3 of 5 files
▓▓▓▓▓▓░░░░░░░░░░░░░░░  60%
Estimating 10s remaining
```

**OCR Processing:**

```text
Processing: 2 of 5 files
[Spinner] Extracting data...
```

**Bulk Export:**

```text
Preparing audit pack...
▓▓▓▓▓▓▓░░░░░░░░░░░░░░  70%
Creating ZIP (84 MB of 120 MB)
```

### 16.3 Skeleton Loading

- Quick stats bar skeleton
- Filter bar skeleton
- Receipt card skeleton (multiple)
- Table row skeleton (multiple)

---

## 17. REACT COMPONENT STRUCTURE

### 17.1 File Organization

```text
/src
├─ pages
│  └─ Receipts/
│     ├─ Receipts.tsx
│     ├─ Receipts.module.css
│     └─ Receipts.test.tsx
│
├─ components
│  └─ receipts/
│     ├─ ReceiptsHeader/
│     │  └─ ReceiptsHeader.tsx
│     ├─ QuickStatsBar/
│     │  └─ QuickStatsBar.tsx
│     ├─ ReceiptFiltersBar/
│     │  ├─ ReceiptFiltersBar.tsx
│     │  ├─ DateRangeFilter.tsx
│     │  ├─ CategoryFilter.tsx
│     │  ├─ TaxTypeFilter.tsx
│     │  └─ VendorSearch.tsx
│     ├─ ReceiptDisplay/
│     │  ├─ ReceiptsList.tsx
│     │  ├─ ReceiptGrid.tsx
│     │  ├─ ReceiptTable.tsx
│     │  ├─ ReceiptCard.tsx
│     │  ├─ ReceiptTableRow.tsx
│     │  └─ Pagination.tsx
│     ├─ ReceiptDetail/
│     │  ├─ ReceiptDetail.tsx
│     │  ├─ ReceiptPreview.tsx
│     │  ├─ ReceiptMetadata.tsx
│     │  ├─ TaggingSection.tsx
│     │  ├─ LinkedTransactions.tsx
│     │  └─ ActivityLog.tsx
│     ├─ Upload/
│     │  ├─ UploadReceiptModal.tsx
│     │  ├─ DragDropZone.tsx
│     │  ├─ ReceiptProcessing.tsx
│     │  └─ AutoTaggingModal.tsx
│     ├─ Tagging/
│     │  ├─ CategorySelector.tsx
│     │  ├─ TaxTypeSelector.tsx
│     │  ├─ CostCenterSelector.tsx
│     │  └─ DeductibilityToggle.tsx
│     ├─ Matching/
│     │  ├─ ReceiptMatching.tsx
│     │  ├─ ReceiptLinkingModal.tsx
│     │  └─ MatchSuggestion.tsx
│     ├─ Reporting/
│     │  ├─ ReportsExportModal.tsx
│     │  ├─ AuditPackExport.tsx
│     │  └─ DeductibleExpensesReport.tsx
│     ├─ BulkActions/
│     │  ├─ BulkActionsBar.tsx
│     │  ├─ BulkTagModal.tsx
│     │  └─ BulkDeleteConfirm.tsx
│     ├─ Modals/
│     │  ├─ ConfirmationModal.tsx
│     │  ├─ FilterSaveModal.tsx
│     │  └─ ErrorModal.tsx
│     └─ Skeletons/
│        ├─ ReceiptsSkeleton.tsx
│        ├─ CardSkeleton.tsx
│        └─ TableSkeleton.tsx
│
├─ hooks
│  ├─ useReceiptManagement.ts
│  ├─ useReceiptOCR.ts
│  ├─ useReceiptMatching.ts
│  ├─ useReceiptFilters.ts
│  └─ useReceiptValidation.ts
│
├─ services
│  ├─ receiptService.ts
│  ├─ ocrService.ts
│  ├─ matchingService.ts
│  ├─ reportingService.ts
│  └─ exportService.ts
│
├─ utils
│  ├─ receiptValidator.ts
│  ├─ ocrExtractor.ts
│  ├─ matchingAlgorithm.ts
│  ├─ reportGenerator.ts
│  ├─ currencyFormatter.ts
│  └─ dateFormatter.ts
│
├─ types
│  └─ receipt.ts
│
└─ styles
   └─ receipts.css
```

---

## 18. API ENDPOINTS

### Receipt Management

```text
GET    /api/receipts                       # List all receipts (paginated)
GET    /api/receipts/:id                   # Get single receipt detail
POST   /api/receipts/upload                # Upload new receipt(s)
PATCH  /api/receipts/:id                   # Update receipt metadata
PATCH  /api/receipts/:id/tag               # Tag receipt (category, tax type)
DELETE /api/receipts/:id                   # Delete receipt
```

### Receipt Processing

```text
POST   /api/receipts/ocr-process           # OCR extract from file/image
POST   /api/receipts/suggest-category      # AI suggest expense category
POST   /api/receipts/suggest-tax-type      # AI suggest tax type
POST   /api/receipts/suggest-deductibility # AI assess deductibility
```

### Receipt Linking & Matching

```text
GET    /api/receipts/:id/find-matches      # Find matching transactions
POST   /api/receipts/:id/link              # Link to invoice/payment/expense
POST   /api/receipts/:id/confirm-match     # Confirm manual match
POST   /api/receipts/:id/unlink            # Remove link
```

### Bulk Operations

```text
POST   /api/receipts/bulk-tag              # Tag multiple receipts
POST   /api/receipts/bulk-download         # Download multiple as ZIP
POST   /api/receipts/bulk-delete           # Delete multiple
```

### Filtering & Search

```text
GET    /api/receipts/search                # Full-text search by vendor/notes
GET    /api/receipts/filter                # Advanced filters (saved as query params)
POST   /api/receipts/save-filter-set       # Save filter combination
GET    /api/receipts/filter-sets           # List saved filter sets
DELETE /api/receipts/filter-sets/:id       # Delete saved filter set
```

### Reporting & Export

```text
POST   /api/receipts/generate-audit-pack   # Generate audit pack ZIP
POST   /api/receipts/generate-report       # Generate custom report (PDF/Excel)
POST   /api/receipts/export-deductible     # Export deductible expenses
GET    /api/receipts/statistics            # Receipt statistics & metrics
```

### Email Integration

```text
POST   /api/receipts/enable-email-import   # Enable receipts@taxgee.ng forwarding
GET    /api/receipts/email-import-status   # Check email import status
POST   /api/receipts/email-import-history  # View emailed receipts
```

---

## 19. APPENDIX: DESIGN SYSTEM ALIGNMENT

### Color Palette

| Usage           | Color       | Hex      |
|-----------------|-------------|----------|
| Primary         | Teal-500    | #218D8D  |
| Secondary       | Slate-800   | #1F2121  |
| Success         | Emerald-500 | #10B981  |
| Warning         | Amber-500   | #F59E0B  |
| Danger/Error    | Rose-500    | #F43F5E  |
| Border          | Slate-200   | #E2E8F0  |
| Background      | Slate-50    | #F8FAFC  |
| Surface         | White       | #FFFFFF  |

### Typography

- **Headings**: Inter Bold, Plus Jakarta Sans Bold
- **Body**: Inter Regular, Plus Jakarta Sans Regular
- **Labels**: Inter Medium (600 weight)
- **Monospace**: JetBrains Mono (for receipt IDs, amounts)

### Spacing

- **Grid unit**: 4px
- **Small**: 8px
- **Medium**: 16px
- **Large**: 24px
- **Extra large**: 32px

### Border Radius

- **Small buttons/inputs**: 6px
- **Cards**: 8px
- **Modals**: 12px
- **Upload zone**: 8px
- **Badges**: 12–20px

### Shadows

- **Small**: 0 2px 8px rgba(0,0,0,0.08)
- **Medium**: 0 4px 12px rgba(0,0,0,0.12)
- **Large**: 0 10px 20px rgba(0,0,0,0.15)
- **Modal**: 0 20px 25px rgba(0,0,0,0.15)

---

## NEXT STEPS

1. **OCR Engine Integration**: Connect to Tesseract, AWS Textract, or Google Vision API
2. **AI/ML Model Training**: Build category and tax type suggestion models
3. **Email Integration**: Set up receipts@taxgee.ng auto-import
4. **Bank Feed Integration**: Auto-import transactions for matching
5. **PDF Rendering**: Implement PDF preview & annotation
6. **ZIP Export**: Build audit pack generation with proper indexing
7. **Report Generation**: PDF/Excel report templates
8. **Mobile Optimizations**: Camera capture and mobile-optimized UI
9. **Duplicate Detection**: Prevent duplicate receipt uploads
10. **Audit Trail**: Track all receipt modifications and links
11. **User Testing**: Validate OCR accuracy and tagging efficiency
12. **Performance Optimization**: Cache frequently accessed receipts

---

**Document Version:** 1.0  
**Status:** Production Ready  
**Author:** TaxGee Design Team  
**Last Updated:** December 24, 2025

**Contact:** design@taxgee.ng
