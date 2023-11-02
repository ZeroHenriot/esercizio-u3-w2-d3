import { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFound = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered(true)
  }

  const handleMouseOut = () => {
    setIsHovered(false)
  }

  const buttonStyle = {
    opacity: isHovered ? 0.8 : 1, // Imposta l'opacità del pulsante al passaggio del mouse
  }
  return (
    <>
      <Row className="h-100 justify-content-center vw-100">
        <Col
          xs={12}
          className="display-3 d-flex justify-content-center align-items-center fw-bold text-white mt-5"
        >
          Strada senza uscita
        </Col>
        <Col
          xs={12}
          className="fs-3 mb-5 d-flex justify-content-center align-items-center text-white"
        >
          Pagina non trovata. Nella home page c'è molto da scoprire
        </Col>
        <Link
          to={'/home'}
          className="d-flex justify-content-center align-items-center nav-link"
        >
          <Button
            className="btn-info px-5 py-1 fs-3"
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
            style={buttonStyle}
          >
            Home Netflix
          </Button>
        </Link>
      </Row>
    </>
  )
}

export default NotFound
