// =========================================
// SCRIPT.JS
// WEBSITE XI TKJ 1
// =========================================


// Menunggu halaman selesai dimuat

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "Website XI TKJ 1 berhasil dijalankan."
        );

    }
);



// =========================================
// EFEK NAVBAR SAAT SCROLL
// =========================================

window.addEventListener(
    "scroll",
    function () {

        const navbar =
            document.querySelector(".navbar");


        if (window.scrollY > 50) {

            navbar.style.boxShadow =
                "0 5px 20px rgba(0, 0, 0, 0.2)";

        } else {

            navbar.style.boxShadow =
                "none";

        }

    }
);



// =========================================
// NAVBAR AKTIF SAAT DIKLIK
// =========================================

const menuLinks =
    document.querySelectorAll(".menu a");


menuLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                menuLinks.forEach(
                    function (item) {

                        item.classList.remove("active");

                    }
                );


                this.classList.add("active");

            }
        );

    }
);