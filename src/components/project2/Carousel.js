import React, { Component } from "react";
import Slider from "react-slick";
import Image1 from '../../assets/images/thumbnail/1.png';
import styled from 'styled-components';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'; 

const SliderStyled = styled(Slider)`
    padding-top: 20%;  
    padding-bottom: 20%;  

    @media (max-width: 768px) {
        max-width: 90%;
        max-height: 50%;
        padding-top: 0;
        padding-bottom: 0;
        
    }
`;
const StyledSlide = styled.div`
    position: relative; 
    outline: none;
    height: 150px; // Adjust based on your design
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
        width: ${props => props.isActive ? "70%" : "50%"};
        transition: transform 0.3s;
        transform: scale(${props => props.isActive ? "1.5" : "1"});
        border-radius: 10px;
        position: relative; 
        z-index: ${props => props.zIndex}; 
        opacity: ${props => props.opacity}; 
        outline: none;
        border: ${props => props.isActive ? "2px solid #fff" : "none"};
        box-shadow: ${props => props.isActive ? "0 0 10px #000" : "none"};
    }
`;

const Icon = styled.div`
    color: #ddd059;
    font-size: 24px; // Change as needed
    opacity: 0.6;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`;

const SliderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export default class VerticalSwipeToSlide extends Component {
    
    constructor(props) {
        super(props);
        this.sliderRef = React.createRef();  
    }
    state = {
        activeSlide: 0
    }

    handleSlideClick = index => {
        this.sliderRef.current.slickGoTo(index); 
    }

    handleWheel = (event) => {
        event.preventDefault(); // Prevent the default scroll behavior
        if (event.deltaY > 0) {
            this.sliderRef.current.slickNext();
        } else {
            this.sliderRef.current.slickPrev();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.activeSlide !== this.state.activeSlide) {
            this.props.onSlideChange(this.state.activeSlide);
        }
    }

    render() {
        const getOpacity = (index) => {
            if (index === this.state.activeSlide) return 1;
            if (index === this.state.activeSlide - 1 || index === this.state.activeSlide + 1) return 0.5;
            return 0.1;
        };

        const getZIndex = (index) => {
            if (index === this.state.activeSlide) return 1000;
            if (index === this.state.activeSlide - 1 || index === this.state.activeSlide + 1) return 500;
            return 1;
        };
        const settings = {
            dots: false,
            infinite: false,
            centerMode: true,
            centerPadding: "60px",
            className: "center",
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            vertical: true,
            verticalSwiping: true,
            swipeToSlide: true,
            beforeChange: (currentSlide, nextSlide) => {
                this.setState({ activeSlide: nextSlide });
            },
            afterChange: function(currentSlide) {
                console.log("after change", currentSlide);
            }
        };
        return (
            <div onWheel={this.handleWheel}>
                <SliderWrapper>
                <SliderStyled 
                    ref={this.sliderRef} 
                    {...settings}
                >
                    {[1, 2, 3, 4].map((item, index) => (
                        <StyledSlide 
                            key={index} 
                            isActive={this.state.activeSlide === index}
                            onClick={() => this.handleSlideClick(index)} 
                            zIndex={getZIndex(index)}
                            opacity={getOpacity(index)}
                        >
                            <img src={Image1} alt={`Thumbnail ${item}`} />
                        </StyledSlide>
                    ))}
                </SliderStyled>
                    <div>
                        <Icon onClick={() => this.sliderRef.current.slickPrev()}><IoIosArrowUp /></Icon>
                        <Icon onClick={() => this.sliderRef.current.slickNext()}><IoIosArrowDown /></Icon>
                    </div>
                </SliderWrapper>
            </div>
        );
    }
}