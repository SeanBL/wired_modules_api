const express = require('express');
const app = express();
const sequelize = require('./config/connection');
const port = process.env.PORT || 3000;
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const modulesRoutes = require('./controllers/api/modulesRoutes');
const categoriesRoutes = require('./controllers/api/categoriesRoutes');
const subCategoriesRoutes = require('./controllers/api/subCategoriesRoutes');
const moduleSubCategoryRoutes = require('./controllers/api/moduleSubCategoryRoutes');
const packagesRoutes = require('./controllers/api/packagesRoutes');
const alertsRoutes = require('./controllers/api/alertsRoutes');

app.use('/modules', modulesRoutes);
app.use('/categories', categoriesRoutes);
app.use('/subCategories', subCategoriesRoutes);
app.use('/mts', moduleSubCategoryRoutes);
app.use('/stm', moduleSubCategoryRoutes);
app.use('/packages', packagesRoutes);
app.use('/alerts', alertsRoutes);

sequelize.sync({ force: true })
  .then(async() => {
    console.log('Database synced');
    app.listen(port, () => console.log('Now listening on: http://localhost:' + port)); 
  })
  .catch((err) => {
    console.error('Unable to sync database: ', err);
  });