import { BiHomeAlt } from 'react-icons/bi'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import MenuBar from '../MenuBar/MenuBar'
import { Outlet } from 'react-router-dom'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const MainDashboard = () => {
  const [opnetMenu, setOpenMenu] = useState(false)

  return (
    <div className="container mx-auto mt-5 ">
      <div className=" bg-[#F2F2F2] py-2 flex items-end gap-2 px-4 rounded-md">
        <div className=" flex items-center gap-1 ">
          <BiHomeAlt className="text-xl" /> <p>Homepage</p>
          <MdKeyboardDoubleArrowRight className="text-xl mt-1" />
        </div>

        <div className=" flex items-center gap-1 ">
          <p>Account Settings</p>
          <MdKeyboardDoubleArrowRight className="text-xl mt-1" />
        </div>
        <div className=" flex items-center gap-1 ">
          <p className="font-bold">DASHBOARD</p>
        </div>
      </div>

      {/* dashboard Section  */}
      <div className=" flex gap-5  mt-8 relative">
        {/* menubar  */}
        <div className=" lg:block hidden w-[20%] min-w-[280px] max-h-[550px] mb-3  sticky top-0">
          <MenuBar />
        </div>

        {/* dashboard */}
        <div className="lg:w-[80%] w-full max-w-full">
          <h1 className="text-[16px] py-3 pl-3  border-b border-[rgba(0,0,0,0.31)] shadow-md flex justify-between">
            <BsThreeDotsVertical
              // ref={!opnetMenu && divRef}
              onClick={() => setOpenMenu(true)}
              className="text-xl lg:hidden block cursor-pointer"
            />
            My Account
          </h1>
          <Outlet />
        </div>
        {/* absulate menuvar  */}

        <div
          // ref={divRef}
          className={`${
            opnetMenu ? 'block' : 'hidden'
          } lg:hidden  w-[20%] min-w-[280px] absolute top-0 left-0 !bg-white h-full z-40 px-4 `}
        >
          <div className="absolute top-0 right-0">
            <AiOutlineClose
              onClick={() => setOpenMenu(false)}
              className="text-xl text-primary"
            />
          </div>
          <MenuBar />
        </div>
      </div>
    </div>
  )
}

export default MainDashboard
