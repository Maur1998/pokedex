import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar2 from 'react-bootstrap/Navbar';

export const Navbar = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "notActive");
    return (
        <>
            <Navbar2 bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar2.Brand href="#home">
                    <img src="src/assets/img/logo.png" alt="logo" width={"10%"} />
                </Navbar2.Brand>
                <div className='d-flex justify-content-center'>
                    <NavLink className={ setActiveClass } to="/">
                        Home
                    </NavLink>
                    <NavLink className={ setActiveClass } to="/pokedex">
                    Pokédex
                    </NavLink>
                </div>
                </Container>
            </Navbar2>
        </>
    )
}
