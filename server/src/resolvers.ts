export {};
const resolvers = {
  Query: {
    async user(root: any, { id }: any, { models }: any) {
      return models.User.findByPk(id);
    },
    async users(root: any, args: any, { models }: any) {
      return models.User.findAll();
    },
    async posts(root: any, args: any, { models }: any) {
      return models.Post.findAll();
    },
    async post(root: any, { id }: any, { models }: any) {
      return models.Post.findByPk(id);
    },
  },
  Mutation: {
    async createUser(
      root: any,
      { id, name, email, role }: any,
      { models }: any
    ) {
      return models.User.create({
        id,
        name,
        email,
        role,
      });
    },

    async createPost(root: any, { id, body, userId }: any, { models }: any) {
      return models.Post.create({
        id,
        body,
        userId,
      });
    },

    updateUser: async (root: any, { id, name }: any, { models }: any) => {
      const user = await models.User.update(
        {
          name,
        },
        { where: { id } }
      );
      var message;
      if (user) message = "User updated successfully";
      else message = "Cannot find the User.";
      return message;
    },

    deleteUser: async (root: any, { id }: any, { models }: any) => {
      const user = await models.User.destroy({ where: { id } });
      var message;
      if (user) message = "User deleted successfully";
      else message = "Cannot find the User.";
      return message;
    },

    // deletePost: async (root: any, { id }: any, { models }: any) => {
    //   const post = await models.Post.destroy({ where: { id } });
    //   var message;
    //   if (post) message = "Post deleted successfully";
    //   else message = "Cannot find the User.";
    //   return message;
    // },
  },

  User: {
    async posts(user) {
      return user.getPosts();
    },
  },
  Post: {
    async user(post) {
      return post.getUser();
    },
  },
};

module.exports = resolvers;
