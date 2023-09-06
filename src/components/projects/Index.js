import React, { Component } from "react";
import VerticalCarousel from "./VerticalCarousel";
import contentData from "./Content";
import Slide from './Slide';  

export default class ProjectComponent extends Component {
    state = {
        currentSlideIndex: 0
    }

    handleSlideChange = (index) => {
        this.setState({ currentSlideIndex: index });
    }
    render() {
        const currentSlide = contentData[this.state.currentSlideIndex].content;
        return (
            <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                margin: "0 auto",
            }}>
                
                <div style={{ flex: '1'}}>
                <Slide 
                        content={currentSlide} 
                        index={this.state.currentSlideIndex}
                        offsetRadius={2} 
                        moveSlide={this.handleSlideChange} 
                        animationConfig={{ duration: 300 }}  
                    />
                </div>
                
               
                <div style={{ flex: '1' }}>
                    <VerticalCarousel
                        slides={contentData}
                        offsetRadius={2}
                        showNavigation={true}
                        onChange={this.handleSlideChange} 
                    />
                </div>
            </div>
        );
    }
}