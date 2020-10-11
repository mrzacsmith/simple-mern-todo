import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import TodoList from './components/TodoList.jsx'
import EditTodo from './components/EditTodo.jsx'
import CreateTodo from './components/CreateTodo.jsx'

const App = () => {
  return (
    <div>
      <nav className='navbar bg-list navbar-expand-lg navbar-light'>
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to='/' className='nav-link'>Todos</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/create' className='nav-link'>New Todo</Link>
          </li>
        </ul>
      </nav>
     <Switch>
       <Route exact path='/' component={TodoList} />
       <Route path='/edit/:id' component={EditTodo} />
       <Route path='/create' component={CreateTodo} />
       </Switch> 
    </div>
  );
};

export default App;