// Mendeklarasikan variabel yang berbeda tipe data
let spasi = ' '
let namaDepan = 'Firmansyah'
let namaBelakang = 'Zamani'
let umur = '20'
let negara = 'Indonesia'
let kota = 'Brebes'
let bahasa = 'JavaScript'
let pekerjaan = 'Programmer'
// Menggabungkan menggunakan operator penjumlahan
let namaLengkap = namaDepan + spasi + namaBelakang // penggabungan, menggabungkan dua string menjadi satu.
console.log(namaLengkap)

let infoPribadiSatu = namaLengkap + '. Saya berumur ' + umur + '. Saya tinggal di ' + negara // ES5
console.log(infoPribadiSatu)
// Penggabungan: Template Literals(Template Strings)
let infoPribadiDua = `Saya ${namaLengkap}. Saya berumur ${umur}. Saya tinggal di ${negara}.` //ES6 - String interpolation method
let infoPribadiTiga = `Saya ${namaLengkap}. Saya tinggal di ${kota}, ${negara}. Saya seorang ${pekerjaan}. Saya mengajar ${bahasa}.`
console.log(infoPribadiDua)
console.log(infoPribadiTiga)
