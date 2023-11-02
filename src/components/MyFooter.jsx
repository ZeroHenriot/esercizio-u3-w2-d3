import { Col, Container, Nav, Row } from 'react-bootstrap'

function MyFooter() {
  return (
    <>
      <Container className="pt-5">
        <div className="d-flex mb-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="grey"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </div>
          <div className="ms-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="grey"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-instagram"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>
          <div className="ms-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="grey"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-twitter"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </div>
          <div className="ms-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="grey"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-youtube"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </div>
        </div>
        <Row className="justify-content-around">
          <Col className="col-6 col-md-2 mb-3">
            <Nav className="flex-column">
              <Nav.Item className="mb-2">
                <Nav.Link href="#" className="nav-link p-0 text-dark">
                  Audio and subtitles
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-2">
                <Nav.Link href="#" className="nav-link p-0 text-dark">
                  Media Center
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-2">
                <Nav.Link href="#" className="nav-link p-0 text-dark">
                  Privacy
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-2">
                <Nav.Link href="#" className="nav-link p-0 text-dark">
                  Contact Us
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col className="col-6 col-md-2 mb-3">
            <Nav className="flex-column">
              <Nav.Item className="mb-2">
                <Nav.Link href="#" className="nav-link p-0 text-dark">
                  Audio description
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-2">
                <Nav.Link href="#" className="nav-link p-0 text-dark">
                  Invester Relations
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-2">
                <Nav.Link href="#" className="nav-link p-0 text-dark">
                  Legal Notices
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className="col-6 col-md-2 mb-3">
            <Nav className="flex-column">
              <Nav.Item className="mb-2">
                <Nav.Link href="#" className="nav-link p-0 text-dark">
                  Help Center
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-2">
                <Nav.Link href="#" className="nav-link p-0 text-dark">
                  Jobs
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-2">
                <Nav.Link href="#" className="nav-link p-0 text-dark">
                  Cookie Preferences
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col className="col-6 col-md-2 mb-3">
            <Nav className="flex-column">
              <Nav.Item className="mb-2">
                <Nav.Link href="#" className="nav-link p-0 text-dark">
                  Gift Cards
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-2">
                <Nav.Link href="#" className="nav-link p-0 text-dark">
                  Terms of Use
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-2">
                <Nav.Link href="#" className="nav-link p-0 text-dark">
                  Corporate Information
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>

        <div className="d-flex justify-content-center py-4 my-4 border-top text-dark">
          <p>&copy; 1997-2019 Netflix, Inc. All rights reserved.</p>
        </div>
      </Container>
    </>
  )
}

export default MyFooter
