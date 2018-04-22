import faker from 'faker';
import { User } from "src/models/user";

const defaultAttrs = {
    name: faker.internet.userName(),
    password: faker.internet.password(),
    nickname: 'mynickname'
};

export const clear = async () => (
    User.destroy({where: {}, truncate: true})
)

export const create = async (attrs = {}) => (
    User.create({defaultAttrs, ...attrs})
)


