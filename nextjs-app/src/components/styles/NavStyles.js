import styled from 'styled-components';

const NavStyles = styled.div`
  margin: 0;
  padding: 0;
  z-index: 5;
  height: 60px;

  a,
  button {
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    position: relative;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    color: white;
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
    @media(min-width: 768px) {
      font-size: 2rem;
      color: #000;
      &:before {
        content: '';
        width: 2px;
        background: var(--lightGrey);
        height: 100%;
        left: 5px;
        position: absolute;
        transform: skew(-10deg);
        top: 0;
        bottom: 0;
      }
    }
  }

  .toggle-btn {
    position: absolute;
    cursor: pointer;
    top: 20px;
    right: 20px;
    span {
      width: 35px;
      height: 4px;
      background: #000;
      display: block;
      margin-top: 4px;
    }
    @media (min-width: 768px) {
      display: none;
    }
  }

  .nav-wrapper {
    display: none;
    z-index: 2;
    background: #000;
    transition: .5s ease-in;
    @media (min-width: 768px) {
      transform: none;
      transition: auto;
      background: white;
      display: flex;
      height: 60px;
      width: auto;
    }
    @media (min-width: 1024px) {
      height: 74px;
    }
  }

  &.mobile-active {
    height: auto;
    
    .toggle-btn {
      top: 22;
      right: 20px;
      z-index: 3;
      span {
        background: white;
        width: 28px;
      }
      span:nth-child(2) {
        transform: scale(0);
        opacity: 0;
      }
      // animate first bar 
      span:nth-child(1) {
        animation: barOneAnim 0.3s ease-in-out forwards;
      }
      @keyframes barOneAnim {
        50% {
          transform: translateY(24px);
        }
        100% {
          transform: translateY(0) rotateZ(45deg);
        }
      }
      // animate third bar 
      span:nth-child(3) {
        animation: barSecondAnim 0.3s ease-in-out forwards;
      }
      @keyframes barSecondAnim {
        50% {
          transform: translateY(-24px);
        }
        100% {
          transform: translateY(-16px) rotateZ(133deg);
        }
      }
    }
    .nav-wrapper {
      display: block;
      @media (min-width: 768px) {
        display: flex;
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media(min-width: 1024px) {
    align-items: normal;
  }
`;

export default NavStyles;
