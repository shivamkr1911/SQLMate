﻿# SQLMate

## Overview

The **SQLMate** is a React-based web application that simulates a basic SQL query editor. Users can write SQL expressions, save them with labels, and execute queries to view results in a table format. The application mimics the behavior of running SQL queries by displaying a loading animation before rendering a table.

Key Features:

- **SQL Code Editor:** Users can write SQL queries using a code editor.
- **Query Saving:** Users can save their SQL expressions with custom labels.
- **Validation:** Prevents saving empty or duplicate queries and alerts users accordingly.
- **Dropdown Query Selection:** A dropdown menu lists saved queries for quick access.
- **Query Execution:** Users can run saved queries, triggering a loading animation before displaying the results in a table.
- **Mock Data Display:** The table displays predefined CSV data upon executing a query.

## Tech Stack

This project is built using **React** with Vite for fast development and performance optimization. The following major libraries are used:

### Dependencies:

- **`react-select`**: For enhanced dropdown selection of saved queries.
- **`codemirror`**: Provides a feature-rich SQL code editor with syntax highlighting.
- **`ag-grid-community`**: For displaying query results in a dynamic and interactive table.

## Installation & Setup

### Prerequisites:

- **Node.js** (v16 or later recommended)
- **npm** or **yarn**

### Steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/shivamkr1911/SQLMate.git
   cd sqlmate
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```
   or
   ```sh
   yarn dev
   ```
4. Open your browser and navigate to `http://localhost:5173/` (default Vite port).

## Measuring Page Load Time

To measure the page load time, we used **Chrome DevTools (Performance tab)**:

1. Open Chrome DevTools (`F12` or `Ctrl+Shift+I`).
2. Navigate to the **Performance** tab.
3. Click **Record** and refresh the page.
4. Stop recording and analyze the load time.

### Observed Load Time:

- First meaningful paint: ~250ms
- Full page load: ~500ms

## Performance Optimizations

To improve performance, the following optimizations were applied:

1. **Vite for Faster Builds:**
   - Vite's native ESM-based bundling speeds up local development.
2. **Lazy Loading Components:**

   - Used `React.lazy()` for components like the code editor and table to load them only when needed.

3. **Memoization with `useMemo` & `useCallback`:**

   - Optimized expensive computations and event handlers.

4. **Minimized Re-renders:**

   - Used `React.memo` for dropdown and table components to prevent unnecessary re-renders.

5. **Efficient State Management:**
   - Used React's `useState` and `useReducer` efficiently to handle form inputs and query execution.

## Future Enhancements

- **Database Integration:** Connect with a real database for executing actual SQL queries.
- **User Authentication:** Allow users to save queries persistently.
- **Dark Mode Support:** Provide theme customization.
