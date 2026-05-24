import Image from "next/image"
import logo from '../../../public/images/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment, faLocationArrow, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <footer className="bg-primary pt-14">
            <div className="container mx-auto px-4 flex flex-wrap gap-6 max-sm:gap-12 justify-between">
                <div className="w-80">
                    <Image src={logo} alt={"lgo"} height={48} width={230} className='max-md:w-50 mr-8'/>
                    <p className="p text-sm text-[#c3c3c3] pt-6">Lorem ipsum dolor Nihil nam eveniet nostrum saepe? Sint ut pariatur perspiciatis.</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white mb-6">Contact</h2>
                    <div className="flex gap-4 mb-6">
                        <FontAwesomeIcon icon={faLocationDot} className="text-[#ffc221] text-xl -mr-2"/>
                        <p className="p text-sm text-[#c3c3c3]">1250 Brickstone Ave, USA</p>
                    </div>
                    <div className="flex gap-4 mb-6">
                        <FontAwesomeIcon icon={faPhone} className="text-[#ffc221] text-xl -mr-2"/>
                        <p className="p text-sm text-[#c3c3c3]">+1(555)000-000</p>
                    </div>
                    <div className="flex gap-6">
                        <FontAwesomeIcon icon={faComment} className="text-[#ffc221] text-xl -mr-2"/>
                        <p className="p text-sm text-[#c3c3c3]">Hi@urbanbuild.com</p>
                    </div>
                </div>
                <div className="w-80">
                    <h2 className="text-2xl font-bold text-white ">Newsletter</h2>
                    <p className="p text-sm text-[#c3c3c3] pt-6">Lorem ipsum dolor Doloremque expedita ea ullam autem voluptatibus rem architecto.</p>
                    <div>
                        <div className="flex items-center h-[50px] mt-4">
                            <input type="text" className="bg-[#232528] outline-none text-white pl-4 w-1/1  h-1/1"  placeholder="Enter your email"/>
                            <div className='arrwo-box bg-[#ffc221] w-fit text-black p-4 cursor-pointer h-1/1'>
                                <FontAwesomeIcon icon={faLocationArrow} className='icon text-lg transition-all'/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="collect text-white ">
                <div className="flex items-center justify-between text-center border-t border-[#4b4b4b] mt-8 py-6 max-sm:flex-col gap-6">
                    <p className="p text-sm text-[#ddd] font-bold">Copyright &copy; at 2025 urbanBuild. All rights reseved </p>
                    <div className="flex gap-8 justify-center">
                        <FontAwesomeIcon icon={faFacebookF} width={11} className='cursor-pointer transition-all hover:text-[#ffc221]'/>
                        <FontAwesomeIcon icon={faYoutube} width={14} className='cursor-pointer transition-all hover:text-[#ffc221]'/>
                        <FontAwesomeIcon icon={faXTwitter} width={14} className='cursor-pointer transition-all hover:text-[#ffc221]'/>
                        <FontAwesomeIcon icon={faInstagram} width={14} className='cursor-pointer transition-all hover:text-[#ffc221]'/>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer