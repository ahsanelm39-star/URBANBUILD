import SpecialHead from "../components/SpecialHead"
import Image from "next/image"
import workImg_1 from '../../../public/images/img/work/renovation.jpg'
import workImg_2 from '../../../public/images/img/work/consulting.jpg'
import workImg_3 from '../../../public/images/img/work/construction.jpg'
import workImg_4 from '../../../public/images/img/work/restoration.jpg'
import { faArrowRight, faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Work = () => {


    const workData = [
        {
            img:workImg_1,
            title:"Renovation"
        },
        {
            img:workImg_2,
            title:"Consulting"
        },
        {
            img:workImg_3,
            title:"Construction"
        },
        {
            img:workImg_4,
            title:"Restoration"
        }
    ]


    const workDataList = workData.map((data, index) => {
        return (
            <div key={index} className="relative overflow-hidden">
                <Image src={data.img} alt={data.title} className=""/>
                <div className="cursor-pointer card absolute w-[90%] p-2 px-4 bg-primary flex justify-between bottom-4 md:-bottom-18  items-center left-4 transition-all duration-300 max-md:show-card">
                    <div>
                        <h3 className="text-white text-xl font-bold mb-2">{data.title}</h3>
                        <div className="flex gap-2">
                            <FontAwesomeIcon icon={faCircleCheck}  className="w-10 text-[#ffd76e]"/>
                            <p className="text-sm text-[#a3a3a3] font-light">your short description</p>
                        </div>
                    </div>
                    <div className='bg-[#ffd76e] text-black px-2 py-1'>
                        <FontAwesomeIcon icon={faArrowRight} className='icon text-sm -rotate-40 transition-all font-bold'/>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <section className="py-14 projects-section" id="projects">
                <div className="w-fit mx-auto mb-6">
                    <SpecialHead text="OUR WORK"/>
                </div>
                <div className="md:w-150 mx-auto text-center mb-14 px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Our Projects</h2>
                    <p className="text-sm text-[#000000a2]">Providing expert services designer to deliver quality and innovation in every project we undertake.</p>
                </div>
                <div className="work-section">
                    {workDataList}
                </div>
        </section>
    )
}

export default Work