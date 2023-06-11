import styled from 'styled-components';

const PriceTag = styled.span`
  background: var(--red);
  transform: rotate(30deg);
  color: white;
  font-weight: 600;
  padding: 5px;
  line-height: 1;
  font-size: 2rem;
  display: inline-block;
  position: absolute;
  top: 12px;
  right: -45px;
  text-align: center;
  width: 52%;
  @media (min-width: 1024px) {
    font-size: 3rem;
    top: 20px;
    right: -55px;
  }
`;

export default PriceTag;
