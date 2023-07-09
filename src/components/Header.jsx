import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import styles from './Header.module.css'
import Container from 'react-bootstrap/Container'

export function Header () {
  return (
    <Navbar bg='dark' data-bs-theme='dark' expand='lg'>
      <Container>
        <Navbar.Brand className={styles.logo} href='/'>
          ChoreMaster
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/about'>
              About
            </Nav.Link>
            <Nav.Link as={Link} to='/todo'>
              To Do
            </Nav.Link>
            <Nav.Link as={Link} to='/priority'>
              Priority
            </Nav.Link>
            <Nav.Link as={Link} to='/contact'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
