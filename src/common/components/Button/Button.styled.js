import styled from 'styled-components';

export const ButtonStyled = styled('button')`
  width: ${({ children }) =>
    children.includes('Add contact') ? 'fit-content' : 'auto'};

  padding-block: 8px;
  padding-inline: 16px;
  margin-block-start: ${({ children }) =>
    children.includes('Add contact') ? '8px' : '0'};

  border: 2px solid black;
  border-radius: 24px;

  background-color: transparent;

  font-weight: 600;
  text-transform: capitalize;
  transition: all 250ms ease-in-out;

  &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;
