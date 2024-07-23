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
            <p><Link to='/BarCouncil-dashboard' className='text-decoration-none sidebar_bottom_text fs-6'><p className='text-center d-inline-flex'>Dashboard</p></Link></p>
            <p><Link to='/BarCouncil_view_advocates' className='text-decoration-none sidebar_bottom_text fs-6'><p className='text-center d-inline-flex'>View Advocate</p></Link></p>
            <p><Link to='/BarCouncil_view_complines' className='text-decoration-none sidebar_bottom_text fs-6'><p className='text-center d-inline-flex'>View Complaints</p></Link></p>
            <p><Link to='#' className='text-decoration-none sidebar_bottom_text fs-6'><p className='text-center d-inline-flex'>Text-4</p></Link></p>
            <p><Link to='#' className='text-decoration-none sidebar_bottom_text fs-6'><p className='text-center d-inline-flex'>Text-5</p></Link></p>
            <p><Link to='#' className='text-decoration-none sidebar_bottom_text fs-6'><p className='text-center d-inline-flex'>Text-6</p></Link></p>
          </div>
        
    </div>
  )
}

export default BarCouncilSidebar