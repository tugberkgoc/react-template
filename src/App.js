import './App.css'
import './application.scss'
// import 'react-toastify/dist/ReactToastify.min.css'
import { useEffect } from 'react'
import Dashboard from './layouts/dashboard/Index'
import { registerIntercepts } from './apis/axios'
import { ToastContainer } from 'react-toastify'

export default function App () {
  useEffect(() => {
    registerIntercepts()
  }, [])

  return (
    <div className='App'>
      <ToastContainer />
      <Dashboard />
    </div>
  )
}
