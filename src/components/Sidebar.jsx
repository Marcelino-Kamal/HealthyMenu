import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import logo from '../assets/iconfinder_vector_65_09_473792 1.svg';
import Barbell from '../assets/Barbell.svg';
import arr from '../assets/arrow-down-icon.svg';
import home from '../assets/home 2.svg';
import mainworkout from '../assets/main workout icon.svg'
import mealicon from '../assets/meals icon.svg';
import pushup from '../assets/Pushups.svg';
import question from '../assets/questions icon.svg';
import setting from '../assets/setting icon.svg';
import situps from '../assets/Sit Ups.svg';
import diet from '../assets/Vector.svg';
import logout from '../assets/SignOut.svg';


const Sidebar = () => {
  const location = useLocation();
  return (
    <div  className="bg-[#edf3f7] flex h-screen">
      {/* Sidebar */}
      <div className="bg-[#ffffff] text-white w-64 p-5 space-y-6 flex-shrink-0 h-screen ">
        <div className="flex items-center space-x-2 text-2xl font-bold text-[#343c6a] mb-10 fitvora">
         <img src={logo} className="h-8 w-8"/>
          FitVora
          </div>
        <ul className="flex flex-col space-y-20">
          <li className="flex items-center">
            <Link to="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-200 text-[#343c6a]">
            <img src={home} className="h-5 w-5" alt="Home" />
             <span>Home</span>
            </Link>
          </li>
          <li className="flex items-center">
          <Link to="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-200 text-[#343c6a]">
            <img src={mainworkout} className='h-5 w-5' alt='bar' />
            <span>WorkOuts</span>
            <img src={arr} className='h-5 w-5' alt='bar'/>
            </Link>
          </li>
          <li className="flex items-center">
              <Link to="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-200 text-[#343c6a]">
                <img src={Barbell} className='h-5 w-5' alt='bar'/>
                <span>WorkOut 1</span>
              </Link>
          </li>
          <li className="flex items-center">
              <Link to="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-200 text-[#343c6a]">
                <img src={pushup} className='h-5 w-5' alt='push'/>
                <span>WorkOut 2</span>
              </Link>
          </li>
          <li className="flex items-center">
              <Link to="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-200 text-[#343c6a]">
                <img src={situps} className='h-5 w-5' alt='situp'/>
                <span>WorkOut 3</span>
              </Link>
          </li>
          <li className="flex items-center">
              <Link to="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-200 text-[#343c6a]">
                <img src={diet} className='h-5 w-5' alt='Diet'/>
                <span>Diet Tips</span>
              </Link>
          </li>
          <li className={`flex items-center ${location.pathname === '/HealthyMenu' ? 'bg-[#f0f4ff] text-[#0056d2] font-bold rounded-lg' : '' }`}>
            <Link to="/HealthyMenu" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-200 text-[#343c6a]">
            <img src={mealicon} className='h-5 w-5' alt='meal'/>
            <span>Healthy Menu</span>
            </Link>
          </li>
          <li className="flex items-center">
              <Link to="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-200 text-[#343c6a]">
                <img src={question} className='h-5 w-5' alt='question'/>
                <span>Most Asked Questions</span>
              </Link>
          </li>
          <li className="flex items-center">
              <Link to="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-200 text-[#343c6a]">
                <img src={setting} className='h-5 w-5' alt='setting'/>
                <span>Setting</span>
              </Link>
          </li>
          <li className="flex items-center">
             <Link to="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-200 text-[#343c6a]">
                <img src={logout} className='h-5 w-5' alt='logout'/>
                <span>LogOut</span>
              </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
