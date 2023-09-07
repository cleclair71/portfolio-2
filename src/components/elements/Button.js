import styled from 'styled-components';

export const FancyButton = styled.button`
  --offset: 10px;
  --border-size: 1px;

  display: block;
  position: relative;
  padding: 1.5em 3em;
  appearance: none;
  border: 0;
  background: transparent;
  color: #ddd059;  
  text-transform: uppercase;
  letter-spacing: .25em;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 0;
  box-shadow: inset 0 0 0 var(--border-size) currentcolor;
  transition: background .8s ease;

  &:hover {
    background: rgba(100, 0, 0, .03);
  }
`;

export const ButtonHorizontalDiv = styled.div`
  position: absolute;
  top: calc(-1 * var(--offset));
  right: 0;
  bottom: calc(-1 * var(--offset));
  left: 0;
  border-top: var(--border-size) solid currentcolor;
  border-bottom: var(--border-size) solid currentcolor;
  transition: transform .8s ease;

  &::before {
    content: '';
    position: absolute;
    top: var(--offset);
    bottom: var(--offset);
    left: calc(-1 * var(--offset));
    right: calc(-1 * var(--offset));
    border-top: var(--border-size) solid currentcolor;
    border-bottom: var(--border-size) solid currentcolor;
  }

  ${FancyButton}:hover & {
    transform: scaleX(0);
  }
`;

export const ButtonVerticalDiv = styled.div`
  position: absolute;
  top: 0;
  right: calc(-1 * var(--offset));
  bottom: 0;
  left: calc(-1 * var(--offset));
  border-left: var(--border-size) solid currentcolor;
  border-right: var(--border-size) solid currentcolor;
  transition: transform .8s ease;

  &::before {
    content: '';
    position: absolute;
    top: calc(-1 * var(--offset));
    bottom: calc(-1 * var(--offset));
    left: var(--offset);
    right: var(--offset);
    border-left: var(--border-size) solid currentcolor;
    border-right: var(--border-size) solid currentcolor;
  }

  ${FancyButton}:hover & {
    transform: scaleY(0);
  }
`;