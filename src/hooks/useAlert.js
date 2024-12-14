import React from "react";
import { useState } from "react";

function useAlert () {
    const [alertInfo, setAlertInfo] = useState({
        message: "",
        type: null,
        show: false,
    })

    const  showHide = (type, message) => {
        setAlertInfo({show:true, type, message})

        setTimeout(() => {
            setAlertInfo((prev) => ({...prev, show:false}))
        }, 5000)
    } 

    return { alertInfo, showHide }
}

export default useAlert;