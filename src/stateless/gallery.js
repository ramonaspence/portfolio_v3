import React, {Component} from 'react';
import '../App.css'


class Gallery extends Component {
    render() {
        return(
        

            <main className="col-md-12 col gallery-main">

            {/* Clickable <figure> to open Modals? */}

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content project">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            hello world
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
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