import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Btn = ({bg,text}:{text:string,bg:string}) => {
  return (
    <div className={`get-box  px-3 py-2 font-medium flex gap-4 items-center cursor-pointer 
    ${bg == 'white' ? "bg-white":""} w-fit bg-[#ffc221]`}>
        <span className='text-black font-bold text-sm tracking-tight'>{text}</span>
        <div className='bg-black text-white px-2 py-1'>
            <FontAwesomeIcon icon={faArrowRight} className='icon text-sm -rotate-40 transition-all'/>
        </div>
    </div>
  )
}

export default Btn