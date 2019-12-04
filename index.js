function buttonForLogin() {
    var userName = document.getElementById('name').value
    if (userName == "") {
        alert("Form nama belum diisi")
    } else {
        document.getElementById('userName').innerHTML = "Selamat datang " + userName
        document.getElementById('formLogin').style.display = "none";
        document.getElementById('bmiOrCalori').style.display = "block"; 
    } 
}

function buttonForBmi() {
    var beratBadan = document.getElementById("beratBadan").value
    var tinggiBadan = document.getElementById("tinggiBadan").value
    var hasil = beratBadan / (tinggiBadan * tinggiBadan)
    var showHasil = document.getElementById("showHasil")

    if (beratBadan == "") {
        alert("Berat badan belum diisi")
    } else if (tinggiBadan == "") {
        alert("Tinggi badan belum diisi")
    } else {
        if (hasil >= 17.00 && hasil <= 18.50) {
            showHasil.innerHTML = "Anda kekurangan berat badan"
        } else if (hasil >= 16.00 && hasil <= 16.99) {
            showHasil.innerHTML = "Anda kekurangan berat badan, disarankan makan makanan yang bergizi"
        } else if (hasil <= 15.99) {
            showHasil.innerHTML = "Anda kekurangan berat badan, disarankan makan makanan yang bergizi dan jangan begadang"
        }

        if (hasil >= 18.5 && hasil <= 24.9) {
            showHasil.innerHTML = "Berat badan anda normal"
        }   

        if (hasil >= 25.00 && hasil <= 30.00) {
            showHasil.innerHTML = "Anda kelebihan berat badan"
        } else if (hasil >= 30.00 && hasil <= 34.99) {
            showHasil.innerHTML = "Anda obesitas, disarankan mengurangi makanan yang mengandung gula berlebih"
        } else if (hasil >= 35.00) {
            showHasil.innerHTML = "Anda obesitas, disarankan mengurangi makanan yang mengandung gula berlebih dan harus mulai berolahraga"
        }
    }
}

function buttonForCalori() {
    var jumlahKalori = document.getElementById("makananSaya").value

    var result = jumlahKalori.replace(/[^\w\s]/g, "")
    result = result.replace(/\s+/g," ")
    jumlahKalori = result.toLowerCase().split(' ').join('_')

    if (jumlahKalori == "") {
        alert ("Makanan belum diisi")
    } else {
        var makananAtauBuah = {
            nasi: 175, lontong: 38, ketupat: 32, jagung_rebus: 90.2, kentang_rebus: 166, ketan_putih: 217, roti_tawar: 128, ubi_rebus: 125, bubur: 44, mie_instan: 168, 
            nasi_uduk: 506, bubur_ayam: 165, mie_goreng: 321, nasi_goreng: 267, spaghetti: 642, asinan: 208, ketoprak: 153, soto_ayam: 101, rawon: 331, soto_padang: 127, 
            hamburger: 257, mie_bakso: 302, pizza: 163, sate_kambing: 729, siomay: 361, ayam_panggang: 164.3, empal_daging: 147, ikan_lele_goreng: 57.5,ikan_patin_goreng: 252.7, 
            ikan_teri_goreng: 66, kerang_rebus: 59, telur_mata_sapi: 40, telur_dadar: 188, tempe_bacem: 157, tempe_goreng: 118, sop_sapi: 227, tahu_goreng: 111, tahu_sumedang: 113,
            sayur_asam: 88, sop_bayam: 78, gudeg: 132, sayur_lodeh: 61, tumis_buncis: 52, tumis_daun_singkong: 151, singkong_rebus: 146, talas_rebus: 98, bihun_goreng: 296,
            bubur_sumsum: 178, kentang_goreng: 211, soun_goreng: 263, tape_singkong: 260, crakers: 229, makaroni: 91, toge_goreng: 243, gado_gado: 295, pempek: 384, tongseng: 331,
            kerupuk_udang: 72, soto_betawi: 135, soto_makasar: 525, ikan_mas_pepes: 143.5, sambal_goreng_tempe: 116, telur_asin_rebus: 138, telur_ayam_rebus: 97, ati_ayam_goreng: 98,
            ayam_pop: 265, bakso_daging_sapi: 260, ikan_bandeng_goreng: 180.7, ikan_bawal_goreng: 113.3, tahu_bacem: 157, tahu_isi: 124, apel: 92, apel_merah: 82, belimbing: 80,
            duku: 81, jambu_air: 35.4, jambu_biji: 157, jeruk_medan: 46, jeruk_pontianak: 67, nanas: 104, pepaya: 46, salak: 63.6, semangka: 48, alpukat: 85, anggur: 60, lengkeng: 79,
            melon: 46, mangga_harum_manis: 90, pir_hijau: 105, pisang_ambon: 74.2, pisang_raja: 126, sirsak: 55, durian_montong: 134, rambutan: 69, sawo: 92,
        }
    }
    document.getElementById("showMakanan").innerHTML = makananAtauBuah[jumlahKalori] + " kalori"
}    