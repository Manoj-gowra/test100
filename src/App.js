import logo from './logo.svg';
import './App.css';
import React from 'react';
import { RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home';
import RoomPage from './pages/room';

const Hello = () => {
  return <div>Hello</div>;
}

const ErrorPage = () => {
  return (<div><h1 style={{color:"red"}}>Error IRONMAN</h1></div>)
}

const party = createBrowserRouter([{ path: '/', element:<HomePage />, },{path:'room/', element:<RoomPage /> }]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={party} />
    </React.StrictMode>
  );
}

export default App;
