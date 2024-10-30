function convertirBinario() {
    const binaryInput = document.getElementById('binary-input').value;
    const decimal = parseInt(binaryInput, 2);
    const hexadecimal = decimal.toString(16).toUpperCase();

    const conversionBody = document.getElementById('binario-a-decimal');
    conversionBody.innerHTML = `<tr>
        <td>${decimal}</td>
        <td>${hexadecimal}</td>
    </tr>`;
}
