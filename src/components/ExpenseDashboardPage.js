import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpanseDashboardPage = () => {
    return (
        <div>
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    );
};

export default ExpanseDashboardPage;
