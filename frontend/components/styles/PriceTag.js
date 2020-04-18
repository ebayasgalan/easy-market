import styled from 'styled-components';

const PriceTag = styled.span`
  background: ${(props) => props.theme.blue};
  transform: rotate(5deg);
  color: white;
  font-weight: 300;
  padding: 5px;
  line-height: 1;
  border-radius: 1rem;
  font-size: 2rem;
  display: inline-block;
  position: absolute;
  top: -3px;
  right: -3px;
`;

export default PriceTag;
