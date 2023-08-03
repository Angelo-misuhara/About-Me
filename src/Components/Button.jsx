import { Link } from 'react-router-dom';
  import Aos from 'aos'
import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const RightButton = ({ style, route, content }) => {
    useEffect(() => {
    Aos.init({ duration: 1700 })
  })
  return (
    <>
      <button className={style} data-aos='fade'>
        <Link to={route}>{content}</Link>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
      </button>
    </>
  )
}

export default RightButton