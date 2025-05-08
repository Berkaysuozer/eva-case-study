# Eva Case - Architecture Documentation

## Overview
Eva Case is a Vue.js application that provides sales analytics and reporting functionality. The application is built with Vue 3, TypeScript, and uses Vuex for state management.

## Project Structure
```
src/
├── assets/          # Static assets (images, styles)
├── components/      # Reusable Vue components
├── services/        # API and business logic services
├── store/          # Vuex store modules
├── views/          # Page components
└── router/         # Vue Router configuration
```

## Core Components

### Views
- **Dashboard.vue**: Main dashboard view displaying sales analytics
- **LoginView.vue**: Authentication view

### Components
- **BaseChart.vue**: Reusable chart component using Highcharts
- **DailySalesChart.vue**: Sales analytics chart implementation
- **Table.vue**: Data table component for displaying SKU information

## State Management

### Vuex Store Modules
- **salesAnalytics**: Manages sales data and analytics
  - State: `dailySalesData`, `skuListData`, `selectedDay`
  - Actions: `fetchDailySalesOverview`, `fetchDailySalesSkuList`
  - Mutations: `SET_DAILY_SALES_DATA`, `SET_SKU_LIST_DATA`

- **oauth**: Handles authentication
  - State: `token`, `isAuthenticated`
  - Actions: `login`, `logout`
  - Mutations: `SET_TOKEN`, `CLEAR_TOKEN`

## Data Flow

### Sales Analytics Flow
1. User selects a date range (7, 14, 30, or 60 days)
2. `DailySalesChart` component dispatches `fetchDailySalesOverview`
3. Store makes API call through `salesAnalytics.service`
4. Data is stored in Vuex and displayed in the chart
5. User can select specific dates for detailed SKU analysis
6. Selected dates trigger `fetchDailySalesSkuList`
7. SKU data is displayed in the table component

### Authentication Flow
1. User enters credentials in `LoginView`
2. Credentials are validated through `user.service`
3. On success, token is stored in Vuex
4. User is redirected to dashboard
5. Token is used for subsequent API calls

## API Integration

### Services
- **salesAnalytics.service.ts**: Handles sales data API calls
- **user.service.ts**: Manages user authentication and information
- **http.service.ts**: Base HTTP client with interceptors

### API Endpoints
- `/api/sales/daily-overview`: Get daily sales data
- `/api/sales/sku-list`: Get SKU list for selected dates
- `/api/auth/login`: User authentication
- `/api/user/info`: Get user information

## Component Communication

### Props & Events
- `BaseChart` emits `pointClick` for date selection
- `DailySalesChart` manages selected dates and coordinates between chart and table
- `Table` receives loading state and displays SKU data

### State Management
- Global state managed through Vuex
- Component-specific state using Vue's Composition API
- Reactive data flow between components

## Styling
- Tailwind CSS for utility-first styling
- Custom components styled with Tailwind classes
- Responsive design for all screen sizes

## Error Handling
- Global error handling in HTTP service
- Component-level error states
- User-friendly error messages
- Loading states for async operations

## Performance Considerations
- Lazy loading of routes
- Computed properties for derived data
- Efficient data updates through Vuex
- Optimized chart rendering

## Security
- Token-based authentication
- Secure HTTP headers
- Input validation
- XSS protection