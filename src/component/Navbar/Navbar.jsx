/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [state, setState] = useState(false);
    const routes = [
        {
          id: 1,
          name: 'Home',
          path: '/'
        },
        {
          id: 2,
          name: 'About',
          path: '/about'
        },
        {
          id: 3,
          name: 'Products',
          path: '/products'
        },
        {
          id: 4,
          name: 'Services',
          path: '/services'
        },
        {
          id: 5,
          name: 'Contact',
          path: '/contact'
        }
      ];
    return (
        
        <div className='bg-purple-200'>
          <span onClick={()=> setState(!state)} className='md:hidden '>{state ? 
          <XMarkIcon  className='h-10 w-10 text-purple-700'></XMarkIcon> : 
          <Bars3Icon  className='h-10 w-10 text-purple-700'></Bars3Icon>   }</span>
          
        <ul className={`md:flex bg-purple-50 opacity-75 h-auto w-full absolute md:static ${state? 'top-10' : '-top-96'}`}>
            {
                routes.map(route =>
                  <Link 
                  key={route.id} 
                  route={route}>

                  </Link>)
            }
          </ul>
        </div>
    );
};

export default Navbar;