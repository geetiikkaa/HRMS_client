import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import panel from './component/admin/Panel';
import Login from './component/loginpage/Login';
import SignUp from './component/signuppage/signup';
import Panel from './component/admin/Panel';
import DashBoard from './component/admin/DashBoard';
import Employees from './component/admin/pages/Employees';
import Attendance from './component/admin/pages/Attendance';
import LeaveRequest from './component/admin/pages/LeaveRequest';
import PayRoll from './component/admin/pages/PayRoll';
import Performance from './component/admin/pages/Performance';
import Settings from './component/admin/pages/Settings';
import Reports from './component/admin/pages/Reports';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/admin' element={<Panel />}>
          <Route path='dashboard' index element={<DashBoard />} />
          <Route path='employees' element={<Employees />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;