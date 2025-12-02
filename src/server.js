import mongoose from 'mongoose';
import { MONGO_URL} from './config/config.js';

async function dbConnect() {
    try {
      await mongoose.connect(MONGO_URL);
       console.log("DB connected");
    }
    catch(e) {
        console.log({ 
            "Messgage" : e
        })
    }
 }

 export default dbConnect;