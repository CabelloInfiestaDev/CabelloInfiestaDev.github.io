function encriptadorTexto() {
    const inputText = document.getElementById('inputText').value;
    const resultado = document.getElementById('resultado');
    const imagen = document.querySelector('.imagen'); // Seleccionamos la imagen

    // Transformamos todo el texto a minúsculas y aplicamos los reemplazos
    const encriptar = inputText
        .toLowerCase()
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/e/g, 'enter')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    resultado.textContent = encriptar;

    // Evaluamos la longitud del texto encriptado
    if (encriptar.length > 1) {
        // Si tiene más de una letra, ocultamos la imagen
        imagen.style.display = 'none';
    } else {
        // Si tiene una letra o menos, mostramos la imagen
        imagen.style.display = 'block';
    }
}

function descencriptarTexto() {
    const inputText = document.getElementById('inputText').value;
    const resultado = document.getElementById('resultado');

    const textoEnMinusculas = inputText.toLowerCase();
   
    const descencriptar = textoEnMinusculas
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/enter/g, 'e')
    .replace(/ai/g, 'a')
    .replace(/ufat/g, 'u');
    resultado.textContent = descencriptar;
}
function copiarTexto() {
    const resultado = document.getElementById('resultado');
    resultado.select(); // Selecciona el texto
    document.execCommand('copy'); // Copia al portapapeles
    alert('Texto copiado');
}
