import {create, clear} from 'spec/factories/user';
import {genHash, compare} from 'src/bcrypt';

beforeAll(() => {
    clear();
});

beforeEach(() => {
    clear();
});

afterEach(() => {
    clear();
});

afterAll(() => {
    clear();
});

test('user name will be a specified one', async () => {
    const user = await create({name: 'hoge', nickname: 'nickname'});
    expect(user.name).toBe('hoge');
});

test('too long nickname will fail with the validation error', async () => {
    await create({name: 'hoge', nickname: 'tooooooooooooooo_long_nickname'}).catch((error: any) => {
        expect(error.message).toMatch(/Validation error/);
    })
});

test('encrypted user\'s password from same string will fail', async () => {
    const userPassword = 'myStrongPassword';
    const encryptedPassword = await genHash(userPassword);
    const user = await create({name: 'hoge', password: encryptedPassword});
    const result = await compare(userPassword, user.password);
    expect(result).toBe(true);
});

test('encrypted user\'s password from another string will fail', async () => {
    const userPassword = 'myStrongPassword';
    const encryptedPassword = await genHash(userPassword);
    const user = await create({name: 'hoge', password: encryptedPassword});
    const anotherPassword = 'myStrongPassword2';

    const result = await compare(anotherPassword, user.password);
    expect(result).toBe(false);
});
