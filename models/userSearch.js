const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSearchSchema = Schema({
    idUser: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: "User"
    },
    label: {
        type: String,
        required: true,
        unique: true,
    },
    codprov: {
        type: String,
        required: true,
        unique: false,
    },
    idpob: {
        type: String,
        required: true,
        unique: false,
    },
})

module.exports = mongoose.model("UserSearch", UserSearchSchema)