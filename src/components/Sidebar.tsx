import React from 'react'
import { CheckmarkCircleOutline, GridOutline, KeyOutline, LogOutOutline } from 'react-ionicons'

const navLinks = [
    {
        title:"Dashboard",
        icon: (
            <GridOutline
            color="#555"
            width={"22px"}
            height="22px" 
            />
        ),
        active:false,
    },
    {
        title:"Quotation",
        icon: (
            <CheckmarkCircleOutline
            color="#555"
            width={"22px"}
            height="22px" 
            />
        ),
        active:true,
    },
    {
        title:"Change Password",
        icon: (
            <KeyOutline
            color="#555"
            width={"22px"}
            height="22px" 
            />
        ),
        active:true,
    }
]

export const Sidebar = () => {
  return (
    <div className="fixed left 0 top-0 md:w-[230px] w-[60px] overflow-hidden h-full flex flex-col">
        <div className="w-full flex items-center md:justify-start justify-center md:pl-5 h-[70px] bg-[#006400]">
            <div className="text-white font-semibold text-2xl md:block hidden">DTDC</div>
            <div className="text-white font-semibold text-2xl md:hidden block">D</div>
        </div>
        <div className='w-full h-[calc(100vh-70px)] border-r flex flex-col md:items-start items-center gap-2 border-r-4 border-[#006400] bg-white py-5 px-3 relative'>
            {navLinks.map((link)=>{
                return(
                    <div key={link.title} className={'flex items-center gap-2 w-full rounded-lg hover:bg-green-300 px-2 py-3 cursor-pointer ${{link.active} ? "bg-orange-300" : "bg-transparent"}'}>
                        {link.icon}
                        <span className='font-medium text-[15px] md:block hidden'>{link.title}</span>
                    </div>
                )})}
                <div className="flex absolute bottom-4 items-center md:justify-start justify-center gap-2 md:w-[90%] w-[70%] rounded-lg hover:bg-red-300 px-2 py-3 cursor-pointer bg-grey-200">
                    <LogOutOutline/>
                    <span className='font-medium text-[15px] md:block hidden'>Sign out</span>
                </div>



        </div>
    </div>
  )
}
