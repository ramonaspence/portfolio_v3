import React, {Component} from 'react';
import '../App.css';

import mtns from '../media/mtns.jpeg';

class About extends Component {
    render() {
        return(
            <section className="about-me col">
               <p>
                    I'm Ramona Spence. I build and work on software. <br/>
                    {/* I've always enjoyed systems. As a teenager, I spent my time <br/>
                    tinkering with Linux, static webpages, and a little scripting. <br/>
                    After 10 years in restaurants, I began to pursue web and software <br/>
                    development full-time. I also enjoy long walks on the beach, and in <br/>
                    my spare time play with game development in Unity, and C#. <br/> */}


               </p>
            <div className="img-wrapper">
               <img src={mtns} alt="" />
            </div>
            </section>
        )
    }
}
export default About