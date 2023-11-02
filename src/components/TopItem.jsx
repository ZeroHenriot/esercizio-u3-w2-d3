import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'

function TopItem() {
  return (
    <>
      <Container
        fluid
        className="ps-md-5 d-flex align-items-center bg-primary justify-content-between text-light mt-4"
      >
        <div className="d-flex align-items-center">
          <div>
            <h1 className="fw-bold me-3 mb-0 display-5">TV Shows</h1>
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="border-secondary text-white btn-outline-dark ">
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
              <Dropdown.Item href="#">Horror</Dropdown.Item>
              <Dropdown.Item href="#">Documentary</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex pe-5">
          <Nav.Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-list"
            >
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
          </Nav.Link>
          <Nav.Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-grid ms-3"
            >
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </Nav.Link>
        </div>
      </Container>
    </>
  )
}

export default TopItem
