import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UploadDocument,ViewDocList, DownLoadDoc } from '../contentdata';

const MainContent = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Routes>
        <Route path="../contentdata/UploadDocument" element={<UploadDocument />} />
        <Route path="/settings/profile" element={<Profile />} />
        <Route path="/settings/account" element={<Account />} />
        <Route path="/settings/privacy" element={<Privacy />} />
        <Route path="/info/about" element={<About />} />
        <Route path="/info/contact" element={<Contact />} />
        <Route path="/info/help" element={<Help />} />
      </Routes>
    </div>
  );
};

export default MainContent;
