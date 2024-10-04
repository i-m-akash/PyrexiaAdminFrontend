import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard'; // Your dashboard component
// import Login from './login'; // Your login component
import BasicRegistration from './basicregistration';
import MembershipCard from './membershipcard';
import Events from './events';
// import AddBasicRegistration from './addBasicRegistration';
import Users from './user';
// import AddMemberCard from './addMemberCard';
// import UpdateMember from './updatemember';
// import UpdateBasic from './updateBasicRegistration';
// import Action from './action';
// import UpdateEvent from './updateEvent';
// import AddMemberPayment from './addmemberpaymentdetails';
// import AddBasicPayment from './addBasicpayment';
// import AddEventPayment from './addEventPayment';
function App() {
    return (
        <Router>
            <Routes>   
                <Route path="/" element={<Dashboard />} />
                <Route path="/basic-registration" element={<BasicRegistration />} />
                <Route path="/membership-card" element={<MembershipCard />} />
                <Route path="/events" element={<Events />} />
                <Route path="/user" element={<Users />} />
               
            </Routes>
        </Router>
    );
}

export default App;
