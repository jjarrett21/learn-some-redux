import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {toggleTodo} from '../actions';
import TodoList from './TodoList'
import getVisibleTodos from '../reducers'


const mapStateToProps = (state, {match: {params: {filter = 'all'}}}) => {
    return getVisibleTodos(state, filter)


}

// const mapStateToProps = (state, {filter}) => {
//     return getVisibleTodos(state, filter || 'all')


// }


  const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    {onTodoClick: toggleTodo}
  )(TodoList));

  export default withRouter(VisibleTodoList);
  

  
