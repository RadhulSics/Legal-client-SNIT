import React, { useEffect } from 'react'
import '../BarCouncil/BarCouncilSidebar.css'
import { Link, useNavigate } from 'react-router-dom'
function BarCouncilSidebar() {

  const navigate = useNavigate();

    useEffect(() => {
      if (localStorage.getItem("barcouncilId" == null)) {
        navigate("/");
      }
    });

  return (
    <div>
        
          <div className='row Sidebar_top p-2'>
          <p className='fs-4 Sidebar_top_text mt-5'>Welcome</p>
          <p className='fs-5 Sidebar_top_text'>All Sysytems are running smoothly</p>
          </div>
          <div className='row sidebar_bottom pt-5'>
            <p><Link to='/BarCouncil-dashboard' className='text-decoration-none sidebar_bottom_text fs-6'><p className='text-center d-inline-flex'>Dashboard</p></Link></p>
            <p><Link to='/BarCouncil_view_advocates' className='text-decoration-none sidebar_bottom_text fs-6'><p className='text-center d-inline-flex'>View Advocate</p></Link></p>
            <p><Link to='/BarCouncil_view_complines' className='text-decoration-none sidebar_bottom_text fs-6'><p className='text-center d-inline-flex'>View Complaints</p></Link></p>
            <p><Link to='/BarCouncil_view_case' className='text-decoration-none sidebar_bottom_text fs-6'><p className='text-center d-inline-flex'>View Cases</p></Link></p>
            <p><Link to='/BarCouncil_view_d-baradvocate' className='text-decoration-none sidebar_bottom_text fs-6'><p className='text-center d-inline-flex'>Debarred Advocates</p></Link></p>
            <p><Link to='/view_all_appeals' className='text-decoration-none sidebar_bottom_text fs-6'><p className='text-center d-inline-flex'>Appeals</p></Link></p>
          </div>
        
    </div>
  )
}

export default BarCouncilSidebar