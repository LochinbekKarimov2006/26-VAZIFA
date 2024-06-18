import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Abaut from './pages/Abaut'
import Contact from './pages/Contact'
import MainLeaut from './layout/MainLeaut'
import Components from './pages/Components'
function App() {
const router=createBrowserRouter([
  {
    path:'/',
    element:<MainLeaut/>,
    children:[

      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/abaut',
        element:<Abaut/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:"/components/:id",
        element:<Components/>
      }
    ]}
])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
