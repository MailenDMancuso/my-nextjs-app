import mongoose from "mongoose";

const dbConnect = async () => {
    mongoose.connect(process.env.DB_URI)
        .then(() => console.log('DB connected succesfully!'))
        .catch((e) => console.log(e))
}

export default dbConnect;
