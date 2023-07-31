
import { Link } from 'react-router-dom';

const LeftButton = ({style,route,content}) => {
  return (
    <>
      <button className={style}>
        <Link to={route}>{content}</Link>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 7l-5 5m0 0l5 5m-5-5h13" />
</svg>

      </button>
    </>
  )
}

export default LeftButton