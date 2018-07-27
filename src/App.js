import React, { Component } from 'react';
import './App.css';
import { PostList, PostEdit, PostCreate } from './components/posts';
import { UserList } from './components/users';
import Menu  from './components/Menu';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon  from '@material-ui/icons/Book';
import UserIcon  from '@material-ui/icons/Group';
import Dashboard from './components/Dashboard';
import authProvider from './components/authProvider';
import NotFound  from './components/NotFound';
// import dataProvider from './components/dataProvider';
import { createMuiTheme } from '@material-ui/core/styles';
const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');


const theme = createMuiTheme({
    palette: {
        type: 'dark', // Switching the dark mode on is a single property value change.
    },
});

class App extends Component {
  render() {
    return (
        <Admin theme={theme} menu={Menu} catchAll={NotFound} dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard} >
            <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
            <Resource name="users" list={UserList} icon={UserIcon} />
        </Admin>
    );
  }
}

export default App;
