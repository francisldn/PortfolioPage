import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const emphasis = styled.h5`
font-weight: 700;
font-size: 28px;
line-height: 32px;
letter-spacing: 0.02em;
color: #FFFFFF;
margin-bottom: 8px;
`