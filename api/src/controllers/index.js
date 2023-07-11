const modifyState = async (req, res, model, state) => {
  const modelName = model.constructor.name;
  model.active = state;
  await model.save();
  if (model.active === true) {
    res.status(200).json({ msg: `${modelName} successfully actived` });
  } else {
    res.status(200).json({ msg: `${modelName} successfully deleted` });
  }
};

const getModel = async (req, res, model) => {
  if (!req.query.id) {
    const allModels = await model.findAll({ where: { active: true } });
    res.status(200).json(allModels);
  } else {
    //const oneModel = await model.findByPk(parseInt(id));
    const oneModel = await findModelByPk(model, req.query.id);
    res.status(200).json(oneModel);
  }
};

const updateModel = async (req, res, model) => {
  const modelName = model.constructor.name;
  findModelByPk(model, req.body.id);
  if (!model) res.status(400).json(`${modelName} does not exist`);
  const active = await model.update(req.body, {
    where: {
      id: req.body.id,
      active: true,
    },
  });
  if (!active) res.status(200).json(`${modelName} does not exist`);
  res.status(200).json({ msg: `${modelName} successfully updated` });
};

const findModelByPk = async (model, id) => {
  const oneModel = await model.findOne({
    where: { id: id, active: true },
  });
  if (oneModel === null) {
    return [];
  } else {
    return oneModel;
  }
};

const newModel = async (req, res, model, model2) => {
  try {
    let condition = "";
    console.log(model.constructor.name);
    switch (model.constructor.name) {
      case "Users":
        condition = { userName: req.body.userName };
        break;
      case "Roles":
        condition = { roles: req.body.roles };
        break;
      case "Brands":
      case "Providers":
        condition = { company_name: req.body.company_name };
        break;
      default:
        condition = { description: req.body.description };
        break;
    }

    /* if (!company_name)
      res.status(400).json({ Error: "missing data: company_name" }); */
    const [newBrand, created] = await model2.findOrCreate({
      where: condition,
      defaults: req.body,
    });
    if (!created)
      res.status(409).json({ msg: `${model.constructor.name} already exists` });
    res
      .status(201)
      .json({ msg: `the ${model.constructor.name} has been added` });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

module.exports = {
  newModel,
  modifyState,
  getModel,
  findModelByPk,
  updateModel,
};
