const { Sales, SaleDetails, Articles } = require("../db");
const postSale = async (req, res) => {
  try {
    const { user_id, total, discount_total, payment_method_id, sales_date, productDetail } =
      req.body;

    if (
      !user_id ||
      !total ||
      !discount_total ||
      !payment_method_id ||
      !sales_date ||
      !productDetail
    ) res.status(400).json({ Error: "missing data" });
    const newSale = await Sales.create({
      user_id,
      total,
      discount_total,
      payment_method_id,
      sales_date,
    });
    const newSaleDetail = await SaleDetails.bulkCreate(productDetail)
    await newSale.addSaleDetails(newSaleDetail);
    const saleDetailsId = productDetail.map( detail => detail.article_id,)
    console.log('saleDetailId: ',saleDetailsId)
    //console.log('newSaleDetail: ',newSaleDetail.toJSON())
    await  Articles.addSaleDetail(saleDetailsId)
    res.status(201).json({ msg: "the Sales changes has been addeds" });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};
const getSale = async (req, res) => { };
const deleteSale = async (req, res) => { };
const updateSale = async (req, res) => { };

module.exports = {
  postSale,
  getSale,
  deleteSale,
  updateSale,
};
