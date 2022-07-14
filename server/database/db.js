import mongoose  from 'mongoose';

const Connection = async (username = 'DivijL', password = 'divij') => {
    const URL = `mongodb://${username}:${password}@ac-mhctisx-shard-00-00.lvc0jj8.mongodb.net:27017,ac-mhctisx-shard-00-01.lvc0jj8.mongodb.net:27017,ac-mhctisx-shard-00-02.lvc0jj8.mongodb.net:27017/?ssl=true&replicaSet=atlas-wkhsv5-shard-0&authSource=admin&retryWrites=true&w=majority` ;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;