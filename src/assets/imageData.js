const imageData = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  title: `Beautiful Image ${index + 1}`,
  image: `https://picsum.photos/seed/${index + 1}/800/600`,
}));

export default imageData;