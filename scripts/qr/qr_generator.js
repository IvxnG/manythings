function generarCodigoQR() {
    let contenido = document.getElementById("contenidoQR").value;
    if (contenido !== "") {
        let tamanio = document.getElementById("tamanioQR").value;
        let color = document.getElementById("colorQR").value;
        let nivelError = document.getElementById("nivelErrorQR").value;

        let codigoQRElemento = document.getElementById("codigoQR");
        let btnDescargarQR = document.getElementById("btnDescargarQR");
        if (codigoQRElemento) {
            codigoQRElemento.innerHTML="";
            btnDescargarQR.classList.remove("hidden")
            let qrCode = new QRCode(codigoQRElemento, {
                text: contenido,
                width: parseInt(tamanio),
                height: parseInt(tamanio),
                colorDark: color,
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel[nivelError]
            });

            codigoQRElemento.classList.add("show");

            document.getElementById("btnDescargarQR").disabled = false;
        } else {
            console.error("El elemento para el código QR no existe en el DOM.");
        }
    } else {
        alert("Por favor, ingrese contenido para generar el código QR.");
    }
}

function descargarCodigoQR() {
    let codigoQR = document.getElementById("codigoQR");
    if (codigoQR) {
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');
        canvas.width = codigoQR.offsetWidth;
        canvas.height = codigoQR.offsetHeight;
        context.drawImage(codigoQR.firstChild, 0, 0);
        let imagenPNG = canvas.toDataURL("image/png");
        let enlaceDescarga = document.createElement('a');
        enlaceDescarga.href = imagenPNG;
        enlaceDescarga.download = "codigoQR.png";
        enlaceDescarga.click();
    } else {
        console.error("El elemento para el código QR no existe en el DOM.");
    }
}

document.querySelectorAll('.botones-compartir a').forEach(boton => {
    boton.addEventListener('click', function(evento) {
        evento.preventDefault();
        let enlaceCompartir;
        if (this.classList.contains('boton-twitter')) {
            enlaceCompartir = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href);
        } else if (this.classList.contains('boton-facebook')) {
            enlaceCompartir = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href);
        } else if (this.classList.contains('boton-whatsapp')) {
            enlaceCompartir = 'whatsapp://send?text=' + encodeURIComponent(window.location.href);
        }
        window.open(enlaceCompartir, '_blank');
    });
});
