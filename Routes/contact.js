import express from "express";
import {
  deleteContactById,
  getAllContact,
  getContactById,
  newContact,
  updateContactById,
  getContactByUserId
} from "../Controllers/contact.js";
import { isAuthenticated } from "../Middleware/Auth.js";
const router = express.Router();

// new Contact
// @api dsc ;- Creating Contact
// @api method:- post
// @api endpoint:- /api/contact/new
router.post("/new",isAuthenticated, newContact);

// get Contact
// @api dsc ;- Get All Contact
// @api method:- get
// @api endpoint:- /api/contact/
router.get("/", getAllContact);

// get Contact by id
// @api dsc ;- Get specific Contact
// @api method:- get
// @api endpoint:- /api/contact/:id
router.get("/:id", getContactById);

// Update Contact by id
// @api dsc ;- Update specific Contact
// @api method:- put
// @api endpoint:- /api/contact/:id
router.put("/:id",isAuthenticated, updateContactById);

// Delete Contact by id
// @api dsc ;- delete specific Contact
// @api method:- delete
// @api endpoint:- /api/contact/:id
router.delete("/:id",isAuthenticated, deleteContactById);

// get User specific Contact
router.get("/userid/:id", getContactByUserId);

export default router;
