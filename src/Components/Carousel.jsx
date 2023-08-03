/* eslint-disable react/prop-types */


const Cards = ({images , title , abbout}) => {
  return (
    <>
      <div>
         <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
	<img src={images} alt="" className="object-cover object-center w-full rounded-md h-[10rem] dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracki uppercase dark:text-violet-400">Quisque</span>
		<h2 className="text-xl font-semibold tracki">Nam maximus purus</h2>
	</div>
	<p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
</div>
    </div>
    </>

  )
}

export default Cards