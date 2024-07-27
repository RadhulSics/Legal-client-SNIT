import React from 'react'
import { Link } from 'react-router-dom'
import '../BarCouncil/BarCouncilViewAllCase.css'
function BarCouncilViewAllCase() {
    return (
        <div>
           <div className="bgs ">
            <p className='barcouncil_view_all_case'>All Cases</p>
                <table class="table table-striped table-responsive tab_pos">
                    <thead>
                        <tr>
                            <th scope="col">Case Title</th>
                            <th scope="col">Client Name</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Case Type</th>
                            <th scope="col">Date of Incident</th>
                            <th scope="col">Opponent Name</th>
                            <th scope="col">Case Location</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td><Link to='/BarCouncil_view_detils'><button className='btn btn-outline-dark'>View Details</button></Link></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BarCouncilViewAllCase