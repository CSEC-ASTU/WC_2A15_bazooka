const cardController = require("../controllers/cardController");
const route = require("express").Router();

// getAllTemplates
route.get("/templates", cardController.getAllTemplates);

// getTemplateById
route.get("/template/:id", cardController.getTemplateById);

// addTemplate
route.post("/add", cardController.addTemplate);

// saveCard, [image]
//  shareCard , sender_email, [recvs-email]

module.exports = route;