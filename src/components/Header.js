import React from 'react'

function Header() {
  return (
    <ul className='flex ml-auto w-full font-bold'>
        <li className='text-xs text-gray-800 ml auto mr-6 border-green-400 cursor-pointer'>Weather</li>
        <li className='text-xs text-gray-800 mr-6 alert-notice cursos-pointer border-b-2 hover:border-green-400'>Alerts</li>
        <li className='text-xs text-gray-800 mr-6 cursor-pointer border-b-2 hover:border-green-400'>Map</li>
        <li className='text-xs text-gray-800 mr-6 cursor-pointer border-b-2 hover:border-green-400'>Satelite</li>
        <li className='text-xs text-gray-800 ml border-b-2 cursor-pointer hover:border-green-400'>News</li>
    </ul>
  )
}

export default Header