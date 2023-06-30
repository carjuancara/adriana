const express = require("express");
const ArticlesRouter = express.Router();
const {
  postArticle,
  getArticleByName,
  getSortArticles,
  getArticle,
  deleteArticle,
  updateArticle,
} = require("../handlers/handlersArticles")


ArticlesRouter.post("/", postArticle);
ArticlesRouter.get("/:name", getArticleByName);
ArticlesRouter.get("/:orden", getSortArticles);
ArticlesRouter.get("/:id", getArticle);
ArticlesRouter.delete("/:id", deleteArticle);
ArticlesRouter.put("/:id", updateArticle);
module.exports = ArticlesRouter;
