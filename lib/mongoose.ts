import mongoose from 'mongoose'

let isConnected = false

export const connectToDb = async () => {
    mongoose.set('strictQuery', true)

    if (!process.env.MONGODB_URL) return console.log('MONGODB_URL NOT FOUND')
    if (isConnected) return console.log('MONGODB ALREADY CONNECTED!')

    try {
        await mongoose.connect(process.env.MONGODB_URL);

        isConnected = true;

        console.log('Connected to MONGODB!')
    } catch (error) {
        console.log(error)
    }
}