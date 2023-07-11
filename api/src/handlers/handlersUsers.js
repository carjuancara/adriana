const { modifyState, getModel, updateModel } = require("../controllers");
const { Users } = require("../db")

const validateUser = (name, userName, password, cuit, email) => {
  let missingConditions = [];
  if (!name) {
    missingConditions.push("name");
  }
  if (!userName) {
    missingConditions.push("userName");
  }
  if (!password) {
    missingConditions.push("password");
  }
  if (!cuit) {
    missingConditions.push("cuit");
  }
  if (!email) {
    missingConditions.push("email");
  }
  return missingConditions;
};

const postUser = async (req, res) => {
  try {
    const {
      name,
      lastname,
      birthdate,
      direction,
      city,
      province,
      country,
      whatsapp,
      dni,
      userName,
      password,
      rol_id,
      tex_conditions_id,
      balance,
      cuit,
      email,
    } = req.body;
    const missingConditions = validateUser(
      name,
      lastname,
      birthdate,
      direction,
      city,
      province,
      country,
      whatsapp,
      dni,
      userName,
      password,
      rol_id,
      tex_conditions_id,
      balance,
      cuit,
      email
    );
    if (missingConditions.length > 0) {
      res.status(400).json({
        Error: {
          msg: "missing data",
          missing: missingConditions.join(", "),
        },
      });
    } else {
      const [newUser, created] = await Users.findOrCreate({
        where: { userName: userName },
        defaults: {
          name,
          lastname,
          birthdate,
          direction,
          city,
          province,
          country,
          whatsapp,
          dni,
          password,
          rol_id,
          tex_conditions_id,
          balance,
          cuit,
          email,
        },
      });
      if (created) {
        res.status(201).json({ msg: `user has been successfully created` });
      } else {
        res.status(200).json({ newUser });
      }
    }
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};
const getUser = async (req, res) => {
  try {
    getModel(req, res, Users);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};
const changeStateUser = async (req, res) => {
  try {
    const { id, active } = req.query;
    if (!id) res.status(400).json({ error: "missing data: id" });
    const user = await Users.findByPk(id);
    if (user.length === 0) {
      res.status(400).json("user does not exist");
    } else {
      modifyState(req, res, user, active);
    }
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};
const updateUser = async (req, res) => {
  try {
    updateModel(req, res, Users);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

module.exports = {
  postUser,
  getUser,
  changeStateUser,
  updateUser,
};
