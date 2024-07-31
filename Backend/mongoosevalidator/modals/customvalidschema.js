const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return v && v.length > 5; 
            },
            message: props => `${props.value} is not a valid title!`
        }
    },
    content: {
        type: String,
        required: true,
        minlength: [20, 'Content must be at least 20 characters long']
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    category: {
        type: String,
        enum: ['Technology', 'Health', 'Finance', 'Education'],
        required: true
    }
});