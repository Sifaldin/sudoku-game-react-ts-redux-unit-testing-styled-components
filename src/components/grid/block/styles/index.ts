import styled, { css } from 'styled-components'

interface IProps {
  active?: boolean
  isPuzzle: boolean
}

export const BlockWrapper = styled.div<IProps>`
  ${({ theme, active, isPuzzle }) => css`
    align-items: center;
    background-color: ${active ? theme.colors.blue : theme.colors.white};
    border: solid 1px ${theme.colors.black};
    cursor: pointer;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    font-weight: ${isPuzzle ? 'normal' : 'bold'};
    font-size: 20px;
    justify-content: center;
    transition: ${theme.transition};
    user-select: none;

    &:before {
      padding-top: 100%;
      content: '';
      float: left;
    }
    &:hover {
      background-color: ${theme.colors.lightBlue};
    }
  `}
`
