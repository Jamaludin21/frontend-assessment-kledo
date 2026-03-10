import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // Data loader untuk mengambil JSON saat route diakses
    loader: async () => {
      const response = await fetch('/data/indonesia_regions.json');
      if (!response.ok) {
        throw new Error('Gagal mengambil data wilayah');
      }
      return response.json();
    },
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)