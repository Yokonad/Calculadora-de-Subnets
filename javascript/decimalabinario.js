function convertirDecimal() {
    const decimalInput = document.getElementById('decimal-input').value;
    const binary = parseInt(decimalInput).toString(2);
    const hexadecimal = parseInt(decimalInput).toString(16).toUpperCase();

    const decimalConversionBody = document.getElementById('decimal-a-binario');
    decimalConversionBody.innerHTML = `<tr>
        <td>${binary}</td>
        <td>${hexadecimal}</td>
    </tr>`;
}