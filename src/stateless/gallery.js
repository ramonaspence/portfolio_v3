import React, {Component} from 'react';
import '../App.css'

import pro from '../media/prostores3.png'
import img from '../media/chefs2.png'

class Gallery extends Component {
    render() {
        return(
            <main className="col-md-12 col gallery-main">
                <div className="project-container">

                    <div className="modal-button">
                        <a className="" type="button" data-toggle="modal" data-target="#projectOne" href="" alt="" >

                            <div className="modal-cover">
                                <img className="modal-image" src={img} alt="" />
                            </div>
                        </a>
                            <div className='project-footer'>
                                <a href="https://github.com/ramonaspence/chefs-notebook" alt=""><i class="fab fa-github"></i></a>
                                <a href="https://ccs-final-project-ramonaspence.herokuapp.com" alt=""><i class="fas fa-external-link-alt"></i></a>
                            </div>
                            
                    </div>

                        <a className="modal-button" type="button" data-toggle="modal" data-target="#projectOne" href="" alt="" >
                                
                            <div className="modal-cover">   
                                <img className="modal-image" src={pro} alt="" />
                            </div>

                            <div className='project-footer'>
                                <i class="fab fa-github"></i><i class="fas fa-external-link-alt"></i>
                            </div>
                        </a>

                        <a className="modal-button" type="button" data-toggle="modal" data-target="#projectOne" href="" alt="" >

                            <div className="modal-cover">
                                <img className="modal-image" src={pro} alt="" />
                            </div>

                            <div className='project-footer'>
                               <a href="https://github.com/ramonaspence/proforma_landing_page" alt=""><i class="fab fa-github"></i></a> 
                               <a href="https://prostores.herokuapp.com" alt=""><i class="fas fa-external-link-alt"></i></a>
                            </div>
                        </a>
                </div>

                <div className="modal project fade" id="project3" tabIndex="-1" aria-labelledby="projectThreeLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content project">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="projectThreeLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    app description here + github links
                                </div>
                                <div className="modal-footer">

                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="modal project fade" id="project2" tabIndex="-1" aria-labelledby="projectTwoLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content project">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="projectTwoLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    app description here + github links
                                </div>
                                <div className="modal-footer">

                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                        Close
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="modal fade" id="projectOne" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog model-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    app description here + github links
                                </div>
                                <div className="modal-footer">
                                        footer
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                        Close
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
            </main>
        )
    }
}
export default Gallery;