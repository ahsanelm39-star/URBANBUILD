'use client'
import { faComment, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Btn from "../components/Btn"
import { faFacebookF, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"

const Contact = () => {

    const [inptsValues, setInputsValues] = useState({
        name:'',
        email:'',
        number:'',
        select:'',
        msg:'',

    })
    return (
        <section className="py-10" id="contact">
            <div className="container mx-auto px-4 p-10 border-t-4 border-[#ffd76e] flex gap-10 max-lg:gap-14 shadow-xl max-lg:flex-col contact-section">
                <div className="px-10 max-xl:px-4 min-lg:border-r-2 max-lg:border-b-2 border-[#e5e5e5]">
                    <div className="mb-6 min-lg:w-100 max-lg:w-1/1 max-lg:text-center">
                        <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                        <p className="text-sm text-[#0000009e] p">Lorem ipsum unde veritatis architecto animi ipsam doloribus nostrum, repellat nulla eaque ipsa laborum fugit dolores aliquid exercitationem.</p>
                    </div>
                    <div>
                        <div className="flex gap-6 mb-8">
                            <FontAwesomeIcon icon={faComment} className="text-[#ffc221] text-2xl"/>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Chat to us</h3>
                                <p className="text-sm text-[#0000009e] p mb-2">Our freinly team is here to help</p>
                                <span className="text-sm font-bold">Hi@urbanbuild.com</span>
                            </div>
                        </div>
                        <div className="flex gap-6 mb-8">
                            <FontAwesomeIcon icon={faLocationDot} className="text-[#ffc221] text-2xl"/>
                            <div>
                                <h3 className="text-xl font-bold mb-2">COffice</h3>
                                <p className="text-sm text-[#0000009e] p mb-2">Come and say hello at our office</p>
                                <span className="text-sm font-bold">1250 Brickstone Ave, Dallas, TX 75201, USA</span>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <FontAwesomeIcon icon={faPhone} className="text-[#ffc221] text-2xl"/>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Phone</h3>
                                <p className="text-sm text-[#0000009e] p mb-2">Mon-Fri from 8am to 5pm</p>
                                <span className="text-sm font-bold">+1(555)000-000</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-8 justify-center my-12">
                        <FontAwesomeIcon icon={faFacebookF} width={11} className='cursor-pointer transition-all hover:text-[#ffc221]'/>
                        <FontAwesomeIcon icon={faYoutube} width={14} className='cursor-pointer transition-all hover:text-[#ffc221]'/>
                        <FontAwesomeIcon icon={faXTwitter} width={14} className='cursor-pointer transition-all hover:text-[#ffc221]'/>
                        <FontAwesomeIcon icon={faInstagram} width={14} className='cursor-pointer transition-all hover:text-[#ffc221]'/>
                    </div>
                </div>
                <div className="px-10 max-xl:px-4 ">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 md:text-4xl">Request A Qoute</h2>
                        <p className="text-sm text-[#0000009e] p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores pariatur modi eum, consectetur, corrupti placeat eligendi praesentium aliquid facere similique</p>
                    </div>
                    <form className="mt-6">
                        <input value={inptsValues.name} onChange={(e)=> setInputsValues({...inptsValues, name: e.target.value})} 
                        type="text" className="w-1/1 outline-none border-2 border-[#eee] mb-4 h-12 pl-4" placeholder="Full Name"/>
                        <input value={inptsValues.email} onChange={(e)=> setInputsValues({...inptsValues, email: e.target.value})} 
                        type="email" className="w-1/1 outline-none border-2 border-[#eee] mb-4 h-12 pl-4" placeholder="Email address"/>
                        <div className="flex gap-2">
                            <input value={inptsValues.number} onChange={(e)=> setInputsValues({...inptsValues, number: e.target.value})} 
                            type="text" className="w-1/2 outline-none border-2 border-[#eee] mb-4 h-12 pl-4" placeholder="Phone Number"/>
                            <select  value={inptsValues.select} onChange={(e)=> setInputsValues({...inptsValues, select: e.target.value})} className="w-1/2 outline-none border-2 border-[#eee] mb-4 h-12 pl-4">
                                <option>construction</option>
                                <option>Two</option>
                                <option>Three</option>
                            </select>
                        </div>
                        <textarea value={inptsValues.msg} onChange={(e)=> setInputsValues({...inptsValues, msg: e.target.value})} className="outline-none border-2 border-[#eee] mb-4 p-4 w-1/1 h-50" placeholder="Enter your message"></textarea>
                        <Btn bg="" text="SEND MESSAGE"/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact