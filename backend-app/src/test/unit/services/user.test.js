import UserService from '../../../app/services/User';
import UserRepo from '../../../app/repositories/User';

describe('Service: user', () => {
    it('it should check add customer function exists or not', async () => {
        const serviceName = UserService.addCustomer.name;

        expect(serviceName).toEqual('addCustomer');
    });

    it('it should check add customer function return true in success case', async () => {
        const addCustomerInDBRepoSpy = jest.spyOn(UserRepo, 'addCustomerInDB');

        addCustomerInDBRepoSpy.mockReturnValue(true);
        const result = await UserService.addCustomer([]);
        expect(result).toBeTruthy;
    });
});
