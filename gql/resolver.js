const userController = require("../controllers/user");
const userSearchController = require("../controllers/userSearch")

const resolvers = {
    Query: {
        // User
        getUser: () => {
            console.log('Getting user')
            return null;
        },
        getUserSearch: (_, { idUser }) => userSearchController.getUserSearch(idUser),
    },

    Mutation: {
        //User
        register: (_, { input }) => userController.register(input),
        login: (_, { input }) => userController.login(input),
        userSearch: (_, { input }) => userSearchController.userSearch(input),
        updateUser: (_, { input }) => userController.updateUser(input),
    }
}

module.exports = resolvers;