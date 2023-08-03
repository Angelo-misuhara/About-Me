
import { useEffect } from 'react'
import RightButton from '../Components/Button'
import LeftButton from '../Components/LeftButton'
import Aos from 'aos'


const Skills = () => {

  useEffect(() => {
    Aos.init({duration:1700})
  })

  const routeProjects = '/Projects'
  const Project = 'Project'
  const routeMain = '/'
  const Main = 'Main'
    const style = 'cta-pr-btn px-4 py-2 text-[#221115] bg-[#D3E3E9] hover:bg-[#6FB8A7] font-medium rounded-md inline-flex items-center'


  const lang =['/img/java-32px.png','/img/mysql-32px.png','/img/java-script-32px.png','/img/react-32px.png','/img/c++-32px.png','/img/tailwind-32x.png']

  return (
    <>
      <div className='h-screen w-screen bg-[#FCF8F9]  grid grid-cols-1 place-content-center pt-[2rem] gap-4 '>
          <div className=''>
            <h1 className='text-4xl text-center font-medium'data-aos='fade'>
             > <span className='text-5xl 'data-aos='zoom-in-up'> Tech Stack </span>
            </h1>
          </div>

          <div className='flex flex-wrap justify-center gap-11 pt-9 ' id='imgSkil'>
          {lang.map((img, key) => (
            <div data-aos="fade-up" data-aos-delay={`${key * 150}`} key={key} >
               <img src={img} alt="" className='img max-w-xs transition duration-600 ease-in-out hover:-translate-y-3 hover:scale-100' />
            </div>
             
            ))}
          </div>
          <div className='grid mt-8 grid-flow-row place-content-center' id="ps"  data-aos="fade-up">
            <p className='text-justify  w-[50rem]'id='paragrapSkill'>
              My programming journey has been an exciting adventure. Starting from scratch, I tackled challenges, gained confidence, and now enjoy creating projects of my own. The learning never stops, and I'm thrilled to explore more.
            </p>
          </div>
          <div className='flex flex-row justify-center gap-4 mt-[5rem]' data-aos="fade">
            <LeftButton route={routeMain} content={Main} style={style} />
            <RightButton route={routeProjects} content={Project} style={style} />
          </div>
          
        </div>
    </>
  )
}

export default Skills