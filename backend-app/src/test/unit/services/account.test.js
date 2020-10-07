import AccountService from '../../../app/services/Account';
import AccountRepo from '../../../app/repositories/Account';

describe('Service: account', () => {
    it('it should check add account function return true in success case', async () => {
        const addAccountRepoSpy = jest.spyOn(AccountRepo, 'addAccount');

        addAccountRepoSpy.mockReturnValue(true);
        const result = await AccountService.addAccount([]);
        expect(result).toBeTruthy;
    });

    it('it should check get account balance function return object', async () => {
        const sampleBalanceObj = { balance: 100 };
        const accountId = 2;
        const findAccountByIdRepoSpy = jest.spyOn(AccountRepo, 'findAccountById');

        findAccountByIdRepoSpy.mockReturnValue(sampleBalanceObj);
        const result = await AccountService.getAccountBalance(accountId);
        expect(result.hasOwnProperty('balance')).toBeTruthy;
    });
});
