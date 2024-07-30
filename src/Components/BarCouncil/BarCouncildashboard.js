import React, { useEffect } from 'react'
import '../BarCouncil/BarCouncildashboard.css'
import { Link, useNavigate } from 'react-router-dom'
function BarCouncildashboard() {

    const navigate = useNavigate();

    useEffect(() => {
      if (localStorage.getItem("barcouncilId" == null)) {
        navigate("/");
      }
    });

    return (
        <div>
            <div className='d-flex justify-content-center mt-5'>
                <div className='col-11  shadow-lg rounded-4'>
                    <div className=' p-3'>
                        <p className='d-flex justify-content-start fs-3 '>Dashboard</p>
                        <div className='row justify-content-evenly'>
                            <div className='col-sm-3 barcouncil_dashboard_bg border rounded-3 shadow-sm '>
                                <p className='barcouncil_dashboard_bg_text fs-4 mt-3'>Heading-1</p>
                                <div className='d-flex justify-content-between mt-5'>
                                    <p className='barcouncil_dashboard_bg_text'>Text</p>
                                    <p className='barcouncil_dashboard_bg_text'>Number</p>
                                </div>
                            </div>
                            <div className='col-sm-3 barcouncil_dashboard_bg border rounded-3 shadow-sm '>
                                <p className='barcouncil_dashboard_bg_text fs-4 mt-3'>Heading-2</p>
                                <div className='d-flex justify-content-between mt-5'>
                                    <p className='barcouncil_dashboard_bg_text'>Text</p>
                                    <p className='barcouncil_dashboard_bg_text'>Number</p>
                                </div>
                            </div>
                            <div className='col-sm-3 barcouncil_dashboard_bg border rounded-3 shadow-sm '>
                                <p className='barcouncil_dashboard_bg_text fs-4 mt-3'>Heading-3</p>
                                <div className='d-flex justify-content-between mt-5'>
                                    <p className='barcouncil_dashboard_bg_text'>Text</p>
                                    <p className='barcouncil_dashboard_bg_text'>Number</p>
                                </div>
                            </div>
                            <div className='col-sm-3 barcouncil_dashboard_bg border rounded-3 shadow-sm '>
                                <p className='barcouncil_dashboard_bg_text fs-4 mt-3'>Heading-4</p>
                                <div className='d-flex justify-content-between mt-5'>
                                    <p className='barcouncil_dashboard_bg_text'>Text</p>
                                    <p className='barcouncil_dashboard_bg_text'>Number</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='row mt-5  ps-2 px-2'>
                            <table class="table caption-top table-responsive-sm table-borderless border border-3 border-dark ">

                                <thead className='table-dark'>
                                    <tr>
                                        <th scope="col">Heading-1</th>
                                        <th scope="col">Heading-2</th>
                                        <th scope="col">Heading-3</th>
                                        <th scope="col">Heading-4</th>
                                        <th scope="col">Heading-5</th>
                                        <th scope="col">Heading-6</th>
                                        <th scope="col">Heading-7</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td><button className='btn btn-primary rounded-4'>Click</button></td>
                                        <td><button className='btn btn-primary rounded-4'>Click</button></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>@fat</td>
                                        <td><button className='btn btn-primary rounded-4'>Click</button></td>
                                        <td><button className='btn btn-primary rounded-4'>Click</button></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="d-flex justify-content-end"><p><Link to='#' className='text-danger '>view more</Link></p></div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Bottom space */}
            <p className='invisible'>rr</p>
        </div>

    )
}

export default BarCouncildashboard