import { Col, Nav, Row } from 'react-bootstrap'

function SettingPage() {
  return (
    <>
      <Row className=" justify-content-center vw-100 bg-white py-4">
        <Col className=" col-11 col-xs-4 col-xl-10">
          <div className="d-flex flex-column">
            <div>
              <h1 className="fs-1 border-bottom border-dark border-opacity-50 pb-2">
                Account
              </h1>
            </div>

            <Row className="">
              <Col className=" col col-12 mb-2 mb-md-0 col-md-3">
                <p className="text-dark">MEMBERSHIP & BILLING</p>
                <button type="button" className="btn btn-info text-black">
                  Cancel Membership
                </button>
              </Col>

              <Col className="">
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center mb-2">
                    <p className="fw-bold m-0">student@strive.school</p>
                    <Nav.Link
                      href="#"
                      className="ms-auto text-decoration-none text-black"
                    >
                      Change account email
                    </Nav.Link>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <p className="text-dark m-0">Password: *******</p>
                    <Nav.Link
                      href="#"
                      className="ms-auto text-decoration-none text-black"
                    >
                      Change password
                    </Nav.Link>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="text-dark m-0">phone 1234567890</p>
                    <Nav.Link
                      href="#"
                      className="ms-auto text-decoration-none text-black"
                    >
                      Change phone number
                    </Nav.Link>
                  </div>
                  <div className="d-flex align-items-top border-top border-dark border-opacity-50 pt-2 my-2">
                    <div className="d-flex flex-column flex-md-row">
                      <div className="d-flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-credit-card"
                        >
                          <rect
                            x="1"
                            y="4"
                            width="22"
                            height="16"
                            rx="2"
                            ry="2"
                          ></rect>
                          <line x1="1" y1="10" x2="23" y2="10"></line>
                        </svg>
                        <p className="fw-bold mb-1 ms-2 me-4">PayPal</p>
                      </div>
                      <p className="fw-bold">admin@strive.school</p>
                    </div>
                    <div className="d-flex flex-column ms-auto">
                      <Nav.Link
                        href="#"
                        className="ms-auto text-decoration-none text-black mb-1"
                      >
                        Update payment info
                      </Nav.Link>
                      <Nav.Link
                        href="#"
                        className="ms-auto text-decoration-none text-black"
                      >
                        Billing detail
                      </Nav.Link>
                    </div>
                  </div>
                  <div className="d-flex align-items-top border-top border-dark border-opacity-50 pt-2 my-2">
                    <div className="d-flex flex-column ms-auto">
                      <Nav.Link
                        href="#"
                        className="ms-auto text-decoration-none text-black mb-1"
                      >
                        Redeem gift card or promo code
                      </Nav.Link>
                      <Nav.Link
                        href="#"
                        className="ms-auto text-decoration-none text-black"
                      >
                        Where to buy gift cards
                      </Nav.Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="d-flex flex-column">
            <Row className=" border-bottom border-top border-dark border-opacity-50 py-3 mt-2 text-dark d-flex align-items-center justify-content-between">
              <Col className=" col-12 mb-2 mb-md-0 col-md-3">
                <p className="text-dark m-0">PLAN DETAILS</p>
              </Col>
              <Col className=" col-6 col-md-5">
                <div className="d-flex align-items-end">
                  <p className="m-0 me-2">Premium</p>
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="20"
                    height="20"
                    viewBox="0 0 512 512"
                  >
                    <g></g>
                    <path
                      d="M443.955 118.405h-375.941c-29.788 0-54.067 24.279-54.067 54.057v167.024c0 29.819 24.279 54.118 54.067 54.118h375.941c29.819 0 54.098-24.3 54.098-54.118v-167.024c0.010-29.778-24.269-54.057-54.098-54.057zM478.218 172.462v167.024c0 18.903-15.38 34.243-34.263 34.243h-375.941c-18.883 0-34.233-15.339-34.233-34.243v-167.024c0-18.862 15.35-34.243 34.233-34.243h375.941c18.882 0 34.263 15.381 34.263 34.243z"
                      fill="#000000"
                    />
                    <path
                      d="M343.337 174.203h-71.783v163.584h70.421c52.5 0 86.805-23.644 86.805-85.197 0-53.873-32.717-78.387-85.442-78.387zM336.558 299.602h-11.356v-87.245h10.178c28.662 0 39.783 9.083 39.783 43.202 0 30.884-13.639 44.042-38.605 44.042z"
                      fill="#000000"
                    />
                    <path
                      d="M187.505 229.376h-50.667v-55.173h-53.627v163.574h53.627v-63.396h50.667v63.396h53.617v-163.574h-53.617z"
                      fill="#000000"
                    />
                  </svg>
                </div>
              </Col>
              <Col className=" col-6 col-md-4 text-end">
                <Nav.Link href="#" className="text-decoration-none text-black">
                  Change Plan
                </Nav.Link>
              </Col>
            </Row>
          </div>
          <Row className=" pt-3">
            <Col className=" col-3">
              <p className="text-dark">SETTINGS</p>
            </Col>
            <Col className="">
              <Nav.Link
                href="#"
                className="text-decoration-none d-block text-balck"
              >
                Parental controls
              </Nav.Link>
              <Nav.Link
                href="#"
                className="text-decoration-none d-block text-balck"
              >
                Test participation
              </Nav.Link>
              <Nav.Link
                href="#"
                className="text-decoration-none d-block text-balck"
              >
                Manage download devices
              </Nav.Link>
              <Nav.Link
                href="#"
                className="text-decoration-none d-block text-balck"
              >
                Activate a device
              </Nav.Link>
              <Nav.Link
                href="#"
                className="text-decoration-none d-block text-balck"
              >
                Recent device streaming activity
              </Nav.Link>
              <Nav.Link
                href="#"
                className="text-decoration-none d-block text-balck"
              >
                Sign out of all devices
              </Nav.Link>
            </Col>
          </Row>
          <Row className=" border-top border-dark border-opacity-50 mt-3 pt-3">
            <Col className=" col-12 col-sm-3">
              <p className="text-dark m-0">MY PROFILE</p>
            </Col>
            <Col className=" align-items-center">
              <div className="d-flex mb-4">
                <img
                  src="/assets/avatar.png"
                  className="me-2"
                  alt="user"
                  width="50px"
                />
                <p className="fw-bold mb-0 pt-1">Strive Student</p>
                <div className="ms-auto">
                  <Nav.Link
                    href="#"
                    className="ms-auto text-decoration-none d-block"
                  >
                    Manage profiles
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className="ms-auto text-decoration-none d-block"
                  >
                    Add profile email
                  </Nav.Link>
                </div>
              </div>
              <Row className="">
                <Col className=" col-6">
                  <Nav.Link
                    href="#"
                    className="ms-auto text-decoration-none d-block"
                  >
                    Language
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className="ms-auto text-decoration-none d-block"
                  >
                    Playback settings
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className="ms-auto text-decoration-none d-block"
                  >
                    subtitle apperance
                  </Nav.Link>
                </Col>
                <Col className=" col-6 text-end text-sm-start">
                  <Nav.Link
                    href="#"
                    className="ms-auto text-decoration-none d-block"
                  >
                    Viewing activity
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className="ms-auto text-decoration-none d-block"
                  >
                    Ratings
                  </Nav.Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default SettingPage
