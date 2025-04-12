const express = require("express");
const route = express.Router();
const pelayanan = require("../controllers/pelayanan-controller");
const { auth } = require("../middlewares/auth-middleware");

/**
 * @swagger
 * /pelayanan:
 *   post:
 *     summary: Menambahkan data Pelayanan Rumah Sakit
 *     description: Endpoint ini digunakan untuk menambahkan data baru mengenai pelayanan rumah sakit.
 *     tags:
 *       - Pelayanan Rumah Sakit
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama_pelayanan:
 *                 type: string
 *                 example: "Pelayanan Umum"
 *               Persyaratan:
 *                 type: string
 *                 example: "Fotokopi KTP, Kartu BPJS"
 *               Prosedur:
 *                 type: string
 *                 example: "Datang ke loket, Mengisi formulir, Menunggu antrian"
 *               JangkaWaktu:
 *                 type: string
 *                 example: "2 hari kerja"
 *               Biaya:
 *                 type: number
 *                 example: 50000
 *     responses:
 *       201:
 *         description: Pelayanan berhasil ditambahkan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statusCode:
 *                   type: integer
 *                   example: 201
 *                 message:
 *                   type: string
 *                   example: "Pelayanan berhasil ditambahkan"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     nama_pelayanan:
 *                       type: string
 *       400:
 *         description: Semua field wajib diisi atau format ID tidak valid.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: integer
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Semua field wajib diisi"
 *       401:
 *         description: Pengguna tidak memiliki otorisasi.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: integer
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Authorization tidak ditemukan"
 *       500:
 *         description: Terjadi kesalahan pada server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error"
 */
route.post("/", auth, pelayanan.createPelayanan);

/**
 * @swagger
 * /pelayanan:
 *   get:
 *     summary: Mendapatkan semua data Pelayanan Rumah Sakit
 *     description: Endpoint ini digunakan untuk mengambil semua data pelayanan rumah sakit.
 *     tags:
 *       - Pelayanan Rumah Sakit
 *     responses:
 *       200:
 *         description: Berhasil mendapatkan data pelayanan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Berhasil mendapatkan data pelayanan"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id_pelayanan:
 *                         type: integer
 *                       nama_pelayanan:
 *                         type: string
 *       500:
 *         description: Terjadi kesalahan pada server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error"
 */
route.get("/", pelayanan.getPelayanan);

/**
 * @swagger
 * /pelayanan/{id_pelayanan}:
 *   get:
 *     summary: Mendapatkan data Pelayanan Rumah Sakit berdasarkan ID
 *     description: Endpoint ini digunakan untuk mengambil satu data pelayanan berdasarkan ID.
 *     tags:
 *       - Pelayanan Rumah Sakit
 *     parameters:
 *       - in: path
 *         name: id_pelayanan
 *         required: true
 *         schema:
 *           type: string
 *         description: ID dari pelayanan yang ingin diambil
 *     responses:
 *       200:
 *         description: Data pelayanan ditemukan.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Data pelayanan ditemukan"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id_pelayanan:
 *                       type: string
 *                       example: "bf27354f-6d82-4e25-9541-b9efc8bf57ed"
 *                     nama_pelayanan:
 *                       type: string
 *                       example: "Pelayanan Umum"
 *                     Persyaratan:
 *                       type: string
 *                       example: "Fotokopi KTP"
 *                     Prosedur:
 *                       type: string
 *                       example: "Datang ke loket"
 *                     JangkaWaktu:
 *                       type: string
 *                       example: "2 hari"
 *                     Biaya:
 *                       type: number
 *                       example: 50000
 *       404:
 *         description: Data tidak ditemukan.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 404
 *                 status:
 *                   type: string
 *                   example: "Failed"
 *                 message:
 *                   type: string
 *                   example: "Pelayanan dengan ID tersebut tidak ditemukan."
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 500
 *                 status:
 *                   type: string
 *                   example: "Failed"
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 */
route.get("/:id_pelayanan", pelayanan.getById);
/**
 * @swagger
 * /pelayanan/{id_pelayanan}:
 *   put:
 *     summary: Memperbarui data Pelayanan Rumah Sakit
 *     description: Endpoint ini digunakan untuk memperbarui data pelayanan berdasarkan ID.
 *     tags:
 *       - Pelayanan Rumah Sakit
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_pelayanan
 *         required: true
 *         schema:
 *           type: string
 *         description: ID dari pelayanan yang akan diperbarui
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama_pelayanan:
 *                 type: string
 *                 example: "Pelayanan Rawat Jalan"
 *               Persyaratan:
 *                 type: string
 *                 example: "KTP, Kartu BPJS"
 *               Prosedur:
 *                 type: string
 *                 example: "Registrasi online, ambil antrian"
 *               JangkaWaktu:
 *                 type: string
 *                 example: "1 hari"
 *               Biaya:
 *                 type: number
 *                 example: 25000
 *     responses:
 *       200:
 *         description: Data pelayanan berhasil di update.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "pelayanan berhasil diperbarui"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id_pelayanan:
 *                       type: string
 *                       example: "bf27354f-6d82-4e25-9541-b9efc8bf57ed"
 *                     nama_pelayanan:
 *                       type: string
 *                       example: "Pelayanan Umum"
 *       400:
 *         description: ID pelayanan diperlukan.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: integer
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "ID pelayanan diperlukan"
 *       401:
 *         description: Pengguna tidak memiliki otorisasi.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: integer
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Authorization tidak ditemukan"
 *       500:
 *         description: Terjadi kesalahan pada server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error"
 */
route.put("/:id_pelayanan", auth, pelayanan.updatePelayanan);

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *       description: Masukkan token JWT di sini
 */
module.exports = route;
