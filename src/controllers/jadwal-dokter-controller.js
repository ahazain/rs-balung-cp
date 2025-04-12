const jadwalDokterService = require("../services/jadwal-dokter-service");
const responseHelper = require("../utils/response");

class JadwalDokterController {
  static async getDokterByPoli(req, res) {
    try {
      const { id_poli } = req.params;
      const dokter = await jadwalDokterService.getDokterByPoli({ id_poli });
      return responseHelper.success(
        res,
        dokter,
        "Berhasil menampilkan daftar dokter berdasarkan poli"
      );
    } catch (error) {
      return responseHelper.error(res, error);
    }
  }
  static async createJadwalDokter(req, res) {
    try {
      const { id_dokter, layananList } = req.body;
      const result = await jadwalDokterService.createJadwalDokter({
        id_dokter,
        layananList,
      });
      return responseHelper.success(
        res,
        result,
        "Jadwal dokter berhasil ditambahkan",
        201
      );
    } catch (error) {
      return responseHelper.error(res, error);
    }
  }

  static async searchJadwalDokter(req, res) {
    try {
      const { id_poli, tanggal } = req.query;
      const page = parseInt(req.query.page) || 1;
      const pageSize = parseInt(req.query.pageSize) || 10;

      const result = await jadwalDokterService.searchJadwalDokter({
        id_poli,
        tanggal,
        page,
        pageSize,
      });

      const hariFormatted = new Date(tanggal).toLocaleDateString("id-ID", {
        weekday: "long",
      });
      return responseHelper.success(
        res,
        result,
        `Data jadwal dokter untuk hari ${hariFormatted} (${tanggal}) berhasil diambil.`
      );
    } catch (error) {
      return responseHelper.error(res, error);
    }
  }

  static async getAllJadwalDokter(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const pageSize = parseInt(req.query.pageSize) || 10;
      const data = await jadwalDokterService.getAllJadwalDokter(page, pageSize);
      return responseHelper.success(
        res,
        data,
        "Berhasil menampilkan seluruh jadwal dokter"
      );
    } catch (error) {
      return responseHelper.error(res, error);
    }
  }
  static async getByIdJadwalDokter(req, res) {
    try {
      const { id_dokter } = req.params;
      const result = await jadwalDokterService.getJadwalDokterById({
        id_dokter,
      });

      return responseHelper.success(
        res,
        result,
        "Berhasil mengambil data jadwal dokter"
      );
    } catch (error) {
      return responseHelper.error(res, error);
    }
  }

  static async updateJadwalDokter(req, res) {
    try {
      const { id_dokter } = req.params;
      const { layananList } = req.body;

      const result = await jadwalDokterService.updateJadwalDokter(
        { id_dokter },
        { layananList }
      );

      return responseHelper.success(
        res,
        result,
        "Jadwal dokter berhasil diperbarui"
      );
    } catch (error) {
      return responseHelper.error(res, error);
    }
  }

  static async deleteJadwalDokterByDokterId(req, res) {
    try {
      const { id_dokter } = req.params;
      const result = await jadwalDokterService.deleteJadwalByDokterId({
        id_dokter,
      });
      return responseHelper.success(
        res,
        null,
        `Jadwal Praktek ${result.nama_dokter} berhasil dihapus`
      );
    } catch (error) {
      return responseHelper.error(res, error);
    }
  }
}

module.exports = JadwalDokterController;
