import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import useAlert from '../hooks/useAlert'

const HotelContext = createContext()

export const HotelProvider = ({ children }) => {
    const [roomType, setRoomType] = useState([]);
    const [room, setRoom] = useState([]);
    const [user, setUser] = useState([]);
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(null)
    const [no, setNo] = useState(null)
    const [order, setOrder] = useState([])
    const {alertInfo, showHide} = useAlert();
    const [state, dispatch] = useContext(AuthContext);
    const [loading, setLoading] = useState(true)
    const isAuthenticated = state.auth_token !== null;

    const [concierge, setConcierge] = useState([])
    const [reviews, setReviews] = useState([])
    const [editConcierge, setEditConcierge] = useState({
        edit: false,
        items:{}
    })
    const [bookings, setBookings] = useState(() => {
        const savedBooking = localStorage.getItem("Bookings");
        return savedBooking ? JSON.parse(savedBooking) : []
    })


    useEffect(() => {
        fetchRoomType(),
        fetchGuestOrder(),
        fetchConcierge(),
        fetchReviews(),
        fetchRooms(),
        fetchUsers(),
        fetchUser()
    }, []);

    const fetchRoomType = async () => {
        try {
            const response = await fetch("https://hotel-backend-itqc.onrender.com/api/getAll-roomType");
            const data = await response.json()
            setRoomType(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchRooms = async () => {
        try {
            const response = await fetch("https://hotel-backend-itqc.onrender.com/api/getAll-room");
            const rooms = await response.json()
            setRoom(rooms.data)
            setCount(rooms.rooms)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchUsers = async () => {
        try {
            const response = await fetch("https://hotel-backend-itqc.onrender.com/api/getAll-users")
            const data = await response.json()
            setUsers(data)                 
            setNo(data.no)               
        } catch (error) {
            console.log(error)
        }
    }

    const fetchUser = async () => {
        if (isAuthenticated) {
            try {
                const response = await fetch("https://hotel-backend-itqc.onrender.com/api/me",{
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json',
                        'auth-token':`${localStorage.getItem("auth-token")}`
                    }
                })
                const data = await response.json()
                setUser(data)                               
            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
    }
    
    const fetchGuestOrder = async () => {
        try {
            const response = await fetch("https://hotel-backend-itqc.onrender.com/api/getAll-Bookings")
            const data = await response.json()
            setOrder(data)        
        } catch (error) {
            console.log(error)
        }
    }

    const fetchConcierge = async () => {
        try{
            const response = await fetch("https://hotel-backend-itqc.onrender.com/api/getAll-concierges")
            const data = await response.json()
            setConcierge(data)
        }catch (error) {
            console.log(error)
        }
    }

    const fetchReviews = async () => {
        try {
            const response = await fetch("https://hotel-backend-itqc.onrender.com/api/getAll-review")
            const data = await response.json()
            setReviews(data)
        } catch (error) {
            console.log(error)
        }
    }

    // const deleteuser = async (id) => {
    //     try {
    //         const res = await fetch("https://hotel-backend-itqc.onrender.com/api/deleteOne-user", {
    //             method: "DELETE"
    //         })
    //         if(window.confirm("Are you sure you want to delete??")) {
    //             setUser(user.filter((user) => user.id !== id))
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const deleteConcierge = async (id) => {
        try {
            const res = await fetch(`https://hotel-backend-itqc.onrender.com/api/deleteOne-concierge/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": `${localStorage.getItem("auth-token")}`
                },
                body: JSON.stringify({ _id })
            })

            if(window.confirm("Are you sure you want to delete?")) {
                setConcierge(concierge.filter((concierge) => concierge._id !== id))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const editConciergeHandler = (items)=>{
        setEditConcierge({
            edit: true,
            items
        })
    }

    const updateConcierge = async (id, updItems) => {
        try {
            const res = await fetch(`http://localhost:3000/concierge/${id}`,{
                method:'PUT',
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(updItems)
            })
            const data = concierge.map((items)=>{items.id === id ? {...data, ...updItems}: items})
            setConcierge(data)
        } catch (error) {
            console.log(error)
        }
    }

    const addNewOrder = async (aOrder) => {
        try {
            const res = await fetch ("http://localhost:3000/guest", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(aOrder)
            })
            const data = await res.json()
            setOrder([data, ...order])
        } catch (error) {
            console.log(error)
        }
    }

    const deleteOrder = async (id) => {
        try {
            const res = await fetch (`http://localhost:3000/guest/${id}`, {
                method: "DELETE"
            })
            if (window.confirm("Are you sure you want to delete Order?")) {
                setOrder(order.filter((order) => order.id !== id))
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <HotelContext.Provider value={{
            room,
            no,
            roomType,
            user,
            users,
            loading,
            order,
            concierge,
            reviews,
            bookings,
            count,
            alertInfo,
            isAuthenticated,
            showHide,
            deleteConcierge,
            editConcierge,
            editConciergeHandler,
            updateConcierge,
            addNewOrder,
            deleteOrder
        }}>
            {children}
        </HotelContext.Provider>
    )
}

export default HotelContext;