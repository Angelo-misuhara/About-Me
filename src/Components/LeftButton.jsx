
import { Link } from 'react-router-dom';
import Aos from 'aos'
import { useEffect } from 'react';

const LeftButton = ({ style, route, content }) => {
  
    useEffect(() => {
    Aos.init({ duration: 1700 })
  })
  return (
    <>
      <button className={style} data-aos='fade'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 7l-5 5m0 0l5 5m-5-5h13" />
      </svg>
        <Link to={route}>{content}</Link>
      </button>
    </>
  )
}

export default LeftButton