const cardController = require("../controllers/cardController");
const route = require("express").Router();

// getAllTemplates
route.get("/templates", cardController.getAllTemplates);

// getTemplateById
route.get("/template/:id", cardController.getTemplateById);

// addTemplate
route.post("/add", cardController.addTemplate);

// saveCard, [image]
route.post("/save", cardController.saveCard);

//  shareCard , sender_email, [recvs-email]
route.post("/share", cardController.shareCard);

module.exports = route;