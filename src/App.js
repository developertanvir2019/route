import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home/Home';
import Gallery from './Component/Gallery/Gallery';
import Header from './Component/Header/Header';
import Main from './layout/Main/Main';
import Dynamin from './Component/Dynamin/Dynamin';
import Friends from './Component/Friends/Friends';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [

        { path: '/', element: <Home></Home> },
        { path: '/gallery', element: <Gallery></Gallery> },
        {
          path: '/friend',
          loader: () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },

          element: <Friends></Friends>
        },
        {
          path: '/:perId',
          loader: ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.perId}`)
          }
          , element: <Dynamin></Dynamin>
        },
        { path: '/*', element: <h1>not found 404</h1> },
      ]
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
