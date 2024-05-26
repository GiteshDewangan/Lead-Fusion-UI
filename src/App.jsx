import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import ProfileUpdate from './Pages/ProfileUpdate';
import Profile from './Pages/Profile';
import { Toaster } from 'react-hot-toast';

function App() {
    
    return (
        <Router>
            <Toaster
                position="top-right"
                reverseOrder={true}
            />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/profile/create" element={<ProfileUpdate />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
