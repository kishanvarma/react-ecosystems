import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import TodoList from './todos/TodoList'

const AppContainer = styled.div`
	margin: 1 rem;
	font - family: Arial,
	Helvetica,
	sans - serif;
	color: black;
`;

const App = () => (
    <AppContainer>
        <TodoList /> 
    </AppContainer>
);

export default hot(module)(App);