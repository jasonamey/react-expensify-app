import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import  db from './firebase/firebase'


const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount : 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', amount : 3900, createdAt : 300 }));
store.dispatch(addExpense({ description: 'Gas bill', amount : 3500 }));
store.dispatch(addExpense({ description: 'Rent bill', createdAt : 1000 }));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
