require("dotenv").config();
const prisma = require("../prismaClient");

const users = [
  {
    id_user: "a12f44b8-98d6-4d24-b1c4-2921bd3ce7f2",
    nama: "RS Balung",
    email: "ahmadfariddd5@gmail.com",
    password: "ahazain12345",
  },
];

const berita = [
  {
    id_berita: "5f89f4ec-cc58-4fd9-b3df-64d3bcd36ff9",
    judul:
      "Menkes Respons Kasus Pemerkosaan di RSHS, Soroti Obat Bius Bebas Dipakai",
    ringkasan:
      "Jakarta - Menteri Kesehatan Budi Gunadi Sadikin buka suara soal kasus kekerasan seksual...",
    isi: `Jakarta, 12 April 2025 – Menteri Kesehatan (Menkes) Budi Gunadi Sadikin akhirnya angkat bicara terkait kasus...`,
    gambar_sampul:
      "https://akcdn.detik.net.id/community/media/visual/2025/04/12/menkes-budi-gunadi-sadikin-1744457661081_169.jpeg?w=700&q=90",
  },
];

const aduan = [
  {
    id_aduan: "8912ac2e-5c4d-4206-bb1a-950ae95a8c0a",
    judul: "Aduan Pertama",
    deskripsi: "Ini adalah deskripsi aduan pertama.",
    no_wa: "081234567890",
  },
];

const responAdmin = [
  {
    id_respon_admin: "25b92923-51cd-4f55-a0c4-03c343f36068",
    message: "Respon untuk aduan pertama.",
    id_aduan: "8912ac2e-5c4d-4206-bb1a-950ae95a8c0a",
    id_user: "a12f44b8-98d6-4d24-b1c4-2921bd3ce7f2",
  },
];

const poli = [
  {
    id_poli: "95d1f57c-01cf-49f3-bb6c-32a5dba8f300",
    nama_poli: "Poli Spesialis Penyakit Dalam",
  },
  {
    id_poli: "f4b34b36-b702-4294-9cf1-476eb5a57e1e",
    nama_poli: "Poli Spesialis Anak",
  },
  {
    id_poli: "c6224773-dfdb-42a0-a98f-df74f07fbc9c",
    nama_poli: "Poli Spesialis Kebidanan & Kandungan",
  },
  {
    id_poli: "2f68199c-08f3-4664-bd0e-7131c84be212",
    nama_poli: "Poli Spesialis Bedah Umum",
  },
  {
    id_poli: "8b540497-4f77-4568-8b09-67f8033b19d9",
    nama_poli: "Poli Spesialis Bedah Orthopedi",
  },
  {
    id_poli: "b4fe2b3e-d27a-4f8b-b1da-d1f9e2b74856",
    nama_poli: "Poli Spesialis Bedah Saraf",
  },
  {
    id_poli: "43f96d2b-86b7-4f61-8ec5-574e55256871",
    nama_poli: "Poli Spesialis Bedah Urologi",
  },
  {
    id_poli: "7fc5d07f-2f99-433a-b78a-4f56a5045db3",
    nama_poli: "Poli Spesialis Mata",
  },
  {
    id_poli: "3a8de13d-6d5a-426f-b15f-b12e9b1b87c1",
    nama_poli: "Poli Spesialis THT (Telinga, Hidung, Tenggorokan)",
  },
  {
    id_poli: "97b8f1a7-d42a-47be-843d-2ad1040c9b93",
    nama_poli: "Poli Spesialis Syaraf (Neurologi)",
  },
  {
    id_poli: "0b4577fa-437b-4643-850d-5a4be524174b",
    nama_poli: "Poli Spesialis Paru",
  },
  {
    id_poli: "b49f63b2-b687-4da5-a05a-d79fc7072a69",
    nama_poli: "Poli Spesialis Jantung & Pembuluh Darah",
  },
  {
    id_poli: "7755e63c-6052-46f5-8f74-1e43101cf63c",
    nama_poli: "Poli Spesialis Kedokteran Fisik & Rehabilitasi",
  },
  {
    id_poli: "2f45d037-df1a-4ed4-8038-674f2ae3f35b",
    nama_poli: "Poli Spesialis Kulit & Kelamin",
  },
  {
    id_poli: "af8d2194-d7d6-42c1-b87d-eed56dcbcdaf",
    nama_poli: "Poli Spesialis Jiwa (Psikiatri)",
  },
  {
    id_poli: "619a2d1e-9a19-4c3a-8e6b-cb7e3ef2b84b",
    nama_poli: "Poli Spesialis Radiologi",
  },
  {
    id_poli: "e2b8b6fa-f75b-4333-b788-57586cd49ecf",
    nama_poli: "Poli Spesialis Patologi Klinik",
  },
  {
    id_poli: "86b7955f-4a30-4a5e-8461-ff3b05b5391d",
    nama_poli: "Poli Spesialis Anaestesi & Reaminasi",
  },
  {
    id_poli: "ecb519eb-62f5-4724-bdfa-0ffae578b1bb",
    nama_poli: "Poli Spesialis Kedokteran Forensik (Dokter Gigi Spesialis)",
  },
  {
    id_poli: "adf57b7e-b1bc-46b1-9d74-d390fa5861a4",
    nama_poli: "Poli Spesialis Orthodonti (Dokter Gigi Spesialis)",
  },
  {
    id_poli: "81a91f9c-1d77-475b-a75a-e60138fdbd91",
    nama_poli: "Poli Spesialis Gigi",
  },
  { id_poli: "7628fbb9-2637-4298-909f-b758a5633bdb", nama_poli: "Poli Umum" },
  { id_poli: "ed3cc7f7-8d1c-43c9-b45d-d9d1f9646a29", nama_poli: "Poli VCT" },
];

