"use client"

import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

const GoUp = () => {
    const [ showBtn, stShowBtn ] = useState(false)

    useEffect(()=>{
        const goUp = ()=>{
            if(window.scrollY > 500){
                stShowBtn(true)
            }else{
                stShowBtn(false)
            }
        }
        window.addEventListener("scroll",goUp)
        return ()=>{
            window.removeEventListener("scroll", goUp)
        }
    },[])


    return (
        <div onClick={()=>{
            window.scrollTo(0,0)
        }} className={`fixed bottom-4 -right-10 bg-[#ffc221] p-2 cursor-pointer transition-[1s] 
            hover:bg-[#e8b21d] arow z-20 ${showBtn ? "right-4" : ""} `}>
            <FontAwesomeIcon icon={faArrowUp} />
        </div>
    )
}

export default GoUp