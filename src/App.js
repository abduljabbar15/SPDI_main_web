import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import News from './Pages/News';
import WhySpdi from './Pages/WhySpdi';
import AdminInfo from './Pages/AdminInfo';
import Courses from './Pages/Courses';
import ContactWithUs from './Pages/ContactWithUs';
import './App.css';
/* student Dashboard nested route files */
import StudentsDashboard from './Pages/Auth/StudentsDashboard';
import StuInvoiceList from './Components/Students/StuInvoiceList';
import StuClassRouting from './Components/Students/StuClassRouting';
import StuOnlineClass from './Components/Students/StuOnlineClass';
import StuOnlinePayment from './Components/Students/StuOnlinePayment';
import StuCertificates from './Components/Students/StuCertificates';
import StuClassShedule from './Components/Students/StuClassShedule';
import StuAttendanceReport from './Components/Students/StuAttendanceReport';
import InvoiceDetails from './Components/Students/invoice/InvoiceDetails';
import StuDashHome from './Components/Students/StuDashHome';
import LoginPage from './Pages/Authorization/LoginPage';
import PageNotFound from './globalComponents/PageNotFound';
import Admission from './Pages/Admission';
import SingleCourse from './Components/Courses/SingleCourse'; 
import Media from './Pages/Media';


function App() {
  return (
    <div className='bg-gray-100'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WhySpdi" element={<WhySpdi />} />
          <Route path="/contactwithus" element={<ContactWithUs />} />
          <Route path="/admininfo" element={<AdminInfo />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/events" element={<Media />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/studentdash" element={<StudentsDashboard />} >
            {/* student Dashboard nested routes */}
            <Route path='/studentdash' element={<StuDashHome />} />
            <Route path="invoice" element={<StuInvoiceList />} />
            <Route path="invoice/:invoiceId" element={<InvoiceDetails />} />
            <Route path="classrouting" element={<StuClassRouting />} />
            <Route path="classshedule" element={<StuClassShedule />} />
            <Route path="attendancereport" element={<StuAttendanceReport />} />
            <Route path="onlineclass" element={<StuOnlineClass />} />
            <Route path="certificates" element={<StuCertificates />} />
            <Route path="studenPayment" element={<StuOnlinePayment />} />
          </Route>

          <Route path="/course" element={<Courses />} />
          <Route path='course/:courseid' element={<SingleCourse />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
