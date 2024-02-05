import React from 'react'
import { useState } from "react";
import './Global.css'
export const Prueba = () => {
    const [activeTab, setActiveTab] = useState(1);

    const changeTab = (tabNumber : number) => {
        setActiveTab(tabNumber);
         console.log(activeTab);

    };

  return (
    <div className="container mx-auto mt-4">
      <ul className="flex bg-gray-800">
        <li
          onClick={()=>changeTab(1)}
          className={`flex-1 text-center py-2 cursor-pointer relative ${
            activeTab === 1 ? 'text-white' : 'text-gray-500'
          }`}
        >
          Botón 1
          {activeTab === 1 && <div className="underline"></div>}
        </li>
        <li
          onClick={()=>changeTab(2)}
          className={`flex-1 text-center py-2 cursor-pointer relative ${
            activeTab === 2 ? 'text-white' : 'text-gray-500'
          }`}
        >
          Botón 2
          {activeTab === 2 && <div className="underline"></div>}
        </li>
      </ul>
      <div className="mt-4">
        Contenido del Tab {activeTab}
      </div>
    </div>
  )
}
