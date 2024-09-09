export const createClassifySchema = {
    "text": {
        isLength: {
            options: {min: 10},
            errorMessage: "Text must be at least 10 characters"
        },
        isString: {
            errorMessage: "Text must be a string"
        },
        notEmpty: {
            errorMessage: "Text must be non empty"
        }
    }
};