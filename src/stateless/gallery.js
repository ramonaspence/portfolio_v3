import React, {Component} from 'react';
import '../App.css'

import rail from '../media/rail.png'
import pro from '../media/prostores3.png'
import img from '../media/chefs2.png'



class Gallery extends Component {
    render() {
        return(
            <main className="col-12 gallery-main">
                <div className="project-container">

                    <div className="modal-card">
                        <button className="modal-button" data-toggle="modal" data-target="#project1">
                            <div className="modal-cover">
                                <img className="modal-image" src={img} alt="" />
                                <i class="fas fa-expand-alt"></i>
                            </div>
                        </button>
                            <div className='modal-card-footer'>
                                <a href="https://github.com/ramonaspence/chefs-notebook" alt="" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                <a href="https://ccs-final-project-ramonaspence.herokuapp.com" alt="" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                    </div>

                    <div className="modal-card">
                        <button className="modal-button" data-toggle="modal" data-target="#project2">
                                
                            <div className="modal-cover">   
                                <i class="fas fa-expand-alt"></i>
                                <img className="modal-image" src={pro} alt="" />
                            </div>
                        </button>
                            <div className='modal-card-footer'>
                                <a href="https://github.com/ramonaspence/proforma_landing_page/" alt="" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                <a href="https://prostores.herokuapp.com" alt="" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i></a>
                            </div>
                      
                    </div>

                    <div className="modal-card">
                        <button className="modal-button" data-toggle="modal" data-target="#project3">

                            <div className="modal-cover">
                               
                                <img className="modal-image" src={rail} alt="" />
                                <i class="fas fa-expand-alt"></i>
                            </div>
                        </button>
                            <div className='modal-card-footer'>
                               <a href="https://github.com/ramonaspence/rails_ice_cream_menu" alt="" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a> 
                               <a href="https://prostores.herokuapp.com" alt="" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i></a>
                            </div>
                        
                    </div>
                </div>

                <div className="modal fade" id="project1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog model-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">The Chef's Notebook</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <span>The Chef's Notebook allows hobbyists to easily record recipes and share them other cooks around the world.
                                    Check out the links below to see the app, both deployed and source code on GitHub. 
                                </span>
                            </div>
                            <div className="modal-footer">
                                <a href="https://github.com/ramonaspence/chefs-notebook" alt="" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                <a href="https://ccs-final-project-ramonaspence.herokuapp.com" alt="" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i></a>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal project fade" id="project2" tabIndex="-1" aria-labelledby="projectTwoLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content project">
                            <div className="modal-header">
                                <h5 className="modal-title" id="projectTwoLabel">Proforma Landing Page</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                This project was completed for a company's marketing LinkedIn marketing campaign. <br />
                                The form is used to record contact information to a CSV file, then it's uploaded to the client's Google Drive via Google Drive's API.
                            </div>
                            <div className="modal-footer">
                                <a href="https://github.com/ramonaspence/proforma_landing_page" alt="" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a> 
                                <a href="https://prostores.herokuapp.com" alt="" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i></a>
                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal project fade" id="project3" tabIndex="-1" aria-labelledby="projectThreeLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content project">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="projectThreeLabel">Rails Project</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    app description here + github links
                                </div>
                                <div className="modal-footer">
                                    <i class="fab fa-github"></i>
                                    <i class="fas fa-external-link-alt"></i>                                          
                                </div>
                            </div>
                        </div>
                    </div>
            </main>
        )
    }
}
export default Gallery;