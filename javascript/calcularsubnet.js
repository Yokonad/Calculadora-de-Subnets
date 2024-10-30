function calcularSubnets() {
    const networkInput = document.getElementById('network').value;
    const subnetCountInput = document.getElementById('subnets');
    const subnetCount = parseInt(subnetCountInput.value);
    const resultBody = document.getElementById('resultados');
    resultBody.innerHTML = "";

    if (!networkInput || !subnetCount) {
        resultBody.innerHTML = "<tr><td colspan='4' class='text-danger'>Por favor ingresa una dirección de red válida y el número de subredes.</td></tr>";
        return;
    }

    const [networkAddress, prefix] = networkInput.split('/');
    const prefixInt = parseInt(prefix);

    const newPrefix = prefixInt + Math.ceil(Math.log2(subnetCount));
    const subnetSize = Math.pow(2, 32 - newPrefix);

    const subnetMask = calcularMascara(newPrefix);

    let currentNetwork = ipaEntero(networkAddress);
    for (let i = 0; i < subnetCount; i++) {
        const network = enteroaIp(currentNetwork);
        const broadcast = enteroaIp(currentNetwork + subnetSize - 1);
        resultBody.innerHTML += `<tr>
            <td>Subred ${i + 1}</td>
            <td>${network}/${newPrefix}</td>
            <td>${broadcast}</td>
            <td>${subnetMask}</td>
        </tr>`;
        currentNetwork += subnetSize;
    }
    
    subnetCountInput.value = subnetCount;
}