import React, {Component} from 'react';
import '../App.css';

import self from '../media/class.jpg';
import mtns from '../media/mtns3.jpg';

class About extends Component {
    render() {
        return(
            <React.Fragment>
                <div className="about-me col">
                    <p>
                        I'm Ramona Spence. I build and work on software. 
                        I've always had a passion for systems. As a teenager, I knew I wanted
                        to be a programmer, but that's all I knew. So for fun and the idea of 
                        getting better I dabbled in Linux, static webpages and some scripting.
                        After 10 years in restaurants, I began to pursue web and software
                        development full-time. I also enjoy long walks on the beach, and in 
                        my spare time play with game development in Unity, and C#. 
                    </p>

                    <div className="img-wrapper">
                        <img src={mtns} alt="" />
                    </div>

                </div>

                <div className="about-ccs col">

                    <div className="">
                        <img src={self} alt="" />
                    </div>

                    <p>
                        I graduated from <a href="https://carolinacodeschool.org/" alt="" >Carolina Code School</a> in Spring 2020. In 12 very short and very long weeks,
                        we delved into React and ES6 JavaScript, Django, and object-oriented programming in JavaScript and Python. The primary focus was on our ability to 
                        read documentation, search over stackoverflow and any other reliable resources to solve the problems we faced as we built MVC applications with Django
                        and single-page web apps in ReactJS. <br/><br/>
                    </p>

                </div>
            </React.Fragment>
        )
    }
}
export default About