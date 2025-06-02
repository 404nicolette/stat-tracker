import React, { useState } from 'react';

const Nav = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='fixed top-0 left-0 w-full h-14 border-b-2 z-10'>

            <div className='flex flex-row border-2 border-amber-500 justify-between items-center px-3'>
                <h4 className='font-taruno text-[1.5rem]'>ace//</h4>


                {/* dropdown menu for mobile*/}
                <div onClick={() => setOpen(!open)} className="cursor-pointer" >

                    <svg className='p-2' xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 128 128" id="apps">
                        <circle cx="64" cy="64" r="8" fill="#1F1F1F"></circle>
                        <circle cx="90" cy="64" r="8" fill="#1F1F1F"></circle>
                        <circle cx="38" cy="64" r="8" fill="#1F1F1F"></circle>
                        <circle cx="64" cy="38" r="8" fill="#1F1F1F"></circle>
                        <circle cx="90" cy="38" r="8" fill="#1F1F1F"></circle>
                        <circle cx="38" cy="38" r="8" fill="#1F1F1F"></circle>
                        <circle cx="64" cy="90" r="8" fill="#1F1F1F"></circle>
                        <circle cx="90" cy="90" r="8" fill="#1F1F1F"></circle>
                        <circle cx="38" cy="90" r="8" fill="#1F1F1F"></circle>
                    </svg>

                   {open && (
                        <div className="absolute top-16 right-5 w-40 bg-white rounded-md shadow-lg z-50 ">
                            <a href='#' className="font-kufi block p-4 text-gray-800 hover:bg-gray-100">tournaments</a>
                            <a href='#' className="font-kufi block p-4 text-gray-800 hover:bg-gray-100">teams</a>
                            <a href='#' className="font-kufi block p-4 text-gray-800 hover:bg-gray-100">players</a>
                            <a href='#' className="font-kufi block p-4 text-gray-800 hover:bg-gray-100">national team</a>
                        </div>
                    )}

                </div>

                
            </div>

        </div>
    )
}
export default Nav