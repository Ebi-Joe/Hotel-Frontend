import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true)

    const fetchContacts = async () => {
        try {
            const response = await fetch("https://hotel-backend-itqc.onrender.com/api/getAll-contact")
            const contacts = await response.json()
            setContacts(contacts)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchContacts()
    })

  return (
    <>
        <div className="flex">
            <AdminSidebar/>
            <div className="">
            <div className="mt-12 ml-[5em] md:ml-[17em] max-w-5xl mx-auto">
                    {loading ? (
                        <div className="">
                            <div className="flex-col gap-4">
                                <div className="w-[10rem] h-[10rem] border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                                    <div className="w-[10rem] h-[10rem] border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
                                </div>
                            </div>
                        </div> 
                    ):(
                        contacts.map((items, index) => (
                        <div key={index} className="bg-green-50 m-4 p-6 border-2 rounded-lg">
                            <div className="mx-2">
                                <h2 className='text-2xl font-semibold'>{items.name}</h2>
                                <h2 className='font-semibold text-green-700 py-2'>#CN-{items._id}</h2>
                            </div>
                            <div className="mx-2">
                                <h2 className='text-2xl'>Email: {items.email}</h2>
                                <h2 className='text-[1.4rem] font-semibold py-1'>Message: {items.message}</h2>
                            </div>
                        </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    </>
  )
}

export default Contacts