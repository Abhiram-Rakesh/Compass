const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
    .then((res) => console.log("Database has connected successfully"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/compass");
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "68ff1444f20e74c5c9021891",
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized successfully");
};

initDB();
