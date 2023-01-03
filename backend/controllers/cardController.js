const Card = require("../models/cardsModel");
const fs = require("fs");
const path = require("path");
const cardController = {};

cardController.addTemplate = async (req, res) => {
  const { Image } = req.files;

  console.log(Image);

  if (!Image) {
    return res.json({
      success: false,
      data: null,
      error: { msg: "Please enter all fields!!" },
    });
  }

  try {
    Image.mv(__dirname + "/templates/" + Image.name);
    res.json({
      success: true,
      data: { msg: "done!!" },
      error: null,
    });
  } catch (error) {
    return res.json({
      success: false,
      data: null,
      error: error.message,
    });
  }
};

cardController.getAllTemplates = async (req, res) => {
  try {
    const directoryPath = path.join(__dirname, "templates");
    let templates = [];

    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        return res.json({
          success: false,
          data: null,
          error: {
            msg: "Unable to scan directory: " + err,
          },
        });
      }

      files.forEach(function (file) {
        templates.push(file);
      });

      res.json({
        success: true,
        data: templates,
        error: null,
      });
    });
  } catch (error) {
    return res.json({
      success: false,
      data: null,
      error: error.message,
    });
  }
};

cardController.getTemplateById = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.json({
      success: false,
      data: null,
      error: { msg: "Please enter all fields!!" },
    });
  }

  try {
    res.sendFile(__dirname + `/templates/${id}.png`);
  } catch (error) {
    return res.json({
      success: false,
      data: null,
      error: error.message,
    });
  }
};

module.exports = cardController;
