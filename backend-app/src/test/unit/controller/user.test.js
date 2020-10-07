import UserController from '../../../controllers/User';

describe('Controller: user', () => {
    it('it should check add customers function exist or not', async () => {
        const methods = Object.keys(UserController);

        expect(methods.length).toBe(1);
        expect(methods).toContain('addCustomers');
    });
});
