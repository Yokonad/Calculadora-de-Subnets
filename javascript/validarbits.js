function validarBits(event) {
    const input = event.target;
    const bits = input.value.replace(/[^01]/g, '');
    input.value = bits;
    document.getElementById('bit-counter').innerText = `Bits ingresados: ${bits.length}`;
}