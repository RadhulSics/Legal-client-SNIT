import React from 'react'
import BarcouncilNav from './BarcouncilNav'
import BarCouncilSidebar from './BarCouncilSidebar'
import BarCouncildashboard from './BarCouncildashboard'

function BarCouncilWholedashboard() {
    return (
        <div>
             <BarcouncilNav/>
             <div class="row">
    <div class="col col-lg-2 col-sm-2">
      <BarCouncilSidebar/>
    </div>
   
    <div class="col-sm-9 col-lg-9 ">
    <BarCouncildashboard/>
    </div>
  </div>
        </div>
    )
}

export default BarCouncilWholedashboard