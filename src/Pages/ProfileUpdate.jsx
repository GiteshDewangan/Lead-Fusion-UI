import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import image from '../assets/image.png'

function ProfileUpdate() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/'); // Navigate to the previous page
    };

    const showProfile = () => {
        navigate('/profile')
    }

    const [states, setStates] = useState([
        { name: "Andhra Pradesh", cities: ["Visakhapatnam", "Vijayawada", "Hyderabad"] },
        { name: "Assam", cities: ["Guwahati", "Dibrugarh", "Silchar"] },
        { name: "Bihar", cities: ["Patna", "Gaya", "Muzaffarpur"] },
        // Add more states and cities as needed
    ]);

    const [fullName, setFullName] = useState(null);
    const [emailAddress, setEmailAddress] = useState(null);
    const [companyName, setCompanyName] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [sponsorCode, setSponsorCode] = useState('ABC123');
    const [rememberMe, setRememberMe] = useState(false);
    const [gotoProfile, setGotoProfile] = useState(false);
    const [err, setErr] = useState(null)
    const [pop, setPop] = useState(null)


    // Effect to fetch remember me data from local storage
    useEffect(() => {
        const rememberMeData = JSON.parse(localStorage.getItem('profileFormData'));
        if (rememberMeData) {
            navigate('/profile')
        }
        if (rememberMeData) {
            setFullName(rememberMeData.fullName);
            setEmailAddress(rememberMeData.emailAddress);
            setCompanyName(rememberMeData.companyName);
            setSelectedState(rememberMeData.selectedState);
            setSelectedCity(rememberMeData.selectedCity);
            setSponsorCode(rememberMeData.sponsorCode);
            setRememberMe(true);
        }
    }, []);

    // Effect to save form data to local storage if Remember Me is checked
    useEffect(() => {
        if (rememberMe) {
            const formData = {
                fullName,
                emailAddress,
                companyName,
                selectedState,
                selectedCity,
                sponsorCode
            };
            localStorage.setItem('profileFormData', JSON.stringify(formData));
            localStorage.setItem('newUser', JSON.stringify('newUser'));
        } else {
            localStorage.removeItem('profileFormData');
        }
    }, [fullName, emailAddress, companyName, selectedState, selectedCity, sponsorCode, rememberMe]);

    const handleProfileUpdate = async () => {
        if (fullName && emailAddress && companyName && selectedState && selectedCity && sponsorCode ) {
            const token = localStorage.getItem('token');
            if (token) {
                const formData = {
                    fullName,
                    emailAddress,
                    companyName,
                    selectedState,
                    selectedCity,
                    sponsorCode
                };

                try {
                    // const response = await axios.post(`${API}/api/profile/store`, formData, {
                    //     headers: { Authorization: `Bearer ${token}` }
                    // });

                    // directly store in frontend
                    if (rememberMe) {
                        localStorage.setItem('profileFormData', JSON.stringify(formData));
                    }
                    setPop(true)
                } catch (error) {
                    setErr('email already exists')
                    console.error('Profile update failed:', error);
                }
            }
        }else{
            setErr('please fill all fields')
        }
    };



    return (
        <div className="profile w-[100vw] h-[100vh] bg-green-100 flex justify-center items-center">


            {
                pop == true ? (
                    <div className='transition ease-in duration-200 w-[100vw] bg-[rgba(0,0,0,0.2)] h-full flex justify-center items-center fixed top-0 bottom-0 left-0 right-0'>
                        <div className="popover rounded-2xl p-3 bg-white w-60 text-center flex flex-col justify-center items-center">
                            <img src={image} className='w-40 h-30 rounded-2xl' alt="" />
                            <h1 className="text-xl font-bold text-green-900 mt-2">Account Created</h1>
                            <p className="font-semibold text-slate-500 mx-3">your account has been created successfully</p>

                            <button className='mt-6 bg-green-800 hover:bg-green-600 duration-200 shadow-xl rounded-md py-2 px-5 text-white font-semibold' onClick={showProfile}>OK</button>
                        </div>
                    </div>
                ) : ''
            }


            <div className=" h-40 lg:w-[40%] md:w-[50%] sm:w-[100%]  w-[100%] lg:h-[98%] sm:h-full  h-auto bg-white  flex flex-col  gap-3 md:rounded-2xl lg:rounded-2xl shadow-2xl  ">
                <div className="text-green-900 text-xl flex items-center justify-between rounded-2xl bg-[#F7F6F4] py-4 px-5">
                    <i onClick={handleGoBack} className="cursor-pointer text-green-600 fa-solid fa-chevron-left fa-xl"></i>
                    <h1 className="font-bold text-2xl">Create Profile</h1>
                    <div className=""></div>
                </div>

                {/* input fields */}
                <div className="px-8 py-4 w-[100%] h-[100%] flex flex-col justify-center  gap-2">
                    <label htmlFor="" className="ml-5 text-slate-500">Full name</label>
                    <input
                        className='mx-auto px-4 p-2 rounded-lg bg-slate-100 w-[95%] focus:ring focus:ring-green-600'
                        type="text"
                        placeholder="Enter full name"
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                    />
                    <label htmlFor="" className="ml-5 text-slate-500">Email address</label>
                    <input
                        className='mx-auto px-4 p-2 rounded-lg bg-slate-100 w-[95%] focus:ring focus:ring-green-600'
                        type="email"
                        placeholder="Enter email address"
                        value={emailAddress}
                        onChange={e => setEmailAddress(e.target.value)}
                    />
                    <label htmlFor="" className="ml-5 text-slate-500">Company Name</label>
                    <input
                        className='mx-auto px-4 p-2 rounded-lg bg-slate-100 w-[95%] focus:ring focus:ring-green-600'
                        type="text"
                        placeholder="Company Name"
                        value={companyName}
                        onChange={e => setCompanyName(e.target.value)}
                    />
                    <label htmlFor="" className="ml-5 text-slate-500">State</label>
                    <select
                        className='mx-auto px-4 p-2 rounded-lg bg-slate-100 w-[95%] focus:ring focus:ring-green-600'
                        value={selectedState}
                        onChange={e => setSelectedState(e.target.value)}
                    >
                        <option value="">Select State</option>
                        {states.map((state, index) => (
                            <option key={index} value={state.name}>{state.name}</option>
                        ))}
                    </select>

                    <label htmlFor="" className="ml-5 text-slate-500">City</label>
                    <select
                        className='mx-auto px-4 p-2 rounded-lg bg-slate-100 w-[95%] focus:ring focus:ring-green-600'
                        value={selectedCity}
                        onChange={e => setSelectedCity(e.target.value)}
                    >
                        <option value="">Select City</option>
                        {states.find(state => state.name === selectedState)?.cities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                        ))}
                    </select>

                    <label htmlFor="" className="ml-5 text-slate-500">Sponsor code</label>
                    <input
                        className='mx-auto px-4 p-2 rounded-lg bg-slate-100 w-[95%] focus:ring focus:ring-green-600'
                        type="text"
                        placeholder="Sponsor Code"
                        value={sponsorCode}
                        onChange={e => setSponsorCode(e.target.value)}
                    />
                    {err ? <p className='text-red-600 ml-5'>{err}</p> : ''}
                    <label className='flex gap-3 !text-start ml-5'>
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={e => setRememberMe(e.target.checked)}
                        />
                        Remember Me
                    </label>
                    <button className='mt-5 mx-auto w-[170px] bg-green-800 hover:bg-green-600 duration-200 shadow-xl rounded-md py-2 px-4 text-white font-semibold' onClick={handleProfileUpdate}>Create Profile</button>
                </div>
            </div>
        </div>
    );
}

export default ProfileUpdate;
