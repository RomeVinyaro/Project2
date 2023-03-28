const sequelize = require('../config/connection');
//Example of how to require seed data:
//const seedGallery = require('./galleryData');


const seedAll = async () => {
  await sequelize.sync({ force: true });
// Example of how to await seed data:
  //await seedGallery();

  process.exit(0);
};

seedAll();