import { Button, Col, Container, Row, Dropdown, Form } from 'react-bootstrap'

function ProfilePage() {
  return (
    <Row className="justify-content-center vw-100">
      <Col className="col-10 col-sm-10 col-md-6">
        <Container className="flex-column">
          <div>
            <h1 className="display-1 text-white border-bottom border-dark border-opacity-50">
              Edit Profile
            </h1>
          </div>

          <div className="d-flex">
            <div>
              <img
                src="assets/avatar.png"
                alt="avatar"
                width="110px"
                className="me-3"
              />
            </div>
            <div className="flex-grow-1">
              <div className="bg-dark bg-opacity-50">
                <p className="fs-5 p-2 text-white">Strive Student</p>
              </div>
              <div>
                <p className="mb-1 text-dark fs-5">Language:</p>
              </div>
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-dark"
                  className="text-white px-4"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">English</Dropdown.Item>
                  <Dropdown.Item href="#">Italian</Dropdown.Item>
                  <Dropdown.Item href="#">French</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="border-top border-bottom pb-3 my-3 text-white">
                <h4 className="mt-2">Maturity Settings:</h4>
                <div className="bg-dark bg-opacity-50 fw-bold p-2 d-inline-block">
                  <p className="m-0">ALL MATURITY SETTINGS</p>
                </div>
                <div className="my-3">
                  <p className="m-0">
                    Show titles of all maturity ratings for this profile.
                  </p>
                </div>
                <Button type="button" className="btn btn-outline-dark px-4">
                  EDIT
                </Button>
              </div>
              <div className="mt-3 text-white">
                <h4 className="mt-2">Autoplay controls</h4>
              </div>
              <div className="d-flex align-items-center">
                <Form.Check
                  label="Autoplay next episode in a series on all devices."
                  className="text-white"
                />
              </div>
              <div className="pb-3 d-flex align-items-center">
                <Form.Check
                  label="Autoplay previews while browsing on all devices."
                  className="text-white"
                />
              </div>
            </div>
          </div>
          <div className="border-top py-3">
            <div className="d-flex justify-content-evenly">
              <Button type="button" className="btn btn-outline-dark">
                SAVE
              </Button>
              <Button type="button" className="btn btn-outline-dark">
                CANCEL
              </Button>
              <Button type="button" className="btn btn-outline-dark">
                DELETE PROFILE
              </Button>
            </div>
          </div>
        </Container>
      </Col>
    </Row>
  )
}

export default ProfilePage
