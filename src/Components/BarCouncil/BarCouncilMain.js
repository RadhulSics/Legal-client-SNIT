import React from 'react'
import BarCouncildashboard from './BarCouncildashboard'
import BarCouncilSidebar from './BarCouncilSidebar'
import BarCouncilLogin from './BarCouncilLogin'
import BarcouncilViewAllAdvocate from './BarcouncilViewAllAdvocate'
import BarCouncilViewDetails from './BarCouncilViewDetails'
import BarCouncilViewComplaints from './BarCouncilViewComplaints'

function BarCouncilMain({ data }) {
    return (
        <div>
            <div class="row">
                <div class="col col-lg-2 col-sm-2">
                    <BarCouncilSidebar />
                </div>

                <div class="col-sm-9 col-lg-9 ">
                    {data === 'dashboard' ? (
                        <BarCouncildashboard />
                    ) : data === 'viewadvocate' ? (
                        <BarcouncilViewAllAdvocate />
                    ): data === 'details' ?(
                        <BarCouncilViewDetails/>
                    ): data === 'complaints'?(
                        <BarCouncilViewComplaints/>
                    ):
                    (
                        <BarCouncildashboard/>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default BarCouncilMain