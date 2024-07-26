import React from 'react'
import '../BarCouncil/BarcouncilViewAllCaseDetails.css'
import User from '../../Assets/recentIcon5.png';
import img from '../../Assets/about_bg.jpg'
import Mail from '../../Assets/mail.png'
import contact from '../../Assets/contact.png'
import house from '../../Assets/house.png'
import location from '../../Assets/location.png'
function BarCouncilViewAllCaseDeatils() {
    return (
        <div>
            <div className="bgs ">
                <p className='barcouncil_view_all_case'>All Cases Details</p>
                <div className="container p-5">
                    <div class="row">
                        <div className='col-lg-6 col-sm-6'>
                            <div className='continer'>
                                <div className='row border rounded-4 bg-light'>
                                    <p className='case_details_text'>Client Details</p>
                                    <div className='col-6 p-3'>
                                        <img className='img-fluid' src={img} />
                                    </div>
                                    <div className='col-6 p-3'>
                                        <div className='continer'>
                                            <div className='row'>
                                                <div className='col-2'><img src={User} /></div>
                                                <div className='col-9 text-break'><p>gyuftftufhgvyufyt</p></div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-2'><img src={Mail} /></div>
                                                <div className='col-9 text-break'><p>abc@gmail.com</p></div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-2'><img src={contact} /></div>
                                                <div className='col-9 text-break'><p>1234569781</p></div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-2'><img src={house} /></div>
                                                <div className='col-9 text-break'><p>Kerla,Tvm,kazt</p></div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-2'><img src={location} /></div>
                                                <div className='col-9 text-break'><p>Kerla</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-5 mb-5 bg-light'>
                                    <p className='case_details_text'>Opponent Details</p>
                                    <div className='row'>
                                        <div className='col-3'><p>Name</p></div>
                                        <div className='col-8'><p></p></div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-3'><p>Address</p></div>
                                        <div className='col-8'><p></p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-lg-6 ps-5 '>
                            <div className='continer'>
                                <div className='row border rounded-4 bg-light'>
                                    <p className='case_details_text'>Case Details</p>
                                    <div className='row mt-5 mb-4'>
                                        <div className='col-5 ps-5'><p>Case Title</p></div>
                                        <div className='col-1'>:</div>
                                        <div className='col-6'><p className='text-break'>fweewhgyuukyuygtyftydytfftfyugkyftyd7i6kyufyt</p></div>
                                    </div>
                                    <div className='row mb-4'>
                                        <div className='col-5 ps-5'><p>Case Description</p></div>
                                        <div className='col-1'>:</div>
                                        <div className='col-6'><p className='text-break'>fweewhgyuukyuygtyftydytfftfyugkyftyd7i6kyufyt</p></div>
                                    </div>
                                    <div className='row mb-4'>
                                        <div className='col-5 ps-5'><p>Case Type</p></div>
                                        <div className='col-1'>:</div>
                                        <div className='col-6'><p className='text-break'>fweewhgyuukyuygtyftydytfftfyugkyftyd7i6kyufyt</p></div>
                                    </div>
                                    <div className='row mb-5'>
                                        <div className='col-5 ps-5'><p>Date of Request</p></div>
                                        <div className='col-1'>:</div>
                                        <div className='col-6'><p className='text-break'>fweewhgyuukyuygtyftydytfftfyugkyftyd7i6kyufyt</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BarCouncilViewAllCaseDeatils