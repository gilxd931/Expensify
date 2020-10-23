import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('remove expense object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({

        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('edit expense object', () => {
    const action = editExpense('123abc', { description: 'desc' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { description: 'desc' }
    })
})

test('setup expense action object with provided values', () => {
    const expectedData = {
        description: 'Rent',
        amount: 100000,
        createdAt: 100000,
        note: 'last month rent'
    }

    const action = addExpense(expectedData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expectedData,
            id: expect.any(String)
        }
    })
});

test('setup expense action object with default values', () => {
    const expectedData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    }

    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expectedData,
            id: expect.any(String)
        }
    })
});