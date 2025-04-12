const prisma = require("../prisma/prismaClient");
const { BadRequestError, NotFoundError } = require("../utils/error");

class PoliService {
  static async createPoli({ nama_poli }) {
    if (!nama_poli) {
      throw new BadRequestError("nama poli harus diisi");
    }
    let formattedNamaPoli;
    if (nama_poli.toLowerCase() === "umum") {
      formattedNamaPoli = "Poli Umum";
    } else if (nama_poli.toLowerCase() === "vct") {
      formattedNamaPoli = "Poli VCT";
    } else {
      formattedNamaPoli = `Poli Spesialis ${nama_poli}`;
    }

    const poli = await prisma.poli.create({
      data: {
        nama_poli: formattedNamaPoli,
      },
    });

    return poli;
  }

  static async getPoli() {
    const poli = await prisma.poli.findMany({
      select: { id_poli: true, nama_poli: true },
    });

    if (poli.length === 0) {
      throw new NotFoundError("Ops! daftar poli kosong");
    }
    return poli;
  }
  static async updatePoli({ id_poli }, { nama_poli }) {
    if (!id_poli || !nama_poli) {
      throw new BadRequestError("ID Poli atau nama-poli harus diisi");
    }
    const poliExist = await prisma.poli.findUnique({
      where: { id_poli },
    });
    if (!poliExist) {
      throw new NotFoundError(`Poli dengan ID ${id_poli} tidak ditemukan`);
    }

    let formattedNamaPoli;
    if (nama_poli.toLowerCase() === "umum") {
      formattedNamaPoli = "Dokter Umum";
    } else if (nama_poli.toLowerCase() === "vct") {
      formattedNamaPoli = "Dokter VCT";
    } else {
      formattedNamaPoli = `Dokter Spesialis ${nama_poli}`;
    }
    if (!poliExist) {
      throw new NotFoundError(`Poli dengan ID ${id_poli} tidak ditemukan`);
    }
    await prisma.poli.update({
      where: { id_poli },
      data: { nama_poli: formattedNamaPoli },
    });
    return formattedNamaPoli;
  }
}

module.exports = PoliService;
