"use client"

import { useEffect } from "react"

const States = () => {
    useEffect(() => {
        let started = false
        const section = document.querySelector(".state-section") as HTMLElement
        const sectionEle = document.querySelectorAll(".state-section>div>div div[data-set]") as NodeListOf<HTMLElement>
        const handleScroll = () => {
            if (window.scrollY > section.offsetTop - 600) {
                if (!started) {
                    sectionEle.forEach((div) => {
                        const goal = parseInt(div.dataset.set || "0")
                        let current = 0
                        const increment = Math.ceil(goal / 50)
                        const counter = setInterval(() => {
                            current += increment
                            if (current >= goal) {
                                div.textContent = String(goal)
                                clearInterval(counter)
                            } else {
                                div.textContent = String(current)
                            }
                        }, 30)
                    })
                    started = true
                }
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const data = [
        {
            dataSet:'99',
            text:'Client satisfaction'
        },
        {
            dataSet:'88',
            text:'Successful projects'
        },
        {
            dataSet:'32',
            text:'Happy Client'
        },
        {
            dataSet:'26',
            text:'Years of Experience'
        },
    ]


    return (
        <>
            <div className="bg-primary py-10 state-section">
                <div className="container mx-auto px-4 flex justify-between text-white gap-18 max-md:gap-10 flex-wrap">
                    {data.map((ob, i)=>(
                        <div key={i} className="text-center">
                            <div className="text-4xl font-bold inline" data-set={ob.dataSet}>0</div><span className="text-4xl font-bold inline">%</span>
                            <p className="text-sm opacity-80 mt-1">{ob.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default States