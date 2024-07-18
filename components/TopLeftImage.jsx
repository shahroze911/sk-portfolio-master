
import Image from 'next/image';


const TopLeftImage = () => {
  return (
    <div className='absolute  left-0 top-0   z-10 w-[200px]  xl:w-[500px]  opacity-20 rotate-[25deg]'>
        
        {/* <Image src="/assets/smoke2.gif" width={400} height={400} alt=''/> */}
        <Image src="/assets/topcornersplash.png" width={500} height={400} alt='Top Corner Color Splash'/>

        
        
        {/* <ParticlesContainer/> */}

    

    </div>
    
  )
}

export default TopLeftImage