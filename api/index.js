require('dotenv').config()
const server = require('./src/app.js');
const { conn, Roles, Company, Articles, Payments, Brands } = require('./src/db.js');
const { PORT } = process.env;

const roles = [
  { roles: 'admin' },
  { roles: 'moderator' },
  { roles: 'users' }
]
const company = {
  id: 1,
  company_name: 'Adriana Indumentaria & accesorios',
  cuit: '27-27962307-0',
  direction: 'san martin 80',
  city: 'Lules',
  province: 'Tucumán',
  country: 'Argentina',
  whatsapp: '381462555',
  iibb: '27-27962307-7'
}
const articles = [
  {
    description: "articulo descripcion 1",
    image: "http://www.localhost.com/image1",
    size: "M",
    color: "Blanco",
    price_cost: 123.33,
    cash_price: 235.22,
    price_list: 555.22,
    discount: 22.33,
    BrandId: 2,
    ProviderId: 1
  },
  {
    description: "articulo descripcion 2",
    image: "http://www.localhost.com/image2",
    size: "M",
    color: "Blanco",
    price_cost: 123.33,
    cash_price: 235.22,
    price_list: 555.22,
    discount: 22.33,
    BrandId: 2,
    ProviderId: 1
  },
  {
    description: "articulo descripcion 3",
    image: "http://www.localhost.com/image3",
    size: "M",
    color: "Blanco",
    price_cost: 123.33,
    cash_price: 235.22,
    price_list: 555.22,
    discount: 22.33,
    BrandId: 2,
    ProviderId: 1
  },
  {
    description: "articulo descripcion 4",
    image: "http://www.localhost.com/image4",
    size: "M",
    color: "Blanco",
    price_cost: 123.33,
    cash_price: 235.22,
    price_list: 555.22,
    discount: 22.33,
    BrandId: 2,
    ProviderId: 1
  },
  {
    description: "articulo descripcion 5",
    image: "http://www.localhost.com/image5",
    size: "M",
    color: "Blanco",
    price_cost: 123.33,
    cash_price: 235.22,
    price_list: 555.22,
    discount: 22.33,
    BrandId: 2,
    ProviderId: 1
  }
]

const payments = [{
  description: "Tarjeta Debito"
},
{
  description: "Tarjeta Credito"
},
{
  description: "MercadoLibre"
},
{
  description: "PayPal"
},
{
  description: "Efectivo"
},
{
  description: "PagoFacil"
},
{
  description: "RapiPago"
}
]

const brands = [
  {
    company_name: "Adidas"
  },
  {
    company_name: "Topper"
  },
  {
    company_name: "Arrow"
  },
  {
    company_name: "Narrow"
  },
  {
    company_name: "Merrel"
  }
]
// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  await Company.create(company)
  await Roles.bulkCreate(roles);
  await Articles.bulkCreate(articles)
  await Payments.bulkCreate(payments)
  await Brands.bulkCreate(brands)

  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
