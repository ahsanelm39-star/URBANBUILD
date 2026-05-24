const SpecialHead = ({text}:{text:string}) => {
  return (
    <div className="relative w-fit max-md:m-auto ml-4">
        <span className=" absolute -left-4 top-2 w-2 h-2 bg-[#ffd76e]"></span>
        <span className=" absolute -right-4 top-2 w-2 h-2 bg-[#ffd76e]"></span>
        <span className="text-sm font-medium text-[#000000b0]">{text}</span>
    </div>
  )
}

export default SpecialHead