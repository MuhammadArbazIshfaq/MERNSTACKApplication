const mongoose = require("mongoose");

const express = require("express");
const router = express.Router();
require("../db/conn");

const User = require("../model/userSchema");

router.get("/", (req, res) => {
    res.send("Hello from server oneeee ");

});




//registration route

router.post("/register", (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;


    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "plz filled properly" });

    }

    User.findOne({ email: email })
        .then((userExist) => {
            if (userExist) {
                return res.status(422).json({ error: "email already exist" });


            }
            const user = new User({ name, email, phone, work, password, cpassword });
            user.save().then(() => {
                res.status(201).json({ message: "user registerd successfully" });
            }).catch((err) => res.status(500).json({ error: "Failed to registerd" }));

        }).catch(err => { console.log(err); })

});




//Login route

router.post("/signin", async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "plz filled field properly" })

        }

        const userLogin = await User.findOne({ email: email });

        if (!userLogin) {
            res.json({ error: "error  " });
        } else {
            res.status(400).json({ message: "user Login Successfully" });
        }



    }
    catch (err) {

    }
})


module.exports = router;
