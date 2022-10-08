import React  from "react";
import Category from "./components/Category.jsx";
import Pages from './pages/Pages.jsx'
import {BrowserRouter, Link} from 'react-router-dom'
import Search from "./components/Search.jsx";
import styled from "styled-components";
import {GiKnifeFork} from 'react-icons/gi'
 
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav >
      <GiKnifeFork />
      <Logo to={"/"} >deliciouss</Logo>
    </Nav>
    <Search />
    <Category />
     <Pages />
    </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;

`

const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: center;
align-items: center;

svg{
  font-size: 2rem;
}
`

export default App;
