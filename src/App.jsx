import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Navbar from './Pages/Components/Navbar'
import Profile from './Pages/Profile'
import Forget from './Pages/Forget'
import OTP from './Pages/Otp'
import Reset from './Pages/Reset'
import Addme from './Pages/Addme'
import SingleBlog from './Pages/SingleBlog'
import EditBlogForm from './Pages/EditBlogForm'
import { Provider } from 'react-redux'
import store from './store/store'


function App() {
  return (
    <>
    <Provider store={store}>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/forget' element={<Forget/>}/>
      <Route path='/otp' element={<OTP/>}/>
      <Route path='/reset' element={<Reset/>}/>
      <Route path='/addme' element={<Addme/>}/>
      <Route path='/blog/:id' element={<SingleBlog/>}/>
      <Route path='/editform/:id' element={<EditBlogForm/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
