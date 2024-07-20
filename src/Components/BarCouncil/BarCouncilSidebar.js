import React from 'react'
import '../BarCouncil/BarCouncilSidebar.css'
import { Link } from 'react-router-dom'
function BarCouncilSidebar() {
  return (
    <div>
        
          <div className='row Sidebar_top p-2'>
          <p className='fs-4 Sidebar_top_text mt-5'>Welcom</p>
          <p className='fs-5 Sidebar_top_text'>All Sysytems are running smoothly</p>
          </div>
          <div className='row sidebar_bottom pt-5'>
          <Link to='#' className='text-decoration-none sidebar_bottom_text fs-6'><p>Text-1</p></Link>
            <Link to='#' className='text-decoration-none sidebar_bottom_text fs-6'><p>Text-2</p></Link>
            <Link to='#' className='text-decoration-none sidebar_bottom_text fs-6'><p>Text-3</p></Link>
            <Link to='#' className='text-decoration-none sidebar_bottom_text fs-6'><p>Text-4</p></Link>
            <Link to='#' className='text-decoration-none sidebar_bottom_text fs-6'><p>Text-5</p></Link>
            <Link to='#' className='text-decoration-none sidebar_bottom_text fs-6'><p>Text-6</p></Link>
          </div>
        
    </div>
  )
}

export default BarCouncilSidebar