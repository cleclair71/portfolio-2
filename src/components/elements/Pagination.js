import React from 'react';
import styled from 'styled-components';
function DotComponent({ index, active, onClick }) {
    return (
        <Dot 
            active={active} 
            onClick={() => onClick(index)}
        />
    );
}
const Pagination = ({ totalSlides, currentSlide, handleDotClick }) => {
    return (
        <PaginationContainer>
            {Array.from({ length: totalSlides }).map((_, index) => (
    <DotComponent 
        key={index} 
        active={index === currentSlide} 
        index={index} 
        onClick={handleDotClick}
    />
))}
        </PaginationContainer>
    );
    
};
const PaginationContainer = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
`;

const Dot = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${props => (props.active ? 'rgba(226, 212, 89, 0.5)' : 'rgba(255, 255, 255, 0.2)')}; /* You can change colors based on your design */
    cursor: pointer;
    transition: background 0.3s;
    key={index}
    active={index === currentSlide}
    onClick={() => setCurrentSlide(index)}
    &:hover {
        background: rgba(226, 212, 89, 0.5);
    }
`;

export default Pagination;