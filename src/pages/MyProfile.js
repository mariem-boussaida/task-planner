import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyProfile() {
    return (
        
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-10 mt-5 pt-5'>
                        <div className='row shadow-lg'>
                            <div className='col-sm-4 bg-info rounded-start'>
                                <div className='card-block text-center text-white'>
                                    <i className='bi bi-person-fill h1 mt-4 ml-5'></i>
                                    <h2 className='font-weight-bold mt-4'>John</h2>
                                    <p>Web Designer</p>
                                    <i className='bi bi-pencil-square h4 mt-4'></i>
                                </div>
                            </div>
                            <div className='col-sm-8 bg-white rounded-end'>
                                <h3 className='mt-3 text-center'>Information</h3>
                                <hr className='bg-primary mt-0 w-25' />
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <p className='font-weight-bold'>Email</p>
                                        <h6 className='text-muted'>john10@gmail.com</h6>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p className='font-weight-bold'>Phone</p>
                                        <h6 className='text-muted'>+216 25106024</h6>
                                    </div>
                                </div>
                                <hr className='bg-primary' />
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <p className='font-weight-bold'>Country</p>
                                        <h6 className='text-muted'>Tunisia</h6>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p className='font-weight-bold'>City</p>
                                        <h6 className='text-muted'>Sfax</h6>
                                    </div>
                                </div>
                                <hr className='bg-primary' />
                                <ul className="list-unstyled d-flex justify-content-center mt-4">
                                    <li><a href="#"><i className='bi bi-facebook px-3 h4 text-info'></i></a></li>
                                    <li><a href="#"><i className='bi bi-linkedin px-3 h4 text-info'></i></a></li>
                                    <li><a href="#"><i className='bi bi-twitter px-3 h4 text-info'></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default MyProfile;
