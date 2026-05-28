const QRCode = require('qrcode');

const url = 'https://zeinadineabdfwork.github.io/ZEZA-TECH/';

const opcoes = {
  errorCorrectionLevel: 'H', // Nível Alto: permite cobrir até 30% do código
  type: 'image/png',
  quality: 0.92,
  margin: 1,
  color: {
    dark: '#000000',  // Cor do QR Code (Preto)
    light: '#FFFFFF'  // Fundo (Branco)
  }
};

QRCode.toFile('qr-zeza.png', url, opcoes, (err) => {
  if (err) throw err;
  console.log('✅ QR Code base gerado com sucesso em "qr-zeza.png"!');
  console.log('Agora podes abrir a imagem no teu editor e colocar a logo do ZEZA no centro.');
});