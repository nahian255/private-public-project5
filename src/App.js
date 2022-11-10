import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog';
import Css from './Component/Css';
import Java from './Component/Java';
import Reactquestion from './Component/Reactquestion';
import Root from './Component/Root';
import Statistics from './Component/Statistics';
import Topics from './Component/Topics';
import Git from './Component/Git.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: 'react/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Reactquestion></Reactquestion>
        },
        {
          path: '/react/2',
          element: <Java></Java>
        },
        {
          path: '/react/1',
          element: <Reactquestion></Reactquestion>
        },
        {
          path: '/react/4',
          element: <Css></Css>
        },
        {
          path: '/react/5',
          element: <Git></Git>
        },

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
