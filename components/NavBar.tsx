"use client"
import React, { useState } from 'react'

interface NavElement {
  id: number;
  title: string;
  logo?: string;
}

interface NavBarProps {
  navElement: NavElement[];
}

const NavBar: React.FC<NavBarProps> = ({ navElement }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleMenu() {
    setToggleMenu(!toggleMenu);
  }

  console.log(toggleMenu);

  return (
    <div className={`left-0 top-0 border h-full bg-gray-800 absolute text-white ${toggleMenu?" w-[300px] ":"w-[100px]"}`}>
      <div className="flex justify-center items-center h-16 mt-5">

        {toggleMenu?
          <div className='flex justify-center items-center'>
              <a href="" className="flex justify-center items-center p-3">
                <img
                  src="/user-logo.png"
                  alt="user-logo"
                  className="w-12 h-12 bg-white border rounded-full p-2 border-black"
                />
              </a>
              <p>User Name</p>
          </div>
          :
          <div className='pl-4'>
            <a href="" className="flex justify-center items-center">
                <img
                  src="/user-logo.png"
                  alt="user-logo"
                  className="w-12 h-12 bg-white border rounded-full p-2 border-black"
                />
          </a>

          </div>
  
        }
        

        <button className={`${toggleMenu?"ml-6":"ml-2"}`} onClick={handleMenu}>
          {toggleMenu?"<":">"}
        </button>
      </div>


      <div>
        {
          navElement.map((item) => (
            <div className={`${toggleMenu?'p-3 justify-center text-center':'p-2'}`} key={item.id}>
              <ul>
                <li>
                  <a href="" className="flex text-center items-center justify-center">
                    {toggleMenu?
                      <p className="p-1">{item.title}</p>
                      :
                      <img src={item.logo} className="items-center justify-center w-12 h-12 bg-white border rounded-full p-2 border-black"/>}
                  </a>
                </li>
              </ul>
            </div>
          ))
        }
      </div>
      <div className='absolute bottom-3 w-full flex justify-center p-3 items-center'>
        <img src="/cart.png" alt="" className="w-12 h-12 bg-white border rounded-full p-2 border-black"/>
        {toggleMenu?<p className='p-2'>Cart</p>:""}
      </div>
      
    </div>
  );
};

export default NavBar;
