interface IUserModel {
    userId: Number,
    userName: String,
    password: String,
    firstName: String,
    lastName: String,
    birthdate: Date,
    steamAccountId: String,
    isActive: Boolean,
    createdDateTime: Date,
    createdBy: String,
    updatedDateTime: Date,
    updatedBy: String
}

export default IUserModel;