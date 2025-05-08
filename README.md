# Eva Case - Sales Analytics Dashboard

A modern sales analytics dashboard built with Vue 3, TypeScript, and Highcharts.

## Features

- 📊 Interactive daily sales chart with date selection
- 📈 Multiple data visualization options (FBA Amount, FBM Amount, Profit)
- 📅 Date range selection with plot bands
- 📋 SKU list with pagination
- 🔄 Real-time data updates
- 🎨 Modern and responsive UI
- 📱 Mobile-friendly design

## Tech Stack

- **Frontend Framework:** Vue 3 with Composition API
- **Language:** TypeScript
- **State Management:** Vuex
- **Charting Library:** Highcharts
- **Styling:** Tailwind CSS
- **Build Tool:** Vite

## Project Structure

```
src/
├── api/              # API endpoints and configurations
├── components/       # Reusable Vue components
│   ├── BaseChart.vue # Base chart component with Highcharts integration
│   ├── Table.vue     # SKU list table component
│   └── ...
├── store/           # Vuex store modules
│   ├── auth.ts      # Authentication state management
│   └── salesAnalytics.ts # Sales data state management
├── views/           # Page components
│   ├── Dashboard.vue # Main dashboard view
│   └── LoginView.vue # Login page
└── services/        # Service layer for API calls
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Berkaysuozer/eva-case-study
cd eva-case
```

2. Install dependencies:
```bash
npm install
```

3. Run Project

```bash
npm run dev
```
