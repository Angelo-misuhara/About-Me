import { useEffect } from 'react'
import Cards from '../Components/Carousel'
import Aos from 'aos'
const Project1 = () => {
 useEffect(() => {
    Aos.init({ duration: 1700 })
    Aos.refresh();
  })

  const imgProj='/img/PokePc2.png'
  return (
    <div className="flex flex-col justify-center  ">
      <div className='flex flex-col justify-center mt-[5rem] gap-[14rem] ' id='conCard'>
        <div className=' flex justify-center' id='max-md1' >
           <Cards images={imgProj} data-aos="fade-up-left" />
       </div>
       <div className=' flex justify-center'id='max-md2' >
           <Cards images={imgProj} />
        </div>
        <div className=' flex justify-center'id='max-md3' >
           <Cards images={imgProj} />
        </div>
        <div className=' flex justify-center'id='max-md4'>
           <Cards images={imgProj} />
       </div>
       <div className=' flex justify-center'id='max-md5'>
           <Cards images={imgProj} />
       </div>
      </div>
    </div>
  )
}

export default Project1