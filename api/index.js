require('dotenv').config()
const server = require('./src/app.js');
const { conn, Roles, Company } = require('./src/db.js');
const { PORT } = process.env;

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
   await Roles.bulkCreate([
    { roles: 'admin' },
    { roles: 'moderator' },
    { roles: 'users' }
  ]); 
  await Company.create({
    id: 1,
    company_name: 'Adriana Indumentaria & accesorios',
    cuit: '27-27962307-0',
    direction: 'san martin 80',
    city: 'Lules',
    province: 'Tucumán',
    country: 'Argentina',
    whatsapp: '381462555',
    iibb: '27-27962307-7'
  }) 

  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
