import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';


test('render expesnes summary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});


test('render expesnes summary with multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={3241212} />);
    expect(wrapper).toMatchSnapshot();

});