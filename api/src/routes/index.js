const Express = require("express");
const router = Express.Router();
const salesRouter = require("./SalesRouter");
const articlesRouter = require("./ArticleRouter");
const usersRouter = require("./UsersRouter");
const brandRouter = require("./BrandRouter");
const providerRouter = require("./ProviderRouter");
const reasonChangeRouter = require("./ReasonChangeRouter");
const taxRouter = require("./TaxConditionsRouter");
const paymentRouter = require("./PaymentRouter");
const companyRouter = require("./CompanyRouter");

//server.use(Express.json())
router.use("/sales", salesRouter);
router.use("/articles", articlesRouter);
router.use("/users", usersRouter);
router.use("/brand", brandRouter);
router.use("/provider", providerRouter);
router.use("/reasonchange", reasonChangeRouter);
router.use("/tax", taxRouter);
router.use("/payment", paymentRouter);
router.use("/company", companyRouter);

module.exports = router