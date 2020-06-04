import React, { useEffect } from 'react';
import styled from 'styled-components';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { loadTodos } from './thunks';
import { connect } from 'react-redux';
import { removeTodo, markTodoAsCompleted } from './actions';
import { displayAlert, removeTodoRequest, markTodoAsCompletedRequest } from './thunks';
import { getTodos, getTodosLoading, getCompletedTodos, getIncompleteTodos } from './selectors';

const ListWrapper = styled.div`
    max - width: 700 px;
    margin: auto;
`;

const TodoList = ({
        completedTodos,
        inCompleteTodos,
		onRemovePressed,
        onCompletePressed,
        isLoading,
        startLoadingTodos
    }) => {
        useEffect(() => {
            startLoadingTodos();
        }, [] );

        const loadingMessage = <div>Loading Message...</div>
        const content =(
            <ListWrapper>
                <NewTodoForm />
                <h2>Completed : </h2>
                {completedTodos.map(todo => <TodoListItem
                todo={todo} 
                onCompletePressed={onCompletePressed}
                onRemovePressed={onRemovePressed} />)}
                <h2>InComplete: </h2>
                {inCompleteTodos.map(todo => < TodoListItem
                todo={todo} 
                onCompletePressed={onCompletePressed}
                onRemovePressed={onRemovePressed} />)}
            </ListWrapper>
        );
        return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    inCompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: id => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);