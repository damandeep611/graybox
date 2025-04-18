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
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error("Error connecting to database " + errorMessage)
    
  }
}