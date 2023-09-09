import { Link } from "react-router-dom"

const Breadcrumb = () => {
  return (
    <>
      <div className='container ps-2'>
        <nav className="flex my-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center md:space-x-3">
            <li className="inline-flex items-center">
                <Link to="/" className="inline-flex items-center sm:text-sm text-[9px] font-medium text-gray-500 hover:text-gray-900">
                    <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    Home
                </Link>
            </li>
            <li>
                <div className="flex items-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <Link to="#" className="sm:ml-3 sm:text-sm text-[9px] font-medium md:ml-2 text-gray-500 hover:text-gray-900">All categories</Link>
                </div>
            </li>
            <li>
                <div className="flex items-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <Link to="#" className="sm:ml-1 sm:text-sm text-[9px] font-medium md:ml-2 text-gray-500 hover:text-gray-900">Fruits & Vegetables</Link>
                </div>
            </li>
            <li>
                <div className="flex items-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <Link to="#" className="sm:ml-1 sm:text-sm text-[9px] font-medium md:ml-2 text-gray-500 hover:text-gray-900">Fresh Fruit</Link>
                </div>
            </li>
        </ol>
        </nav>
      </div>
    </>
  )
}

export default Breadcrumb
