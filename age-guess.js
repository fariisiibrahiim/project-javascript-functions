const cekUmur = function(umur) {
  if (umur >= 21) {
    console.log("Cukup umur, silahkan");
  } else if (umur < 21 && umur >= 0) {
    console.log("Belum cukup umur, coba lagi tahun depan");
  } else if (umur === 0) {
    console.log("Umur tidak boleh nol");
  } else {
    console.log("Umur anda tidak jelas");
  }
};
const cekClient = prompt("Berapa umur anda?");

console.log("cek umur client web");
cekUmur(`${cekClient}`);
console.log("Cek 10 tahun");
cekUmur(10); //10 tahun
console.log("Cek 21 tahun");
cekUmur(21); //21 tahun
console.log("Cek -2 tahun");
cekUmur(-2); //-2 tahun
console.log("Cek 45 tahun");
cekUmur(45); //45 tahun
