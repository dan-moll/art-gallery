const fs = require('fs');
const path = require('path');

const artworksDir = path.join(__dirname, 'public', 'artworks');
const files = fs.readdirSync(artworksDir)
  .filter(f => f.match(/\.(jpg|jpeg|png)$/i))
  .sort();

const artworks = files.map((filename, index) => {
  const id = (index + 1).toString();
  const paddedNum = String(index + 1).padStart(3, '0');

  return {
    id,
    filename,
    artistName: "Helmut Relinger",
    title: `Meditation Series No. ${paddedNum}`,
    year: "2024",
    medium: "Mixed Media",
    dimensions: "130 × 130 cm",
    width: 2520,
    height: 2520
  };
});

const jsonContent = JSON.stringify(artworks, null, 2);
fs.writeFileSync(path.join(__dirname, 'data', 'artworks.json'), jsonContent);

console.log(`Generated metadata for ${artworks.length} artworks`);
