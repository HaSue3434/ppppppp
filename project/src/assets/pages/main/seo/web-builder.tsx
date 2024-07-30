import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as FBlur } from "../../../img/f-bl.svg";
import { ReactComponent as SEO } from "./canvas-img/site-canvas.svg";
import { ReactComponent as AI } from "./canvas-img/ai-icon.svg";
import { motion } from "framer-motion";



const Seo = () =>{

    return(
        <>
        <div>
           <div className="website-builder-title">
                <h1>Website Builder</h1>
                <h1>Accelerates Growth</h1>

                <div className="go-to-dashboard">
                    <Link to={'./'}>
                        Go to dashboard
                    </Link>
                </div>
           </div>
           <div className="web-builder-container">
                <div className="grid-left-1 common-features common-contain">
                    <div id="feature-seo">
                        <div className="contents">
                            <div className="feature-title">
                                <h1>SEO built into the system</h1>
                                <p>SEO optimization is automatically included in the system design.</p>
                            </div>
                            <div className="site-view-seo">
                                <SEO/>
                            </div>
                        </div>
                        <Link to={"./"}></Link>
                        <div className="absolutly-white-background"><FBlur/></div>
                    </div>
                    <div id="feature-ai">
                        <div className="contents">
                            <div className="feature-title">
                                <h1>AI features enable <br></br> rapid building</h1>
                            </div>
                            <div className="box">
                                <div className="ai-icon"><AI/></div>
                                <div className="ai-create-imgs">
                                    <div className="create-a">
                                        <div className=""></div>
                                        <div className=""></div>
                                    </div>
                                    <div className="create-b"></div>
                                    <div className="create-c"></div>
                                </div>
                                <div className="ai-generate">
                                    <div>Comment....</div>
                                    <div className="btn">
                                        <div className="ex-btn">Try Example</div>
                                        <div className="generate"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to={"./"}></Link>
                        <div className="absolutly-white-background"><FBlur/></div>
                    </div>
                </div>
                <div className="grid-right-2 common-features common-contain">
                    <div id="feature-cms">
                        <div className="contents">
                            <div className="feature-title">
                                <h1>Built-in CMS</h1>
                                <p>Real-time management with built-in CMS.</p>
                            </div>
                        </div>
                        <Link to={"./"}></Link>
                        <div className="absolutly-white-background"><FBlur/></div>
                    </div>
                    <div id="feature-responsive">
                        <div className="contents">
                            <div className="feature-title">
                                <h1>Responsive web</h1>
                                <p>Implement a responsive design  effortlessly with just a few clicks.</p>
                            </div>
                        </div>
                        <Link to={"./"}></Link>
                        <div className="absolutly-white-background"><FBlur/></div>
                    </div>
                </div>
                
            </div>
            <div className="grid-bottom-3 common-contain">
                <div id="feature-layouts">
                    <div className="contents">
                        <div className="feature-title">
                            <h1>Rapidly build layouts</h1>
                            <p>Design your site on a familiar canvas.</p>
                        </div>   
                        <div className="layouts">
                            <div className="layout-1">
                                <img src = {require("./canvas-img/layout-1.jpg")} alt="" />
                            </div>
                            <div className="layout-2">
                                <img src = {require("./canvas-img/layout-2.jpg")} alt="" />
                            </div>
                            <div className="layout-3">
                                <img src = {require("./canvas-img/layout-3.jpg")} alt="" />
                            </div>
                        </div>
                    </div>
                    <Link to={"./"}></Link>
                    <div className="absolutly-white-background"><FBlur/></div>
                </div>
                <div id="loading">
                    <div className="contents">
                        <div className="feature-title">
                            <h1>Faster Loading</h1>
                        </div>   
                        <div className="circle">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Seo;