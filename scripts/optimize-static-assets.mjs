import sharp from 'sharp';

await sharp('src/assets/images/hero-cuidados.jpg')
  .resize(1200, 630, { fit: 'cover', position: 'center' })
  .jpeg({ quality: 82, progressive: true, mozjpeg: true })
  .toFile('public/images/og-senior-plus.jpg');

console.log('Imagem social otimizada para 1200 × 630.');
