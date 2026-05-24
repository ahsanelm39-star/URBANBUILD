import Link from "next/link";
import Btn from "../components/Btn"

const Hero = () => {
  return (
    <section className="relative hero h-[70vh] before:content('') before:absolute before:w-1/1 before:h-1/1 before:bg-[#00000056] flex justify-center items-center">
        <div className="relative container mx-auto flex flex-col items-center px-4">
            <div className="md:w-150 text-center mb-6">
                <h1 className="font-bold h1 uppercase text-white tracking-tight mb-4 md:text-5xl  text-4xl h-t transition-all duration-600"> 
                    <span className="main_color_text">building</span> 
                    robust lasting solutions.
                </h1>
                <p className="text-md text-[#ffffffa2] font-bold tracking-tight">From concept to completion, we ensure every details is optimized for strength and endurance, creating solution that inspire confidence and stand firm for years</p>
            </div>
            <Link href={"#projects"}>
              <Btn bg={'#ffc221'} text={"SEE OUR WORK"} />
            </Link>
        </div>
    </section>
  )
}

export default Hero