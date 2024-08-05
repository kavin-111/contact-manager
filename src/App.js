import React from 'react';
import './App.css';
import Navbar from './component/contacts/viewcontact/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Contactlist from './component/contacts/contactlist/Contactlist';
import Addcontact from './component/contacts/addcontact/Addcontact';
import Editcontact from './component/contacts/editcontact/Editcontact';
import Viewcontact from './component/contacts/viewcontact/Viewcontact';
const App = () => {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/contacts/list" />} />
          <Route path="/contacts/list" element={<Contactlist />} />
          <Route path="contacts/add" element={<Addcontact />} />
          <Route path="/contacts/list/contacts/edit" element={<Editcontact />} />
          <Route path="/contacts/list/contacts/view" element={<Viewcontact />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
