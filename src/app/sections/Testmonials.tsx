import Btn from "../components/Btn"
import SpecialHead from "../components/SpecialHead"
import Image from "next/image"
import TestImg from '../../../public/images/img/testimonials/img.jpg'
import TestAvatar from '../../../public/images/img/testimonials/avatar.jpg'
import TestQuote from '../../../public/images/img/testimonials/quote.svg'
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"




const Testmonials = () => {
    return (
        <section className="py-14 max-sm:pb-80 testmonial-section">
            <div className="container mx-auto px-4 flex justify-between max-lg:flex-col max-lg:gap-10">
                <div className="w-1/1 md:w-[600px] max-lg:mx-auto max-lg:text-center">
                        <div className="max-lg:flex max-lg:justify-center">
                            <SpecialHead text="TESTIMONIAL"/>
                        </div>
                    <h2 className="text-3xl md:text-4xl font-bold my-4">Build On Trust Proven By Results</h2>
                    <p className="text-sm text-[#000000af] mb-6 p max-lg:text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores minima aspernatur illum et fugiat vitae obcaecati dolor recusandae tempora nihil, impedit nam, soluta voluptas natus dolorum dolorem voluptates ea magni.</p>
                    <Link href={'#contact'}>
                        <Btn text={'WORK WITH US'} bg={'#ffc221'}/>
                    </Link>
                </div>
                <div className=" relative">
                    <div className="w-[500px] max-sm:w-1/1 h-[200px] absolute p-12 max-sm:p-0 bg-white shadow-xl  -bottom-6 
                    -left-[60%] max-lg:-bottom-10 max-lg:left-[50%] max-lg:-translate-x-[50%] max-sm:-bottom-60 border 
                    border-[#eee] flex justify-center items-center ">
                        {/* /////// */}
                            <Carousel className="w-full max-w-xs ">
                                <CarouselContent className="h-[200px]">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index}>
                                        <div>
                                            <Card className=" card-content border border-none rounded-none shadow-none">
                                                <CardContent>
                                                <span>
                                                    {/* content */}
                                                    <div className="flex flex-col  relative">
                                                        <div className="flex gap-4 items-center mb-4">
                                                            <Image src={TestAvatar} alt={'testmonial avatar'} className="w-15 h-15"/>
                                                            <span className="font-bold text-md">Jane Doe</span>
                                                        </div>
                                                            <Image src={TestQuote} alt={'Testimonial quote'}  className=" absolute top-0 right-0 z-20"/>
                                                        <div>
                                                            <p className="text-sm text-[#000000a5] p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, debitis tenetur. Ut magni doloribus repudiandae unde.</p>
                                                        </div>
                                                    </div>
                                                    {/* ///content/// */}
                                                </span>
                                                
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious  className="left-arrow"/>
                                <CarouselNext className="right-arrow"/>
                            </Carousel>
                        {/* /////// */}
                    </div>
                    <Image src={TestImg}  alt={'testmonial image'} className="w-[400px] h-[400px] max-lg:w-[600px] max-lg:h-[600px] max-lg:mx-auto max-md:w-1/1 max-sm:h-[400px]"/>
                </div>
            </div>
        </section>
    )
}

export default Testmonials