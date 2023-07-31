// import React from 'react'
// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import RightButton from '../Components/Button'



const Homepage = () => {

  const routeSkills = '/Skills'
  const routeProjects = '/Projects'

  const Skills = 'Skills'
  const Project = 'Project'
  const style = 'cta-pr-btn px-4 py-2 text-[#16151a] font-medium bg-indigo-50 rounded-full inline-flex items-center'
  
  const images = ['/img/imgMainPage.jpg', '/img/imgMainPage2.jpg', '/img/imgMainPage3.jpg']
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the currentImageIndex to switch to the next image.
      setCurrentImageIndex(prevIndex =>
        (prevIndex + 1) % images.length // Loop back to the first image after reaching the last one.
      );
    }, 2500); // 3000 milliseconds (3 seconds)

    return () => clearInterval(interval); // Clean up the interval when the component unmounts.
  }, [images.length]);
  return (
    <>
      <div className='bg-[#E5F9DB] w-screen h-screen'>
        <div className="grid relative pt-20  grid-cols-2 gap-3" id='homePage'>
          <div className=" px-8 flex flex-col" id="intro-left">
            <div className=" flex flex-col " id='title'>
              <h1 className="font-semibold text-6xl">
                FrontEnd
                <span className="text-4xl text-[#A2A378]"> Developer</span>
              </h1>
            </div>
            <div className="flex mt-3 text-justify">
              <p>
                Hi! Im Angelo. Im aspiring Web Dev, My creativity is the compass that guides me through the boundless ocean of coding possibilities. I approach each project fearlessly, experimenting, and pushing the boundaries to create unforgettable digital experiences.
              </p>
            </div>
            {/*mt-20  */}
            <div className='mt-20 flex flex-col items-start gap-7' id='buttons-Homepage'>
              <RightButton route={routeSkills} content={Skills} style={style} />
              <RightButton  route={routeProjects} content={Project} style={style} />
            </div>
          </div>
            <div className=" flex relative  justify-center pt-[11rem]" id='imgsec'>
            {images.map((img, index) => (
              <img key={index} src={img} alt="" className={` imgg z-10 rounded-md w-3/6 absolute opacity-0 ${index === currentImageIndex ? 'visible' : ''}`} />
              ))}
          </div>
        </div>
      </div>
    </>
//  className='rounded-md w-3/6 '
  )
}

export default Homepage