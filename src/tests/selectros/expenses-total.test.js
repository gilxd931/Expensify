import selectTotalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses'

test('sum of empty array', () => {
    const emptyArray = []
    const result = selectTotalExpenses(emptyArray);
    expect(result).toBe(0);
});

test('sum of 1 expense', () => {
    const expense = expenses[0]; // 195
    const result = selectTotalExpenses([expense]);
    expect(result).toBe(195);
});

test('sum of expenses list', () => {
    const result = selectTotalExpenses(expenses);
    expect(result).toBe(195 + 109500 + 4500);
});