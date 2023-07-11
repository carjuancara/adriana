const { Op } = require("sequelize");
const { Articles } = require("../db");
const {
  modifyState,
  getModel,
  updateModel,
  findModelByPk,
} = require("../controllers/index");

const searchNames = async (name) => {
  const articles = await Articles.findAll({
    where: {
      description: { [Op.substring]: name },
      active: true,
    },
  });
  return articles;
};

const orderByDescription = async (order) => {
  const orderBy = await Articles.findAll({
    where: {
      active: true,
    },
    order: [
      ["description", order], // La columna "description" se ordena en base al valor de "order"
    ],
  });
  return orderBy;
};

const validateArticle = (
  description,
  size,
  color,
  price_cost,
  cash_price,
  price_list
) => {
  let missingConditions = [];
  if (!description) {
    missingConditions.push("description");
  }
  if (!size) {
    missingConditions.push("size");
  }
  if (!color) {
    missingConditions.push("color");
  }
  if (!price_cost) {
    missingConditions.push("price_cost");
  }
  if (!cash_price) {
    missingConditions.push("cash_price");
  }
  if (!price_list) {
    missingConditions.push("price_list");
  }
  return missingConditions;
};

const postArticle = async (req, res) => {
  try {
    const {
      stock,
      discount,
      article_id,
      provider_id,
      description,
      size,
      color,
      price_cost,
      cash_price,
      price_list,
    } = req.body;
    const missingConditions = validateArticle(
      description,
      size,
      color,
      price_cost,
      cash_price,
      price_list
    );
    if (missingConditions.length > 0) {
      res.status(400).json({
        Error: {
          msg: "missing data",
          missing: missingConditions.join(", "),
        },
      });
    } else {
      const [newArticle, created] = await Articles.findOrCreate({
        where: { description: description },
        defaults: {
          description,
          size,
          color,
          stock,
          price_cost,
          cash_price,
          price_list,
          discount,
          article_id,
          provider_id,
        },
      });
      if (created) {
        res.status(201).json({ msg: `has been successfully created` });
      } else {
        res.status(200).json({ newArticle });
      }
    }
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const getArticle = async (req, res) => {
  try {
    getModel(req, res, Articles);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};
const getArticleByName = async (req, res) => {
  const { name } = req.query;
  {
    const findNames = await searchNames(name);
    if (findNames.length === 0) {
      res.status(200).json({ msg: "no matches found" });
    } else {
      res.status(200).json(findNames);
    }
  }
};
const getArticleByOrder = async (req, res) => {
  try {
    const { order } = req.query;
    {
      const descriptionByOrder = await orderByDescription(order);
      res.status(200).json(descriptionByOrder);
    }
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const changeStateArticle = async (req, res) => {
  try {
    const { id, active } = req.query;
    if (!id) res.status(400).json({ error: "missing data: id" });
    const article = await Articles.findByPk(id);
    if (article.length === 0) {
      res.status(400).json("article does not exist");
    } else {
      modifyState(req, res, article, active);
    }
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const updateArticle = async (req, res) => {
  try {
    updateModel(req, res, Articles);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

module.exports = {
  postArticle,
  getArticle,
  getArticleByName,
  getArticleByOrder,
  changeStateArticle,
  updateArticle,
};
