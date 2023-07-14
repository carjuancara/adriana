const { Op } = require('sequelize')
const { Sales, SaleDetails, Articles } = require("../db");
const postSale = async (req, res) => {
  try {
    const { UserId, total, discount_total, PaymentId, sales_date, productDetail } =
      req.body;

    if (
      !UserId ||
      !total ||
      !discount_total ||
      !PaymentId ||
      !sales_date ||
      !productDetail
    ) res.status(400).json({ Error: "missing data" });
    const newSale = await Sales.create({
      UserId,
      total,
      discount_total,
      PaymentId,
      sales_date,
    });

    
    //console.log('nuevaVenta.proto',newSale.__proto__)
    const newSaleDetail = await SaleDetails.bulkCreate(productDetail)
    await newSale.addSaleDetails(newSaleDetail);
    const saleDetailsId = productDetail.map(detail => detail.ArticleId,)
    const relationArticles = await Articles.findAll({
      where: {
        id: {
          [Op.in]: saleDetailsId
        }
      }
    })
    const instanciasJSON = relationArticles.map(instancia => instancia.toJSON());
    
    res.status(201).json({ msg: "the Sales changes has been addeds" });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};
const getSale = async (req, res) => {
  try {
    const { SalesId } = req.query
    if (!SalesId) res.status(400).json({ error: error.message })
    const sale = await Sales.findByPk(SalesId, {
      include: [
        {
          model: SaleDetails,
          include: [Articles]
        }
      ]
    });
    res.status(200).json(sale)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};



module.exports = {
  postSale,
  getSale,
};
