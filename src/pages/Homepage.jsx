
import { useEffect, useState } from 'react'
import RightButton from '../Components/Button'
import Aos from 'aos'



const Homepage = () => {

  useEffect(() => {
    Aos.init({ duration: 1700 })
  })

  const routeSkills = '/Skills'
  const routeProjects = '/Projects'

  const Skills = 'Skills'
  const Project = 'Project'
  const style = 'cta-pr-btn px-4 py-2 text-[#221115] bg-[#D3E3E9] hover:bg-[#6FB8A7] font-medium rounded-md inline-flex items-center'
  
  const images = ['/img/imgMainPage.jpg', '/img/imgMainPage2.jpg', '/img/imgMainPage3.jpg', '/img/imageMainPage4.jpg', '/img/imageMainPage5.jpg']
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const contacts =['/img/facebook-24.png','/img/instagram-24.png','/img/linkedin-24.png']\

  const contacts = [
    {
      link: 'https://www.instagram.com/gel.hong/',
      img:'/img/instagram-24.png'
    },
     {
      link: 'https://www.facebook.com/angelo.yocor?mibextid=ZbWKwL',
      img:'/img/facebook-24.png'
    },
      {
      link: 'https://www.linkedin.com/in/angelo-yocor-0885aa254/',
      img:'/img/linkedin-24.png'
    }
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the currentImageIndex to switch to the next image.
      setCurrentImageIndex(prevIndex =>
        (prevIndex + 1) % images.length // Loop back to the first image after reaching the last one.
      );
    }, 2200); // 2000 milliseconds (2 seconds)

    return () => clearInterval(interval); // Clean up the interval when the component unmounts.
  }, [images.length]);
  return (
    <>
      <div className='bg-[#FCF8F9] w-screen pb-3 grid pt-[3rem]  grid-cols-2 gap-3' id='homePage'>
        
          <div className='hidden rounded w-2/6' id='phonmeIMG' data-aos='fade-up-right'>
          <img src="/img/imageMainPage5.jpg" alt="" className='border-md' />
        </div>
          <div className=" px-8 flex flex-col" id="intro-left">
              <div className=" flex flex-col " id='title'>
              <h1 className="font-semibold text-6xl"  data-aos='slide-right'>
                FrontEnd
                <span className="text-4xl text-[#4FA165]"> Developer</span>
              </h1>
            </div>
            <div className="flex flex-col mt-3 text-justify"  data-aos='fade-up'>
              <p>
                Hi! Im Angelo. Im aspiring Web Dev, My creativity is the compass that guides me through the boundless ocean of coding possibilities. I approach each project fearlessly, experimenting, and pushing the boundaries to create unforgettable digital experiences.
            </p>
            <div className='flex flex-row gap-2 pt-3'>
               {contacts.map((img, key) => (
                 <a href={img.link} rel='noreferrer' target='_blank' key={key}>
                    <img src={img.img} alt="" className='w-[1rem]'/>
              </a>
            ))}
            </div>
            </div>
            {/*mt-20  */}
            <div className='mt-[4.5rem] flex flex-col items-start gap-7' id='buttons-Homepage' data-aos='fade'>
              <RightButton route={routeSkills} content={Skills} style={style} />
              <RightButton  route={routeProjects} content={Project} style={style} />
            </div>
          </div>
            <div className=" flex relative  justify-center pt-[11rem]" id='imgsec'>
            {images.map((img, index) => (
              <img key={index} src={img} alt="" className={` imgg rounded-md w-3/6 absolute opacity-0 ${index === currentImageIndex ? 'visible' : ''}`} />
              ))}
          </div>
          </div>
       
    </>
  )
}

export default Homepage