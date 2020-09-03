import React, {Component} from 'react';
import '../App.css';

import Gallery from './gallery.js';
import Nav from './nav.js';


class Portfolio extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <Nav />
                </div>

                <div className="row">
                    <Gallery />
                </div>
            </div>
        )
    }
}
export default Portfolio;