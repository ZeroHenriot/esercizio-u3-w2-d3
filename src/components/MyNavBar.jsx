import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

function MyNavBar() {
  return (
    <>
      <Navbar
        expand="lg"
        className="navbar navbar-expand-lg text-light bg-primary flex-column"
      >
        <Container fluid className="ps-md-5">
          <Link to="/" className="nav-link">
            <img
              src="/assets/netflix_logo.png"
              alt="netflixlogo"
              style={{ width: '110px' }}
            />
          </Link>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <ListGroup as="ul" className="flex-row">
                <ListGroup.Item as="li" className="p-0 bg-primary border-0">
                  <Nav.Link href="#" className="text-light">
                    Home
                  </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="p-0 bg-primary border-0">
                  <Link to="/tvshows" className="text-light nav-link">
                    Tv Shows
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="p-0 bg-primary border-0">
                  <Nav.Link href="#" className="text-light">
                    Movies
                  </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="p-0 bg-primary border-0">
                  <Nav.Link href="#" className="text-light">
                    Recently Added
                  </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="p-0 bg-primary border-0">
                  <Nav.Link href="#" className="text-light">
                    My List
                  </Nav.Link>
                </ListGroup.Item>
              </ListGroup>
            </Nav>
          </Navbar.Collapse>
          <div className="ms-auto me-2 d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <Nav.Link href="#" className="mx-4">
              KIDS
            </Nav.Link>
            <svg
              width="30"
              height="30"
              viewBox="0 0 512 512"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <path d="M381.7,225.9c0-97.6-52.5-130.8-101.6-138.2c0-0.5,0.1-1,0.1-1.6c0-12.3-10.9-22.1-24.2-22.1c-13.3,0-23.8,9.8-23.8,22.1c0,0.6,0,1.1,0.1,1.6c-49.2,7.5-102,40.8-102,138.4c0,113.8-28.3,126-66.3,158h384C410.2,352,381.7,339.7,381.7,225.9z" />
                <path d="M256.2,448c26.8,0,48.8-19.9,51.7-43H204.5C207.3,428.1,229.4,448,256.2,448z" />
              </g>
            </svg>
            <NavDropdown
              align="end"
              href="#"
              aria-expanded="false"
              title={<img src="/assets/avatar.png" alt="" width="32px" />}
              className="ms-4 "
            >
              <NavDropdown.Item>
                <Link className="nav-link" to="/profile">
                  Edit profile
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-link" to="/settings">
                  Settings
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavBar
