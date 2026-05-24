"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SpecialHead from "../components/SpecialHead"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const FQA = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const data =["How long does a construction project usually take ?","Do I need permits for my project ?",
        "what materail do you use ?","Can I make changes after construction starts ?","How much will my construction project cost ?",
        "How do you ensure quality and safety on-site ?"]

const dataList = data.map((text,idx)=>{
    return (
        <div key={idx} onClick={()=>setActiveIndex(idx) } className={`w-1/1 cursor-pointer 
            border-b font-bold text-2xl py-4 text-primary ${activeIndex === idx ? 'clicked content relative pb-12' : ''}`}>
            <div className="flex justify-between select-none items-center gap-4">
                <p>{text}</p>
                <div className="bg-[#ffd76e] py-1 px-2 h-fit  cursor-pointer "><FontAwesomeIcon icon={faPlus}  className=" text-lg transition-all"/></div>
            </div>
        </div>
    )
})

    return (
        <section className="py-14">
            <div className="w-fit mx-auto">
                <SpecialHead text="OUR SERVICES"/>
            </div>
            <div className="w-1/1 md:w-[600px] mx-auto text-center px-4 mb-14">
                <h2 className="text-3xl md:text-4xl font-bold my-4">Got Questions? We`ve Got You Covered</h2>
                <p className="p text-sm text-[#0000009f]">from project planing to final touches, we`ve answered the most common questions to help you make informed decision</p>
            </div>
            <div className=" container mx-auto px-4 flex flex-col">
                {dataList}
            </div>
        </section>
    )
}

export default FQA