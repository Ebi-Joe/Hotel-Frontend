import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import { RxDoubleArrowLeft } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';

function NewConcierge() {
    const [name, setName] = useState('');
    const [images, setImage] = useState(null);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription]= useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    const [good, setGood] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0];
        setDate(currentDate);
    }, []);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!name || !images || !email || !phone || !date || !description) {
            setError("Please fill in all fields...");
            return;
        }
        setLoading(true);
        setError('');
        setGood('')

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append("img", images);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("date", date);
            formData.append("description", description);

            const res = await fetch("https://hotel-backend-itqc.onrender.com/api/newConcierge", {
                method: "POST",
                body: formData
            })
            const data = await res.json()
            console.log(data);
            if (res.ok) {  
                setGood("Concierge Has Been Added Successfully")
                setTimeout(() => {
                    navigate("/concierge");
                    window.location.reload()
                }, 2000);              
                setName('')
                setImage('')
                setEmail('')
                setPhone('')
                setDate('')
                setDescription('')
            } else {
                if (data.message) {
                    setError(data.message)
                } else {
                    setError("Error Encountered While Creating A New Concierge...")
                }
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

  return (
    <>
        <div className="flex items-center justify-center">
            {error && <div className="error-message fixed text-[tomato] bg-white text-center font-bold text-xl m-4 p-2 mt-[10em] rounded-lg">{error}</div>}
        </div>
        <div className="flex items-center justify-center">
            {good && <div className="good-message fixed text-white bg-green-500 text-center font-bold text-xl m-4 p-2 mt-[10em] rounded-lg">{good}</div>}
        </div>
        <div className="flex bg-slate-200 w-full h-screen overflow-x-hidden">
            <AdminSidebar/>
            <div className="new mt-16 ml-[5em] md:ml-[17em]">
                <div className="flex">
                    <Link to='/concierge'>
                        <div className="flex text-xl font-semibold mx-2 text-[tomato]">
                            <h1 className='px-1'>Concierge</h1>
                            <RxDoubleArrowLeft className='mt-1.5 font-bold'/>
                        </div>
                    </Link>
                    <h1 className='text-xl font-semibold'>New Concierge</h1>
                </div>
               <div className="p-4">
                    <div className="bg-[tomato] rounded-xl p-4 pt-8 md:flex">
                        <div className="form">
                            <form action="" onSubmit={submitHandler} >
                                <div className="lg:flex">
                                    <div className="m-2 grid">
                                        <label htmlFor="" className='mx-2 text-white font-bold text-xl'>Name:</label>
                                        <input type="text" onChange={(e) => {setName(e.target.value)}} placeholder='Enter Full Name Here' className='p-2 w-full outline-none m-2 rounded-md'/>
                                    </div>
                                    <div className="m-2 grid">
                                        <label htmlFor="" className='mx-2 text-white font-bold text-xl'>Image:</label>
                                        <input type="file" onChange={(e) => {setImage(e.target.files[0])}} name=""  className='w-full rounded-lg cursor-pointer p-2 m-2 bg-gray-50'/>
                                    </div>
                                </div>
                                <div className="lg:flex">
                                    <div className="m-2 grid">  
                                        <label htmlFor="" className='mx-2 text-white font-bold text-xl'>Email</label>
                                        <input type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder='Enter Email' name=""  className='p-2 w-full outline-none m-2 rounded-md'/>
                                    </div>
                                    <div className="m-2 grid">
                                        <label htmlFor="" className='mx-2 text-white font-bold text-xl'>Phone No</label>
                                        <input type="number" onChange={(e) => {setPhone(e.target.value)}} placeholder='Enter Phone No' name=""  className='p-2 w-full outline-none m-2 rounded-md'/>
                                    </div>
                                </div>
                                <div className="lg:flex">
                                    <div className="m-2 grid">
                                        <label htmlFor="" className='mx-2 text-white font-bold text-xl'>Date:</label>
                                        <input type="date" onChange={(e) => {setDate(e.target.value)}} placeholder='Enter Date Joined Here' className='p-2 w-full outline-none m-2 rounded-md'/>
                                    </div>
                                    <div className="m-2 grid">
                                        <label htmlFor="" className='mx-2 text-white font-bold text-xl'>Description:</label>
                                        <input type="text" onChange={(e) => {setDescription(e.target.value)}} placeholder='Enter Job Description Here'className='p-2 w-full outline-none m-2 rounded-md' />
                                    </div>
                                </div>
                                <div className="btn m-4 text-center">
                                    <button disabled={loading} type='submit' className='m-2 p-2 bg-green-400 text-white font-semibold rounded-md hover:bg-[#55ea55] hover:text-black'>{loading ? "Creating....." : "Create Concierge"}</button>
                                </div>
                            </form>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </>
  )
}

export default NewConcierge