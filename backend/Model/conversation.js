const { default: mongoose } = require("mongoose");

const conversationSchema = new mongoose.Schema({
    members: {
        type: Array,
    },
},
    { timestamps: true }
)


let Conversation = mongoose.model("Conversation", conversationSchema);

module.exports = Conversation;

