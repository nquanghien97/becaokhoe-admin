import { RouterProvider } from 'react-router-dom'
import './App.css'
import { NotificationProvider } from './context/NotificationContext'
import router from './router'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "Bé cao khỏe"
  }, []);

  return (
    <NotificationProvider>
      <RouterProvider router={router} />
    </NotificationProvider>
  )
}

export default App