const pelayanan = [
  {
    id_pelayanan: "f2bd5f40-35e3-4b58-812f-c3e1872d3722",
    nama_pelayanan: "Rawat Inap",
    Persyaratan:
      "Fotokopi KTP,Fotokopi kartu BPJS,Surat Rujukan dari dokter jika ada",
    Prosedur:
      "Pasien mendaftar ke bagian administrasi, Pasien menunggu kunjungan dokter, Pasien mengikuti prosedur medis yang dianjurkan oleh dokter",
    JangkaWaktu: "1-2 hari setelah pendaftaran.",
    Biaya: 50000,
  },
];

const dokter = [
  {
    id_dokter: "a387b0a1-b0d4-4aef-bc8e-67f8c850d2f9",
    nama: "dr. Renard Christian, Sp.N (RCH)",
    gambar: "https://example.com/dr_renard.jpg",
    id_poli: "97b8f1a7-d42a-47be-843d-2ad1040c9b93", // Poli Spesialis Syaraf (Neurologi)
  },
  {
    id_dokter: "c728b74a-f03a-48d2-bef3-c768d8c07172",
    nama: "dr. Movita Hidayati, Sp.P (MHY)",
    gambar: "https://example.com/dr_movita.jpg",
    id_poli: "0b4577fa-437b-4643-850d-5a4be524174b", // Poli Spesialis Paru
  },
  {
    id_dokter: "b56b2c8f-3c0c-45fe-9c8e-c0b455b9d50d",
    nama: "dr. Ratna Pancasari, Sp.JP (RPN)",
    gambar: "https://example.com/dr_ratna.jpg",
    id_poli: "b49f63b2-b687-4da5-a05a-d79fc7072a69", // Poli Spesialis Jantung & Pembuluh Darah
  },
  {
    id_dokter: "f62dbaf7-b6f8-43ad-8de1-07b4dbf56c2e",
    nama: "dr. Kukuh Wibisono, Sp.KFR (KWS)",
    gambar: "https://example.com/dr_kukuh.jpg",
    id_poli: "7755e63c-6052-46f5-8f74-1e43101cf63c", // Poli Spesialis Kedokteran Fisik & Rehabilitasi
  },
  {
    id_dokter: "7f305f74-9b46-4239-b56b-94e9f238b84f",
    nama: "dr. Handi Sembodo, Sp.Rad (HSB)",
    gambar: "https://example.com/dr_handi.jpg",
    id_poli: "619a2d1e-9a19-4c3a-8e6b-cb7e3ef2b84b", // Poli Spesialis Radiologi
  },
  {
    id_dokter: "cf742b7a-06ad-47a2-8988-4c0b4e5dbdc5",
    nama: "dr. Ade Rochaeni, Sp.PK (ARH)",
    gambar: "https://example.com/dr_ade.jpg",
    id_poli: "e2b8b6fa-f75b-4333-b788-57586cd49ecf", // Poli Spesialis Patologi Klinik
  },
  {
    id_dokter: "54993e99-e4b5-49f9-9d0d-c3e6b8acb7e0",
    nama: "dr. Antonius Abimasetyo Putro, Sp.An (MBI)",
    gambar: "https://example.com/dr_anton.jpg",
    id_poli: "86b7955f-4a30-4a5e-8461-ff3b05b5391d", // Poli Spesialis Anaestesi & Reaminasi
  },
  {
    id_dokter: "4c1fe8b7-3a0e-4b53-94ff-df14ef8ad6c6",
    nama: "dr. Mahisa Pribadi B, Sp.An (MPB)",
    gambar: "https://example.com/dr_mahisa.jpg",
    id_poli: "86b7955f-4a30-4a5e-8461-ff3b05b5391d", // Poli Spesialis Anaestesi & Reaminasi
  },
  {
    id_dokter: "cfaee6da-1b67-400a-bdb6-f6ca4b093b17",
    nama: "dr. M. Afiful Jauhani, Sp.F, SH,MH (MAJ)",
    gambar: "https://example.com/dr_afiful.jpg",
    id_poli: "ecb519eb-62f5-4724-bdfa-0ffae578b1bb", // Poli Spesialis Kedokteran Forensik (Dokter Gigi Spesialis)
  },
  {
    id_dokter: "3a8b0df5-e2db-4535-a563-d2a1db914d6c",
    nama: "dr. Nurulllah Hidajahningtyas, MM (NHT)",
    gambar: "https://example.com/dr_nurul.jpg",
    id_poli: "7628fbb9-2637-4298-909f-b758a5633bdb", // Poli Umum
  },
  {
    id_dokter: "69306b36-231f-44b9-b4a2-eaf1c20fc92b",
    nama: "dr. Hj. Siti Nurul Qomariyah, M.Kes (SNQ)",
    gambar: "https://example.com/dr_siti.jpg",
    id_poli: "7628fbb9-2637-4298-909f-b758a5633bdb", // Poli Umum
  },
  {
    id_dokter: "a6d28b49-35b2-4a74-b029-d96c2a01f342",
    nama: "dr. Hj. Gini Wuryandari, M.Kes (GWY)",
    gambar: "https://example.com/dr_gini.jpg",
    id_poli: "7628fbb9-2637-4298-909f-b758a5633bdb", // Poli Umum
  },
  {
    id_dokter: "431cc86d-6987-442f-b8d7-799d7c5c74d2",
    nama: "dr. H. Rohmat Pujo Santoso (RPS)",
    gambar: "https://example.com/dr_rohmat.jpg",
    id_poli: "7628fbb9-2637-4298-909f-b758a5633bdb", // Poli Umum
  },
  {
    id_dokter: "68b77c10-4069-4387-9c56-198f4d0d10d6",
    nama: "dr. H. Heri Purwanto, M.MRS (HPW)",
    gambar: "https://example.com/dr_heri.jpg",
    id_poli: "7628fbb9-2637-4298-909f-b758a5633bdb", // Poli Umum
  },
  {
    id_dokter: "c6161f91-d8c5-4b70-8005-f2b08456c02e",
    nama: "dr. H. Rohmadoni (RDN)",
    gambar: "https://example.com/dr_rohmadoni.jpg",
    id_poli: "7628fbb9-2637-4298-909f-b758a5633bdb", // Poli Umum
  },
  {
    id_dokter: "ff7f6264-e26d-45d6-9f86-03ca9a479a16",
    nama: "dr. Bagus Dananing Satwikaputra (BDS)",
    gambar: "https://example.com/dr_bagus.jpg",
    id_poli: "7628fbb9-2637-4298-909f-b758a5633bdb", // Poli Umum
  },
  {
    id_dokter: "90876227-5b96-4025-bdb6-933c9eb1d13d",
    nama: "dr. Eka Prasetya Wati (EPW)",
    gambar: "https://example.com/dr_eka.jpg",
    id_poli: "7628fbb9-2637-4298-909f-b758a5633bdb", // Poli Umum
  },
  {
    id_dokter: "d285f7b3-7b59-4b25-bbde-c4e23e68e0b6",
    nama: "dr. Wahyu Setyawati (WSW)",
    gambar: "https://example.com/dr_wahyu.jpg",
    id_poli: "7628fbb9-2637-4298-909f-b758a5633bdb", // Poli Umum
  },
  {
    id_dokter: "04f61d34-e1d6-40ea-b3e1-4e51d49f1cc5",
    nama: "dr. Doddy Radhi Sakti (DRS)",
    gambar: "https://example.com/dr_doddy.jpg",
    id_poli: "ed3cc7f7-8d1c-43c9-b45d-d9d1f9646a29", // Poli VCT
  },
  {
    id_dokter: "bc58f1a4-e459-4e9d-a00f-94b9d7bb3c1d",
    nama: "dr. Dodi Guntoro (DGT)",
    gambar: "https://example.com/dr_dodi.jpg",
    id_poli: "7628fbb9-2637-4298-909f-b758a5633bdb", // Poli Umum
  },
  {
    id_dokter: "b1ca4ed4-443b-4c64-8a33-15d6042eac1b",
    nama: "dr. Dio Resna Oktavinanda (DRO)",
    gambar: "https://example.com/dr_dio.jpg",
    id_poli: "7628fbb9-2637-4298-909f-b758a5633bdb", // Poli Umum
  },
  {
    id_dokter: "7e0d38a3-fabf-48e0-bd42-90030d881451",
    nama: "dr. Dias Guita Alantus (DGA)",
    gambar: "https://example.com/dr_dias.jpg",
    id_poli: "7628fbb9-2637-4298-909f-b758a5633bdb", // Poli Umum
  },
  {
    id_dokter: "5ca12cc1-7b2c-45eb-b5ed-d53dcb3eaf9a",
    nama: "dr. Agustinus Siswanto (ASW)",
    gambar: "https://example.com/dr_agustinus.jpg",
    id_poli: "7628fbb9-2637-4298-909f-b758a5633bdb", // Poli Umum
  },
  {
    id_dokter: "63ed3b5c-0a71-4db1-b9f1-3574f571bcb9",
    nama: "dr. Idfian Feranta Adi Arizba (IFA)",
    gambar: "https://example.com/dr_idfian.jpg",
    id_poli: "7628fbb9-2637-4298-909f-b758a5633bdb", // Poli Umum
  },
  {
    id_dokter: "cda57338-52ae-4877-a567-739cbe2d22be",
    nama: "dr. Ilham Yudhi Pratama (IYP)",
    gambar: "https://example.com/dr_ilham.jpg",
    id_poli: "7628fbb9-2637-4298-909f-b758a5633bdb", // Poli Umum
  },
  {
    id_dokter: "20455670-227d-47b5-9e7b-b4dff5da3834",
    nama: "drg. Heruddin (HRU)",
    gambar: "https://example.com/drg_heruddin.jpg",
    id_poli: "2f45d037-df1a-4ed4-8038-674f2ae3f35b", // Poli Spesialis Gigi
  },
  {
    id_dokter: "07b6fbc7-e2fd-46a0-b098-2e045106bed6",
    nama: "drg. Zaskia Putri Armanda (ZPA)",
    gambar: "https://example.com/drg_zaskia.jpg",
    id_poli: "2f45d037-df1a-4ed4-8038-674f2ae3f35b", // Poli Spesialis Gigi
  },

  // Poli Spesialis Penyakit Dalam
  {
    id_dokter: "1f1b3db7-f8fc-4a4e-9db6-101e7b34a001",
    nama: "dr. H. Agus Yudho Santoso, Sp.PD, Finasim ( AYS )",
    gambar:
      "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id_poli: "95d1f57c-01cf-49f3-bb6c-32a5dba8f300",
  },
  {
    id_dokter: "2f1b3db7-f8fc-4a4e-9db6-101e7b34a002",
    nama: "dr. Astu Anindya Jati, Sp.PD (AAJ)",
    gambar:
      "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id_poli: "95d1f57c-01cf-49f3-bb6c-32a5dba8f300",
  },
  {
    id_dokter: "3f1b3db7-f8fc-4a4e-9db6-101e7b34a003",
    nama: "dr. Jualita Heidi Saputri, Sp.PD (JHS)",
    gambar:
      "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id_poli: "95d1f57c-01cf-49f3-bb6c-32a5dba8f300",
  },
  {
    id_dokter: "4f1b3db7-f8fc-4a4e-9db6-101e7b34a004",
    nama: "dr. Isty Rindryastuti, Sp.PD (RIN)",
    gambar:
      "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id_poli: "95d1f57c-01cf-49f3-bb6c-32a5dba8f300",
  },
  {
    id_dokter: "5f1b3db7-f8fc-4a4e-9db6-101e7b34a005",
    nama: "dr. Sherrvy Eva Wijayaningrum,M.Biomed., Sp.PD (SEW)",
    gambar:
      "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id_poli: "95d1f57c-01cf-49f3-bb6c-32a5dba8f300",
  },

  // Poli Spesialis Anak
  {
    id_dokter: "6f1b3db7-f8fc-4a4e-9db6-101e7b34a006",
    nama: "dr. Natalia Kristanti Nugraheni, Sp.A (NAT)",
    gambar:
      "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id_poli: "f4b34b36-b702-4294-9cf1-476eb5a57e1e",
  },
  {
    id_dokter: "7f1b3db7-f8fc-4a4e-9db6-101e7b34a007",
    nama: "dr. Debora Pratita Acchedya Buntara, Sp.A (DPA)",
    gambar:
      "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id_poli: "f4b34b36-b702-4294-9cf1-476eb5a57e1e",
  },

  // Poli Spesialis Kebidanan dan Kandungan
  {
    id_dokter: "8f1b3db7-f8fc-4a4e-9db6-101e7b34a008",
    nama: "dr. Moch. Sodiq Kukuh WS, Sp.OG (MSK)",
    gambar:
      "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id_poli: "c6224773-dfdb-42a0-a98f-df74f07fbc9c",
  },
  {
    id_dokter: "9f1b3db7-f8fc-4a4e-9db6-101e7b34a009",
    nama: "dr. Dwi Cahya Febrimulya. M.Ked, Sp.OG (DIF)",
    gambar:
      "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id_poli: "c6224773-dfdb-42a0-a98f-df74f07fbc9c",
  },
  {
    id_dokter: "10f1b3db7-f8fc-4a4e-9db6-101e7b34a010",
    nama: "dr. Miftahul Falah Ahmad, Sp.OG (MFA)",
    gambar:
      "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id_poli: "c6224773-dfdb-42a0-a98f-df74f07fbc9c",
  },

  // Poli Spesialis Bedah Umum
  {
    id_dokter: "11f1b3db7-f8fc-4a4e-9db6-101e7b34a011",
    nama: "dr. H. M. Arief Heriawan, Sp.B, Finac (ARI)",
    gambar:
      "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id_poli: "2f68199c-08f3-4664-bd0e-7131c84be212",
  },
  {
    id_dokter: "12f1b3db7-f8fc-4a4e-9db6-101e7b34a012",
    nama: "dr. I Ketut Yante, Sp.B (IKY)",
    gambar:
      "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id_poli: "2f68199c-08f3-4664-bd0e-7131c84be212",
  },
  {
    id_dokter: "13f1b3db7-f8fc-4a4e-9db6-101e7b34a013",
    nama: "dr. Laksmi Indreswari, Sp.B (MIE)",
    gambar:
      "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id_poli: "2f68199c-08f3-4664-bd0e-7131c84be212",
  },

  // Poli Spesialis Bedah Orthopedi
  {
    id_dokter: "14f1b3db7-f8fc-4a4e-9db6-101e7b34a014",
    nama: "dr. I Gusti Bagus Indra Angganugraha P.J, Sp.BO (APJ)",
    gambar:
      "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id_poli: "8b540497-4f77-4568-8b09-67f8033b19d9",
  },

  // Poli Spesialis Bedah Urologi
  {
    id_dokter: "15f1b3db7-f8fc-4a4e-9db6-101e7b34a015",
    nama: "dr. Muhammad Zaniar Ramadhani, Sp.U, M.Ked.Klin (RAZ)",
    gambar:
      "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id_poli: "43f96d2b-86b7-4f61-8ec5-574e55256871",
  },

  // Poli Spesialis Mata
  {
    id_dokter: "16f1b3db7-f8fc-4a4e-9db6-101e7b34a016",
    nama: "dr. Heni Wijayanti, Sp.M (HWJ)",
    gambar:
      "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id_poli: "7fc5d07f-2f99-433a-b78a-4f56a5045db3",
  },

  // Poli Spesialis THT
  {
    id_dokter: "17f1b3db7-f8fc-4a4e-9db6-101e7b34a017",
    nama: "dr. Dini Fitrilia, Sp.THT- KL (DNI)",
    gambar:
      "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id_poli: "3a8de13d-6d5a-426f-b15f-b12e9b1b87c1",
  },
];
const jadwalDokter = [
  // Poli Spesialis Bedah Umum
  {
    id_jadwal_dokter: "cb7dc046-5cf6-4e12-8ad9-1abafee48b52",
    id_dokter: "11f1b3db7-f8fc-4a4e-9db6-101e7b34a011", // dr. H. M. Arief Heriawan, Sp.B
    hari: "Senin",
    jam_mulai: "07:00",
    jam_selesai: "14:00",
    sesi: "pagi",
    id_pelayanan: "f2bd5f40-35e3-4b58-812f-c3e1872d3722",
  },
  {
    id_jadwal_dokter: "cb7dc046-5cf6-4e12-8ad9-1abafee48b53",
    id_dokter: "12f1b3db7-f8fc-4a4e-9db6-101e7b34a012", // dr. I Ketut Yante, Sp.B
    hari: "Selasa",
    jam_mulai: "14:00",
    jam_selesai: "20:00",
    sesi: "sore",
    id_pelayanan: "f2bd5f40-35e3-4b58-812f-c3e1872d3722",
  },
  {
    id_jadwal_dokter: "cb7dc046-5cf6-4e12-8ad9-1abafee48b54",
    id_dokter: "13f1b3db7-f8fc-4a4e-9db6-101e7b34a013", // dr. Laksmi Indreswari, Sp.B
    hari: "Rabu",
    jam_mulai: "20:00",
    jam_selesai: "07:00",
    sesi: "malam",
    id_pelayanan: "f2bd5f40-35e3-4b58-812f-c3e1872d3722",
  },

  // Poli Spesialis Bedah Orthopedi
  {
    id_jadwal_dokter: "cb7dc046-5cf6-4e12-8ad9-1abafee48b55",
    id_dokter: "14f1b3db7-f8fc-4a4e-9db6-101e7b34a014", // dr. I Gusti Bagus Indra Angganugraha P.J
    hari: "Kamis",
    jam_mulai: "07:00",
    jam_selesai: "14:00",
    sesi: "pagi",
    id_pelayanan: "f2bd5f40-35e3-4b58-812f-c3e1872d3722",
  },

  // Poli Spesialis Bedah Urologi
  {
    id_jadwal_dokter: "cb7dc046-5cf6-4e12-8ad9-1abafee48b56",
    id_dokter: "15f1b3db7-f8fc-4a4e-9db6-101e7b34a015", // dr. Muhammad Zaniar Ramadhani, Sp.U
    hari: "Jumat",
    jam_mulai: "14:00",
    jam_selesai: "20:00",
    sesi: "sore",
    id_pelayanan: "f2bd5f40-35e3-4b58-812f-c3e1872d3722",
  },

  // Poli Spesialis Mata
  {
    id_jadwal_dokter: "cb7dc046-5cf6-4e12-8ad9-1abafee48b57",
    id_dokter: "16f1b3db7-f8fc-4a4e-9db6-101e7b34a016", // dr. Heni Wijayanti, Sp.M
    hari: "Sabtu",
    jam_mulai: "20:00",
    jam_selesai: "07:00",
    sesi: "malam",
    id_pelayanan: "f2bd5f40-35e3-4b58-812f-c3e1872d3722",
  },

  // Poli Spesialis THT
  {
    id_jadwal_dokter: "cb7dc046-5cf6-4e12-8ad9-1abafee48b58",
    id_dokter: "17f1b3db7-f8fc-4a4e-9db6-101e7b34a017", // dr. Dini Fitrilia, Sp.THT- KL
    hari: "Minggu",
    jam_mulai: "07:00",
    jam_selesai: "14:00",
    sesi: "pagi",
    id_pelayanan: "f2bd5f40-35e3-4b58-812f-c3e1872d3722",
  },
];

async function main() {
  await prisma.jadwalDokter.deleteMany();
  await prisma.dokter.deleteMany();
  await prisma.pelayanan.deleteMany();
  await prisma.responAdmin.deleteMany();
  await prisma.aduan.deleteMany();
  await prisma.berita.deleteMany();
  await prisma.user.deleteMany();
  await prisma.poli.deleteMany();

  await prisma.user.createMany({ data: users });
  await prisma.berita.createMany({ data: berita });
  await prisma.aduan.createMany({ data: aduan });
  await prisma.responAdmin.createMany({ data: responAdmin });
  await prisma.pelayanan.createMany({ data: pelayanan });
  await prisma.poli.createMany({ data: poli });
  await prisma.dokter.createMany({ data: dokter });
  await prisma.jadwalDokter.createMany({ data: jadwalDokter });

  console.log("Data seeder berhasil ditambahkan!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
