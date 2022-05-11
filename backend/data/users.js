import bcrypt from "bcryptjs";
const Users = [
  {
    name: "Jane",
    email: "Jane@jane.com",
    password: bcrypt.hashSync("janejane", 12),
    isAdmin: true,
  },
  {
    name: "Ubaid",
    email: "ubaid@ubaid.com",
    password: bcrypt.hashSync("ubaid123", 12),
    isAdmin: true,
  },
  {
    name: "Jhon",
    email: "jhon@jhon.com",
    password: bcrypt.hashSync("jhonjhon", 12),
    isAdmin: false,
  },
];
export default Users;
