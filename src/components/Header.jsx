import { styled } from 'styled-components';

import logo from '../assets/logo.png';
// import classes from './Header.module.css';

/**
 * We use the '&' character to point to out parent attribute (in this case the header).
 * In this case -> @media, we can remove the header assign for margin-bottom.
 */
const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;        
    
    & img {
      object-fit: contain;
      margin-bottom: 2rem;
      width: 11rem;
      height: 11rem;
    }
    
    & h1 {
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 0.4em;
      text-align: center;
      text-transform: uppercase;
      color: #9a3412;
      font-family: 'Pacifico', cursive;
      margin: 0;
    }
    
    & p {
      text-align: center;
      color: #a39191;
      margin: 0;
    }
    
    @media (min-width: 768px) {
      margin-bottom: 4rem;
    
      & h1 {
        font-size: 2.25rem;
      }
    }
`;

export default function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/* Inline styles */}
      {/* <p style={{
        color: "red",
        textAlign: "left" // or 'text-align': "left"
      }}>A community of artists and art-lovers. */}
      {/* <p className={true ? classes.paragraph : undefined}>A community of artists and art-lovers.</p> */}
      <p>A community of artists and art-lovers.</p>
    </StyledHeader>
  );
}
