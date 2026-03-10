# Frontend Assessment - Region Filter

Aplikasi filter wilayah dinamis (Provinsi -> Kota/Kabupaten -> Kecamatan) yang dibangun untuk memenuhi persyaratan *frontend assessment*. 

🔗 **Live Demo:** https://frontend-assessment-kledo-amber.vercel.app/

## Fitur Utama
- **Cascading Dropdown:** Data Kota dan Kecamatan difilter secara dinamis berdasarkan pilihan induknya.
- **Persistent State:** Kondisi filter tidak hilang meskipun browser di-*refresh* (menggunakan URL Search Parameters).
- **Data Mode React Router:** Menggunakan `createBrowserRouter` dan `loader` untuk pengambilan data (*data fetching*) sebelum komponen di-*render*.
- **Modern Styling:** Antarmuka responsif menggunakan Tailwind CSS v4.

## Tech Stack
- React 19
- TypeScript
- Vite
- React Router DOM v7
- Tailwind CSS v4
