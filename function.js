/*
function sapa() {
    console.log("MUBAL");
}

sapa();
*/

/*
function sapa(nama) {
    console.log(nama);
}
sapa("Halo Mubal");
sapa("Halo Andi");
*/

/*
function tambah(a,b) {
    const hasil = a + b;
    console.log(hasil);
}

tambah(15, 15);
*/

/*
function luasPersegi(sisi) {
    let luas = sisi * sisi;
    return luas;
}

console.log(luasPersegi(5));
*/

/*
function kali(a,b) {
    return a * b;
}

console.log(kali(5,5));
*/

function proses(nama, callback) {
    console.log(`Halo ${nama}`);

    callback();

}
    proses('MUBAL',() => {
        console.log("Data sedang diperoses");
    });