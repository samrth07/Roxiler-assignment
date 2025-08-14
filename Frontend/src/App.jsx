
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AppRouter from './routes/Approuter'

function App() {
  return (
    <>     
          <RouterProvider router={AppRouter()}/>
          <Toaster/>
        
    </>
  )
}

export default App
