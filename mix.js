const showNamaUmur = (nama = "Unknown", umur = 0) => {
  const namaUmur = `${nama} berumur ${umur} tahun`;

  return namaUmur; //biar function bisa mengeluarkan value
};

const alpa = showNamaUmur("alpa", 17);
const beti = showNamaUmur("Beti", 45);
const gama = showNamaUmur("beti", 30);

console.log(alpa);
console.log(beti);
console.log(gama);
