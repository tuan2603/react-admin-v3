import React, { Component } from 'react';
import './App.css';
import { PostList } from './components/posts';
import { UserList } from './components/users';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

class App extends Component {
  render() {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="posts" list={PostList} />
            <Resource name="users" list={UserList} />
        </Admin>
    );
  }
}

export default App;
