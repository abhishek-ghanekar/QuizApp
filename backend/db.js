const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://a8hiyt:yWqUGM3OmN8pC3I7@cluster0.z35spyv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log('hogaya connect')
        console.log('connected to mongo Successfully')
    })
}

module.exports = connectToMongo;