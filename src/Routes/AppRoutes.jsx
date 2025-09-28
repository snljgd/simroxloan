import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Disclaimer from '../Pages/Disclaimer';
import Layout from '../component/Layout';
import Privacy from '../Pages/Privacy';

import Terms from '../Pages/Terms';
import FAQs from '../Pages/Faqs';
import HelpCenter from '../Pages/HelpCenter';
import Contact from '../Pages/Contact';
import PersonalLoan from '../Pages/PersonalLoan';
import About from '../Pages/About';
import Loans from '../Pages/Loans';
import HomeLoan from '../Pages/HomeLoan';
import CarLoan from '../Pages/CarLoan';
import BusinessLoan from '../Pages/BusinessLoan';
import LoanCalculator from '../Pages/LoanCalculator';
import EducationLoan from '../Pages/EducationLoan';
import LoanForm from '../Pages/LoanForm';



function AppRoutes() {
  return (
    <Routes>

    <Route path='/' element={<Layout/>}/> 

    <Route path='/LoanForm' element={<LoanForm/>}/>
      {/* Home Route */}
  

      {/* Other Pages */}
      <Route path='/disclaimer' element={<Disclaimer/>} />
      <Route path='/privacy' element={<Privacy/>}/>
      <Route path='/terms' element={<Terms/>}/>
      <Route path='/faqs' element={<FAQs/>}/>
      <Route path='/helpcenter' element={<HelpCenter/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/personal' element={<PersonalLoan/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/loans' element={<Loans/>}/>
      <Route path='/Homeloan' element={<HomeLoan/>}/>
      <Route path='/Carloan' element={<CarLoan/>}/>
      <Route path='/Businessloan' element={<BusinessLoan/>}/>
      <Route path='/LoanCalculator' element={<LoanCalculator/>}/>
      <Route path='/Educationloan' element={<EducationLoan/>}/>
    </Routes>
  );
}

export default AppRoutes;
