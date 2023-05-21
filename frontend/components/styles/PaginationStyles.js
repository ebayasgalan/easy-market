import styled from 'styled-components';

const PaginationStyles = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem auto;
  border: 1px solid var(--lightGrey);
  border-radius: 10px;
  font-size: 12px;
  & > * {
    margin: 0;
    padding: 10px;
    border-right: 1px solid var(--lightGrey);
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
  @media (min-width: 768px) {
    width: 50%;
    padding: 0;
    font-size: 14px;
  }
`;

export default PaginationStyles;
