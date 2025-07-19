## ATask Repositories

Aplikasi web React untuk mencari user GitHub dan menampilkan daftar repository milik user tersebut.

### Fitur Utama

- **Cari User GitHub:**
  - Input username untuk mencari user GitHub.
  - Menampilkan hasil user beserta daftar repository milik user tersebut.
- **Detail Repository:**
  - Setiap repository menampilkan nama, deskripsi, jumlah bintang, dan jumlah fork.
  - Terdapat link langsung ke halaman repository di GitHub.
- **UI Modern:**
  - Menggunakan komponen Accordion, Button, Input, dan Skeleton untuk tampilan interaktif.
- **Loading State:**
  - Skeleton loader saat data sedang diambil.

### Struktur Utama Kode

- `src/components/ui/pages/search-repo.tsx` — Halaman utama pencarian user dan repository.
- `src/store/` — State management menggunakan Redux Toolkit dan RTK Query.
- `src/helpers/axios.interceptor.ts` — Konfigurasi dan interceptor untuk request API menggunakan Axios.
- `src/lib/utils.ts` — Utility function untuk className merge.

### Third Party Libraries & Tools

- **React** — Library utama UI.
- **Redux Toolkit & RTK Query** — State management dan data fetching.
- **Axios** — HTTP client untuk komunikasi dengan API GitHub.
- **Vite** — Build tool dan dev server.
- **Tailwind CSS + shadcn** — Styling utility-first.

🚀 [Explore Application](https://rizaradiarivaldo.github.io/GitHub-repositories-explorer)