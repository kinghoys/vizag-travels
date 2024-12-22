const fs = require('fs');
const path = require('path');
const https = require('https');

const IMAGES_BASE_PATH = path.join(__dirname, '../frontend/public/images/packages');

// Create directories if they don't exist
const createDirectories = () => {
  const directories = [
    'vizag-city-tour',
    'lambasingi',
    'araku',
    'araku-lambasingi',
    'vanjangi',
    'maredumilli',
    'jagdalpur'
  ];

  directories.forEach(dir => {
    const dirPath = path.join(IMAGES_BASE_PATH, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  });
};

// Image URLs for each package
const imageUrls = {
  'vizag-city-tour': {
    main: 'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68',  // RK Beach
    thumbnail: 'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68',
    'rk-beach': 'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68',
    'submarine-museum': 'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68',
    'kailasagiri': 'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68'
  },
  'lambasingi': {
    main: 'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68',
    thumbnail: 'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68',
    viewpoint: 'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68',
    'strawberry-farms': 'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68',
    sunrise: 'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68'
  },
  // Add more package image URLs here
};

// Download image from URL
const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filepath);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(`Failed to download image: ${response.statusCode}`);
      }
    }).on('error', (err) => {
      reject(err.message);
    });
  });
};

// Main function to download all images
const downloadAllImages = async () => {
  try {
    createDirectories();

    for (const [packageName, images] of Object.entries(imageUrls)) {
      console.log(`Downloading images for ${packageName}...`);
      
      for (const [imageName, url] of Object.entries(images)) {
        const filepath = path.join(IMAGES_BASE_PATH, packageName, `${imageName}.jpg`);
        await downloadImage(url, filepath);
        console.log(`Downloaded ${imageName}.jpg`);
      }
    }

    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
};

// Run the script
downloadAllImages();
