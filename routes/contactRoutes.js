const express = require('express');
const router = express.Router();
const { getContacts,
    CreateContact,
    getcontact,
    updateContact,
    deletecontact
    }=require("../controllers/contactControllers");

router.route("/").get(getContacts);


router.route("/").post(CreateContact);

router.route("/:id").get(getcontact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deletecontact);

module.exports = router;