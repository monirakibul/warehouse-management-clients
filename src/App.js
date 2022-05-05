import logo from './logo.svg';
import './App.css';
import Header from './components/Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import SignUp from './components/Pages/SignUp/SignUp';
import Blogs from './components/Pages/Blogs/Blogs';
import NotFound from './components/Pages/NotFound/NotFound';
import MyItems from './components/Pages/MyItems/MyItems';
import AddItem from './components/Pages/AddItem/AddItem';
import ManageItem from './components/Pages/ManageItem/ManageItem';
import Inventory from './components/Pages/Inventory/Inventory';
import InventoryDetails from './components/Pages/InventoryDetails/InventoryDetails';
import Footer from './components/Pages/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/Pages/RequireAuth/RequireAuth';
import Profile from './components/Pages/Profile/Profile';
import ForgotPass from './components/Pages/ForgotPass/ForgotPass';

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/forgot-pass' element={<ForgotPass></ForgotPass>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/my-items' element={<RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>}></Route>
        <Route path='/add-items' element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>}></Route>
        <Route path='/manage-items' element={<RequireAuth>
          <ManageItem></ManageItem>
        </RequireAuth>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth>
          <InventoryDetails></InventoryDetails>
        </RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/profile' element={<RequireAuth>
          <Profile></Profile></RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
