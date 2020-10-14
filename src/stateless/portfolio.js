import React, {Component} from 'react';
import '../App.css';

import Contact from './contactMe.js';
import About from './aboutMe.js';
import Gallery from './gallery.js';
import Nav from './nav.js';

class Portfolio extends Component {
    render() {
        return(
            <body className="container-fluid">

                <div className="row">
                    <Nav />
                </div>

                <div className="row about">
                    <About />    
                </div> 

                <div className="row gallery">
                    <Gallery />
                </div>

                <div className="row footer">
                    
                    <Contact />
                </div>

            </body>
        )
    }
}
export default Portfolio;