const express = require('express');
const { createCanvas } = require('canvas');

const app = express();
const port = 3000;


app.get('/', (req, res) => {
  const width = 500;
  const height = 200;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // 背景を白で塗りつぶす
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  // 現在時刻を取得して描画
  const now = new Date().toLocaleString();
  ctx.fillStyle = '#000000';
  ctx.font = '30px sans-serif';
  ctx.fillText(now, 50, 100);

  // レスポンスヘッダーを設定し、PNG画像として返す
  res.set('Content-Type', 'image/png');
  canvas.createPNGStream().pipe(res);
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});