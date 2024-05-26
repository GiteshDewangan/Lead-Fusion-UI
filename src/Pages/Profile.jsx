import React, { useEffect, useState } from 'react';
import FullScreenImage from '../components/FullScreenImage';

const Profile = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [data, setData] = useState({})
    const [firstName, setFirstName] = useState()


    useEffect(() => {
        if(JSON.parse(localStorage.getItem('newUser'))){
            setLoggedIn(true);
        }

        const userData = JSON.parse(localStorage.getItem('profileFormData'));
        if(userData){
            console.log(userData)
            console.log(userData.fullname)
            const name = userData.fullName.split(" ")[0]
            setFirstName(name);
            setData(userData);
        }

    }, [loggedIn])
    
    return (
        <div className="bg-gray-50 min-h-screen p-4">
            { loggedIn ? <FullScreenImage /> : ''}
            {/* Header Section */}
            <header className="flex flex-col gap-3 mb-6">
                <div className="flex justify-between space-x-2">
                    <button className="p-2 w-8 h-8 flex justify-center items-center rounded-[50%] bg-green-700 text-white">
                        <i className="fas fa-bars"></i>
                    </button>
                    <button className="px-2 flex justify-center items-center rounded-2xl bg-green-700 text-white">
                        <i className="fas fa-question bg-white text-green-700 rounded-full w-6 h-6 p-1 mr-2"></i>  HELP
                    </button>
                    <button className="px-2 flex justify-center items-center rounded-2xl bg-green-700 text-white">
                        <i className="fas fa-film bg-white text-green-700 rounded-full w-6 h-6 p-1 mr-2"></i>  Tutorial
                    </button>
                    <button className="p-2 w-8 h-8 flex justify-center items-center rounded-[50%] bg-green-700 text-white">
                        <i className="fas fa-bell"></i>
                    </button>
                </div>
                <div className="flex items-center px-3 justify-between">
                    <span className="text-lg">Hello {firstName}</span>
                    <button className="px-4 py-2 bg-yellow-400 rounded-lg text-white">My Devices</button>
                </div>
            </header>
            
            {/* Main Content */}
            <main>
                {/* WhatsApp Boost Section */}
                <section className="mb-6">
                    <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
                        <img src="https://th.bing.com/th/id/OIP.zAuCcvYKYkeQAle72U4z5AAAAA?rs=1&pid=ImgDetMain" alt="WhatsApp" className="w-24 h-24 object-cover rounded-lg mr-4"/>
                        <div>
                            <h2 className="text-lg font-semibold">Boost your new strategies on WhatsApp</h2>
                            <button className="mt-2 text-green-600">View now <i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </section>
                
                {/* Quick Access Section */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Quick Access</h2>
                    <p className="text-gray-500 mb-4">Supercharge your business growth</p>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="p-4 bg-green-700 text-white rounded-lg flex items-center justify-center space-x-2">
                            <i className="fas fa-cogs"></i>
                            <span>Automation</span>
                        </button>
                        <button className="p-4 bg-green-700 text-white rounded-lg flex items-center justify-center space-x-2">
                            <i className="fas fa-users"></i>
                            <span>Leads</span>
                        </button>
                        <button className="p-4 bg-green-700 text-white rounded-lg flex items-center justify-center space-x-2">
                            <i className="fas fa-address-book"></i>
                            <span>Contacts</span>
                        </button>
                        <button className="p-4 bg-green-700 text-white rounded-lg flex items-center justify-center space-x-2">
                            <i className="fas fa-bullhorn"></i>
                            <span>Campaign</span>
                        </button>
                        <button className="p-4 bg-green-700 text-white rounded-lg flex items-center justify-center space-x-2">
                            <i className="fas fa-chart-line"></i>
                            <span>Report</span>
                        </button>
                        <button className="p-4 bg-green-700 text-white rounded-lg flex items-center justify-center space-x-2">
                            <i className="fas fa-phone"></i>
                            <span>Call Manage</span>
                        </button>
                    </div>
                </section>
                
                {/* Boost Business Section */}
                <section className="mb-6">
                    <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
                        <img src="https://technotropics.com/wp-content/uploads/2023/08/Techno-Tropics-Blog-Image.png" alt="WhatsApp" className="w-24 h-24 object-cover rounded-lg mr-4"/>
                        <div>
                            <h2 className="text-lg font-semibold">Boost your business with us</h2>
                            <button className="mt-2 text-green-600">View now <i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </section>
            </main>
            
            {/* Footer Navigation */}
            <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 flex justify-around">
                <button className="text-green-600">
                    <i className="fas fa-home text-green-700"></i>
                </button>
                <button className="text-gray-400">
                    <i className="fas fa-th"></i>
                </button>
                <button className="text-gray-400">
                    <i className="fas fa-user"></i>
                </button>
            </footer>
        </div>
    );
};

export default Profile;
