import mongoose from 'mongoose';

const yourSchema = new mongoose.Schema({
    email: String,
    name: String,
    tasklist: Object,
    id_parent: String,
});

const YourModel = (mongoose.models && mongoose.models.checklists) || mongoose.model('checklists', yourSchema);

async function connectDB() {
    try {
        await mongoose.connect(process.env.mongodb_string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to database');
    } catch (error) {
        console.log('Database connection error:', error);
    }
}

async function disconnectDB() {
    
    try {
        await mongoose.disconnect();
        console.log('Disconnected from database');
    } catch (error) {
        console.log('Database disconnection error:', error);
    }
}

export { connectDB, disconnectDB, YourModel };
