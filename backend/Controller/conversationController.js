const Conversation = require("../Model/conversation")

exports.conversationController = async (req, res, next) => {

    let newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId]
    })
    try {

        const savedConersation = await newConversation.save()
        res.status(200).json(savedConersation)

    } catch (error) {

        res.status(500).json(error)

    }

}



exports.conversationGetController = async (req, res, next) => {
    try {
        let conversation = await Conversation.findById(req.params.id)

        res.satus(200).json(conversation)

    } catch (error) {

        res.satus(500).json(error)

    }

}