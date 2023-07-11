const express = require("express");
const ArticlesRouter = express.Router();
const {
  postArticle,
  getArticle,
  getArticleByName,
  getArticleByOrder,
  changeStateArticle,
  updateArticle,
} = require("../handlers/handlersArticles")


ArticlesRouter.post("/", postArticle);
ArticlesRouter.get("/", getArticle);
ArticlesRouter.get("/name", getArticleByName)
ArticlesRouter.get("/order",getArticleByOrder)
ArticlesRouter.put("/update", updateArticle);
ArticlesRouter.put('/state',changeStateArticle)
module.exports = ArticlesRouter;
