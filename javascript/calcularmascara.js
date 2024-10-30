function calcularMascara(prefix) {
    const mask = (0xFFFFFFFF >>> (32 - prefix)) << (32 - prefix);
    return [
        (mask >>> 24) & 255,
        (mask >>> 16) & 255,
        (mask >>> 8) & 255,
        mask & 255
    ].join('.');
}