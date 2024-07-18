import Image from "next/image"

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-0 rotate-12 mix-blend-color-dodge animate-pulse duration-50 z-10 w-[200px] xl:w-[260px]">
        <Image src={'/assets/bulb.png'} width={260} height={200} className="w-full h-full"/>
    </div>
  )
}

export default Bulb