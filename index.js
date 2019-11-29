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
        var makanan = {
            nasi: "175 kalori", lontong: "38 kalori", ketupat: "32 kalori", jagung_rebus: "90,2 kalori", kentang_rebus: "166 kalori",
            ketan_putih: "217 kalori", roti_tawar: "128 kalori", ubi_rebus: "125 kalori", bubur: "44 kalori", mie_instan: "168 kalori", nasi_uduk: "506 kalori",
            bubur_ayam: "165 kalori", mie_goreng: "321 kalori", nasi_goreng: "267 kalori", spaghetti: "642 kalori", asinan: "208", ketoprak: "153 kalori",
            soto_ayam: "101 kalori", rawon: "331 kalori", soto_padang: "127 kalori", hamburger: "257 kalori", mie_bakso: "302 kalori", pizza: "163 kalori",
            sate_kambing: "729 kalori", siomay: "361 kalori", ayam_panggang: "164,3 kalori", empal_daging: "147 kalori", ikan_lele_goreng: "57,5 kalori",
            ikan_patin_goreng: "252,7 kalori", ikan_teri_goreng: "66 kalori", kerang_rebus: "59 kalori", telur_mata_sapi: "40 kalori", telurDadar: "188 kalori",
            tempe_bacem: "157 kalori", tempe_goreng: "118 kalori", sop_sapi: "227 kalori", tahu_goreng: "111 kalori", tahu_sumedang: "113 kalori",
            sayur_asam: "88 kalori", sop_bayam: "78 kalori", gudeg: "132 kalori", sayur_lodeh: "61 kalori", tumis_buncis: "52 kalori", tumis_daun_singkong: "151 kalori",
        }
    }
    document.getElementById("showMakanan").innerHTML = makanan[jumlahKalori]
}