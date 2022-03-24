const { User, Thought } = require('../models');

const resolvers = {
    // look up thoughts by username
    Query: {
        thoughts: async (parent, { username }) => {
            // checking if username exists if not return
            const params = username ? { username } : {};
            return Thought.find(params).sort({ createdAt: -1 });
        },
    },
    // find a single thought
    thought: async(parent, { _id }) => {
        return Thought.findOne({ _id });
    },
    // get all users
    users: async () => {
        return User.find()
        .select('__v -password')
        .populate('friends')
        .populate('thoughts');
    },
    // get a user by username
    user: async (parent, { username }) => {
        return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts');
    },
    Mutation: {
        addUser: async (parent, args) => {
            // mongoose User model creates a new user in the database with whatever is passed in as the args
            const user = await User.create(args);

            return user;
        },
        login: async () => {

        }
    }
};

module.exports = resolvers;