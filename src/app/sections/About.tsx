import Btn from "../components/Btn"
import Image from 'next/image'
import AboutSmole from '../../../public/images/img/about/signature.svg'
import AboutBig from '../../../public/images/img/about/img.jpg'
import SpecialHead from "../components/SpecialHead"
import Link from "next/link";

const About = () => {
  return (
    <section className="py-20" id="about">
        <div className="container mx-auto px-4 flex justify-between max-md:flex-col max-md:items-center gap-10 about-section">
                <div className="md:w-120 max-md:text-center">
                    <SpecialHead text={'ABOUT US'}/>
                    <h2 className="text-3xl md:text-4xl font-bold mt-4">Focused On Excellence In Every Project</h2>
                    <p className="text-[#000000b0] my-6 mb-8">Our unweavering commitment to excellence drives every project we undertake.
                    From concept to completion, we meticulously craft solutions that embody quality. precision and innovation </p>
                    <div className="w-fit mb-12 max-lg:float-right">
                        <Image src={AboutSmole} alt ="signature" className="max-sm:w-35 "/>
                        <span className="text-sm text-[#000000b0] float-right">Company CEO</span>
                    </div>
                    <Link href={'#contact'}>
                      <Btn bg={'#ffc221'} text={'CONTACT US'}/>
                    </Link>
                </div>
                <div className=" relative h-fit w-fit">
                    <span className=" absolute -top-4 -left-4 bg-[#ffd76e] w-1/1 h-1/1"></span>
                    <Image src={AboutBig} alt ="about image" width={444} height={493} className=" relative"/>
                </div>
            </div>
    </section>
  )
}

export default About