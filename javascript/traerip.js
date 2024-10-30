async function traerIpPublica() {
    try {
        const publicIpResponse = await fetch('https://api.ipify.org?format=json');
        const publicIpData = await publicIpResponse.json();
        document.getElementById('public-ip').innerText = publicIpData.ip;
    } catch (error) {
        document.getElementById('public-ip').innerText = "Error al obtener IP pública.";
    }
}

window.onload = () => {
    traerIpPublica();
};