import mongoose from "mongoose"

export const connectToDatabase = async()=> {
  try {
    if(mongoose.connections && mongoose.connections[0].readyState) return;

    const {connection} = await mongoose.connect(
      process.env.MONGO_URI as string,
      {
        dbName: "nextAuth"
      }
    )
    console.log(`Connected to database: ${connection.host}`)
  } catch (error: any) {
    throw new Error("Error connecting to database " + error)
    
  }
}