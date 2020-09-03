import React, {Component} from 'react';
import '../App.css'


class Gallery extends Component {
    render() {
        return(
            <main className="col-md-12 col gallery-main">
            
            <div className="project-container">

            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#projectOne">
            Launch demo modal
            </button>
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

            <button type="button" className="btn btn-primary modal-button" data-toggle="modal" data-target="#project2">
            Launch demo modal
            </button>
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

            <button type="button" className="btn btn-primary modal-button" data-toggle="modal" data-target="#project3">
            Launch demo modal
            </button>
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
            </div>
            </main>


           
            //     <div className="modal" tabIndex="-1">
            //         <div className="modal-dialog">
            //             <div className="modal-content project">
            //                 <div className="modal-header">
            //                     <h5 className="modal-title">Modal Title</h5>
            //                     <button className='close' type='button' data-dismiss="modal" aria-label="Close">
            //                         <span aria-hidden="true">&times;</span>
            //                     </button>
            //                 </div>
            //                 <div className="modal-body">
            //                     <p>Modal Body</p>
            //                 </div>
            //                 <div className="modal-footer">
            //                     <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            //                     <button type="button" className="btn btn-primary">Save changes</button>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </main>
        )
    }
}
export default Gallery;