// Sidebar.js
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
  return (
    <div  className="bg-[#edf3f7] flex h-screen">
      {/* Sidebar */}
      <div className="bg-[#ffffff] text-white w-64 p-5 space-y-6 ">
        <div className="text-2xl font-semibold text-[#343c6a] fitvora justify-end items-center">
         <img src={logo}/>
          FitVora
          </div>
        <ul className="space-y-4">
          <li className="flex items-center">
            <img src={home}/>
            <a href="#" className="hover:bg-gray-700 p-2 rounded text-[#343c6a]">Home</a>
          </li>
          <li className="flex items-center">
            <img src={mainworkout} />
            <a href="#" className="hover:bg-gray-700 p-2 rounded text-[#343c6a]">Workouts</a>
            <img src={arr}/>
          </li>
          <li className="flex items-center">
            <img src={Barbell}/>
            <a href="#" className="hover:bg-gray-700 p-2 rounded text-[#343c6a]">Workout1</a>
          </li>
          <li className="flex items-center">
            <img src={situps}/>
            <a href="#" className="hover:bg-gray-700 p-2 rounded text-[#343c6a]">Workout2</a>
          </li>
          <li className="flex items-center">
            <img src={pushup}/>
            <a href="#" className="hover:bg-gray-700 p-2 rounded text-[#343c6a]">Workout3</a>
          </li>
          <li className="flex items-center">
            <img src={diet}/>
            <a href="#" className="hover:bg-gray-700 p-2 rounded text-[#343c6a]">Diet Tips</a>
          </li>
          <li className="flex items-center">
            <img src={mealicon}/>
            <a href="#" className="hover:bg-gray-700 p-2 rounded text-[#343c6a]">Healthy Menu</a>
          </li>
          <li className="flex items-center">
            <img src={question}/>
            <a href="#" className="hover:bg-gray-700 p-2 rounded text-[#343c6a]">Most asked questions!</a>
          </li>
          <li className="flex items-center">
            <img src={setting} />
            <a href="#" className="hover:bg-gray-700 p-2 rounded text-[#343c6a]">Setting</a>
          </li>
          <li className="flex items-center">
            <img src={logout} />
            <button>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
