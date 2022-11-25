module.exports = mongoose => {
    var User = mongoose.model(
        "user",
        mongoose.Schema({
            username: {
                type: String,
                required: true,
                lowercase: true,
                unique: true
            },
            email: {
                type: String,
                required: true
            },
            password: {
                type: String
            },
            dateCreated: {
                type: Date,
                required: true,
                default: Date.now
            }

        })

    );
    return User;
};