import React, {Component} from 'react';
import '../App.css';

import Gallery from './gallery.js';
import Nav from './nav.js';

class Portfolio extends Component {
    render() {
        return(
            <body className="container-fluid">

                <div className="row nav">
                    <Nav />
                </div>

                <div className="row gallery">
                    <Gallery />
                </div>

            </body>
        )
    }
}
export default Portfolio;