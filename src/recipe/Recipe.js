import './Recipe.css'
import React from 'react';
import Zoom from "react-reveal/Zoom";
const Recipe = () => {
    return (
        <div className="bahadur">

            <div >
                <Zoom right cascade>
                <h1  className="text-dark  text-center">PARADISE RESTAURANT</h1>
                </Zoom>
            </div>
            <div className="jaber-container">

                <div className="jaber u-clearfix">
                    <div className="jaber-body">
                        <span className="jaber-number jaber-circle subtle">01</span>
                        <span className="jaber-author subtle">Paradise Restaurant Offer</span>
                        <h2 className="jaber-title">MAGIC PARADISE PARK</h2>
                        <span className="jaber-description subtle">Thanks for your interest in Magic Paradise Park</span>
                        <div className="jaber-read">Read</div>
                        <span className="jaber-tag jaber-circle subtle">C</span>
                    </div>
                    <img src="https://s15.postimg.cc/temvv7u4r/recipe.jpg" alt="" className="jaber-media" />
                </div>
                <div className="jaber-shadow"></div>
            </div>

        </div>
    );
};

export default Recipe;