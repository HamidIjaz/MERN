"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers = {
    Query: {
        user(root, { id }, { models }) {
            return __awaiter(this, void 0, void 0, function* () {
                return models.User.findByPk(id);
            });
        },
        users(root, args, { models }) {
            return __awaiter(this, void 0, void 0, function* () {
                return models.User.findAll();
            });
        },
        posts(root, args, { models }) {
            return __awaiter(this, void 0, void 0, function* () {
                return models.Post.findAll();
            });
        },
        post(root, { id }, { models }) {
            return __awaiter(this, void 0, void 0, function* () {
                return models.Post.findByPk(id);
            });
        },
    },
    Mutation: {
        createUser(root, { id, name, email, role }, { models }) {
            return __awaiter(this, void 0, void 0, function* () {
                return models.User.create({
                    id,
                    name,
                    email,
                    role,
                });
            });
        },
        createPost(root, { id, body, userId }, { models }) {
            return __awaiter(this, void 0, void 0, function* () {
                return models.Post.create({
                    id,
                    body,
                    userId,
                });
            });
        },
        updateUser: (root, { id, name }, { models }) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield models.User.update({
                name,
            }, { where: { id } });
            var message;
            if (user)
                message = "User updated successfully";
            else
                message = "Cannot find the User.";
            return message;
        }),
        deleteUser: (root, { id }, { models }) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield models.User.destroy({ where: { id } });
            var message;
            if (user)
                message = "User deleted successfully";
            else
                message = "Cannot find the User.";
            return message;
        }),
    },
    User: {
        posts(user) {
            return __awaiter(this, void 0, void 0, function* () {
                return user.getPosts();
            });
        },
    },
    Post: {
        user(post) {
            return __awaiter(this, void 0, void 0, function* () {
                return post.getUser();
            });
        },
    },
};
module.exports = resolvers;
