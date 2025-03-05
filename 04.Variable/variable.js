console.log("Oke")

// 01.Variable dengan let 
let nama = "Ucup Marucup";
console.log(nama)

//ubah variable nama, tidak perlu pakai let lagi.
nama = "Otong Surotong"
console.log(nama)

// 02.Variable dengan Var (global&local)
var namaDepan = "Kucup"
console.log(namaDepan)
namaDepan = "Kembang"
console.log(namaDepan)

// Kelakuan dari Let
let namaBelakang = "Surucup"
{
    let namaBelakang = "Surotong"
    console.log(namaBelakang)
}
console.log(namaBelakang)

// Kelakuan dari Var
var namaTengah = "Susilo Bambang Yudhoyono"
{
    var namaTengah = "Joko Widodo"
    console.log(namaTengah)
}
console.log(namaTengah)

// kasus khusus tanpa keyword akan jadi var 
gorengan ="Bala-bala"
{
    gorengan = "tempe";

}
console.log(gorengan)

const TTL = "10 Juni 1989";
console.log(TTL)
// TTL = "11 Januari 1990" tidak bisa dieksekusi karena konstans
// console.log(TTL)