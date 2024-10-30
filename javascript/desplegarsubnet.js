function desplegarSubnets() {
    const networkInput = document.getElementById('network').value;
    const subnetCountInput = document.getElementById('subnets');
    const subnetError = document.getElementById('subnet-error');
    const prefixMatch = networkInput.match(/\/(\d+)$/);

    if (prefixMatch) {
        const prefix = parseInt(prefixMatch[1]);
        const maxSubnets = Math.pow(2, 32 - prefix);
        subnetCountInput.innerHTML = `<option value="">Seleccione una opción</option>`;
        
        for (let i = 1; i <= maxSubnets / 2; i *= 2) {
            subnetCountInput.innerHTML += `<option value="${i}">${i}</option>`;
        }
        subnetError.innerText = "";
    } else {
        subnetCountInput.innerHTML = `<option value="">Seleccione una opción</option>`;
        subnetError.innerText = "Por favor ingresa una dirección de red válida con prefijo.";
    }
}
