const model = require("./model");
const bcrypt = require("bcrypt");

async function create(req, res) {
  try {
    let { name, email, password } = req.body;
    console.log(name, email, password);

    let crypted = await bcrypt.hash(password, 10);
    console.log(crypted);
    let data = await model.create({
      name: name,
      email: email,
      password: crypted,
    });
    console.log(data);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function login(req, res) {
  try {
    let email = req.body.emails;
    let password = req.body.password;

    let data1 = await model.find({ email: email });
    if (!data1) return res.status(404).send("data not found");
    let match = await bcrypt.compare(password,data1.password);
    if (!match) return res.status(404).send("incorrect password");

  
    res.status(200).json({ data1 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getdata(req, res){
  try {
    let data = await model.find().select("name");
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

module.exports = {
  create,
  login,
  getdata,
};
