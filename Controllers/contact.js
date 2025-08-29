import { Contact } from "../Models/Contact.js";

// Create New Contact
export const newContact = async (req, res) => {
  const { name, email, phone, type } = req.body;
  if (name == "" || email == "" || phone == "" || type == "")
    return res.json({ msg: "All fields are Required", success: false });
  let saveContact = await Contact.create({
    name,
    email,
    phone,
    type,
    user: req.user,
  });

  res.json({ msg: "Contact Saved Successfully", saveContact, success: true });
};

// Get All Contact
export const getAllContact = async (req, res) => {
  const userContact = await Contact.find();
  if (!userContact)
    return res.json({ msg: "No Contact is Exist", success: false });
  res.json({ msg: "All Contact is Fetched", userContact });
};

// Get Contact by id
export const getContactById = async (req, res) => {
  const id = req.params.id;
  const userContact = await Contact.findById(id);
  if (!userContact)
    return res.json({ msg: "No Contact found", success: false });
  res.json({ msg: "Contact Fetched", userContact, success: true });
};

// Update Get Contact by id
export const updateContactById = async (req, res) => {
  const id = req.params.id;
  const { name, email, phone, type } = req.body;
  let updatedContact = await Contact.findByIdAndUpdate(
    id,
    {
      name,
      email,
      phone,
      type,
    },
    { new: true }
  );
  if (!updatedContact)
    return res.json({ msg: "No Contact Exist", success: false });
  res.json({
    msg: "Contact Updated Successfully..",
    updatedContact,
    success: true,
  });
};

// Delete Contact by id
export const deleteContactById = async (req, res) => {
  const id = req.params.id;
  let deleteContact = await Contact.findByIdAndDelete(id);
  if (!deleteContact)
    return res.json({ msg: "No Contact Exist", success: false });
  res.json({
    msg: "Contact Deleted Successfully..",
    success: true,
  });
};

// get contact by user Id
export const getContactByUserId = async (req, res) => {
  const id = req.params.id;
  console.log("UserId from params = ", id);
  const userContact = await Contact.find({ user: id });
  if (!userContact || userContact.length === 0)
    return res.json({ msg: "No Contact found", success: false });
  res.json({
    msg: "Specific User Contact Fetched",
    userContact,
    success: true,
  });
};
