import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar.jsx';
// import Login from './components/Login.jsx';
//import Dashboard from './components/Dashboard/Dashboard.jsx';
//import Holiday from './components/Holidays/Holiday.jsx';
//import Notice from './components/Notice/Notice.jsx';
//import Attendance from './components/Attendance/Attendance.jsx';

//import Leave from './components/Leaves/Leave.jsx';
//import Pending from './components/Leaves/pending.jsx';
//import Reject from './components/Leaves/reject.jsx'
//import Approved from './components/Leaves/approved.jsx';
//import Form from './components/Leaves/Form.jsx';

//import Expenses from './components/Expenses/expenses.jsx'; 

//import Setting from './components/Setting/setting.jsx';
//import Teammember from './components/Teammember/team.jsx';


//Admin Section
//import Adashboard from './components/Admin/Dashboard/Adashboard.jsx';
//import Aholiday from './components/Admin/Aholidays/Aholiday.jsx';
//import Anotice from './components/Admin/Anotice/Anotice.jsx';
//mport Add from './components/Admin/AddEmp/Add.jsx';
// import Asetting from './components/Admin/Asetting/Asettings.jsx';
import Aleave from './components/Admin/ALleaves/Aleave.jsx';


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      
      <Aleave/>
     
    </div>
  )
}

export default App
