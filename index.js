//01)გაიარეთ რეგისტრაცია mongoDB-ზე დააგენერირეთ connect link და დაქონექთდით ბაზასთან.(npm i mongoose,npm i express) დასერჩეთ არარის ძაან რთული.
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectionString = process.env.MONGO_URL;

export async function connectToMongo() {
    if (!connectionString) {
        console.error("MONGO_URL is not set. Please add it to the .env file.");
        return;
    }

    try {
        await mongoose.connect(connectionString);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

void connectToMongo();
//2)შექმენი პროგრამა, რომელიც ამატებს მომხმარებლის სახელს და ასაკს და აბრუნებს ტექსტს User Nika is 22 years old.
//const userName = "nika";
//const userAge = 22;
//const userInfo = `user ${userName} is ${userAge} years old`;
//console.log(userInfo);
//3)აღწერე პროდუქტები ინტერფეისით და გამოითვალე საერთო ფასი.
//თუ ფასი მეტია 100-ზე, დაბეჭდე "Discount available!