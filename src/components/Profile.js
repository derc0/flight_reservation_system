// import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import DefaultUserPic from "../images/team-male.jpg";
// import Pdf from "./Pdf/Pdf";
import PdfWithQRGenerator from "./Pdf/PdfWithQRGenerator";

// function downloadTicket() {
//   return (
//     <PDFDownloadLink document={<Pdf />} fileName="TestPdf">
//     {({blob, url, loading, error}) => 
//       loading ? (
//         <button
//         type="button"
//         className="btn btn-primary container"
//         style={{
//           fontFamily: "inherit",
//           borderRadius: "8px",
//           width: "10rem",
//         }}>
//         Loading...
//       </button> 
//       ) : (
//         <button
//         type="button"
//         className="btn btn-primary container"
//         style={{
//           fontFamily: "inherit",
//           borderRadius: "8px",
//           width: "10rem",
//         }}>
//         Download Now
//       </button>
//       )
//     }
//     </PDFDownloadLink>
//   );
// }

function Profile() {
  return (
    <div>
      <div id="account">
        <Container>
          <Row>
            <Col>
              <img
                src={DefaultUserPic}
                alt="Profile Pic"
                style={{
                  borderRadius: "50%",
                }}
              />
            </Col>
            <Col
              className="container card"
              style={{
                padding: "15px 15px 15px 15px",
                borderRadius: "15px",
                width: "25rem",
              }}>
              <h1>User Profile</h1>
              <Form className="form mx-5">
                <Form.Group
                  controlId="formCategory1"
                  className="my-2 container">
                  <Form.Label>Username</Form.Label>
                  <Form.Control disabled type="text" defaultValue="John Doe" />
                </Form.Group>
                <Form.Group
                  controlId="formCategory2"
                  className="my-2 pt-2 container">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    disabled
                    type="email"
                    defaultValue="doejohn@gmail.com"
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group
                      controlId="formCategory3"
                      className="my-2 pt-2 container">
                      <Form.Label>Age</Form.Label>
                      <Form.Control disabled type="number" defaultValue="21" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      controlId="formCategory4"
                      className="my-2 pt-2 container"
                      style={{ textAlign: "center" }}>
                      <Form.Label>Sex</Form.Label>
                      <Form.Control disabled type="text" defaultValue="Male" />
                    </Form.Group>
                  </Col>
                </Row>
                <Col>
                  <button
                    type="button"
                    className="btn btn-primary mt-4"
                    style={{ fontFamily: "inherit", borderRadius: "8px" }}>
                    Update Profile
                  </button>
                </Col>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <button
                type="button"
                className="btn btn-primary my-4"
                style={{ fontFamily: "inherit", borderRadius: "8px" }}>
                Change Image
              </button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
      <div
        id="#history"
        style={{
          scrollBehavior: "smooth",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}>
        <h4 style={{ fontFamily: "monospace" }}>Travel History</h4>
        <table className="container mt-4">
          <tr>
            <th>Departure Date</th>
            <th>Departure Time</th>
            <th>Departure Location</th>
            <th>Arrival Date</th>
            <th>Arrival Time</th>
            <th>Arrival Location</th>
            <th>Airline Company</th>
            <th>Ticket</th>
          </tr>
          <tr>
            <td>01/01/2022</td>
            <td>7:15 A.M.</td>
            <td>Kolkata (CCU)</td>
            <td>02/01/2022</td>
            <td>03:35 P.M.</td>
            <td>Zurich (ZRH)</td>
            <td>Lufthansa</td>
            {/* <td>{downloadTicket()}</td> */}
            <td>{PdfWithQRGenerator()}</td>
          </tr>
          <tr>
            <td>01/01/2022</td>
            <td>7:15 A.M.</td>
            <td>Kolkata (CCU)</td>
            <td>02/01/2022</td>
            <td>03:35 P.M.</td>
            <td>Zurich (ZRH)</td>
            <td>Lufthansa</td>
            <td>{PdfWithQRGenerator()}</td>
            {/* <td>{downloadTicket()}</td> */}
          </tr>
          <tr>
            <td>01/01/2022</td>
            <td>7:15 A.M.</td>
            <td>Kolkata (CCU)</td>
            <td>02/01/2022</td>
            <td>03:35 P.M.</td>
            <td>Zurich (ZRH)</td>
            <td>Lufthansa</td>
            <td>{PdfWithQRGenerator()}</td>
            {/* <td>{downloadTicket()}</td> */}
          </tr>
          <tr>
            <td>01/01/2022</td>
            <td>7:15 A.M.</td>
            <td>Kolkata (CCU)</td>
            <td>02/01/2022</td>
            <td>03:35 P.M.</td>
            <td>Zurich (ZRH)</td>
            <td>Lufthansa</td>
            <td>{PdfWithQRGenerator()}</td>
            {/* <td>{downloadTicket()}</td> */}
          </tr>
          <tr>
            <td>01/01/2022</td>
            <td>7:15 A.M.</td>
            <td>Kolkata (CCU)</td>
            <td>02/01/2022</td>
            <td>03:35 P.M.</td>
            <td>Zurich (ZRH)</td>
            <td>Lufthansa</td>
            <td>{PdfWithQRGenerator()}</td>
            {/* <td>{downloadTicket()}</td> */}
          </tr>
          <tr>
            <td>01/01/2022</td>
            <td>7:15 A.M.</td>
            <td>Kolkata (CCU)</td>
            <td>02/01/2022</td>
            <td>03:35 P.M.</td>
            <td>Zurich (ZRH)</td>
            <td>Lufthansa</td>
            <td>{PdfWithQRGenerator()}</td>
            {/* <td>{downloadTicket()}</td> */}
          </tr>
          <tr>
            <td>01/01/2022</td>
            <td>7:15 A.M.</td>
            <td>Kolkata (CCU)</td>
            <td>02/01/2022</td>
            <td>03:35 P.M.</td>
            <td>Zurich (ZRH)</td>
            <td>Lufthansa</td>
            <td>{PdfWithQRGenerator()}</td>
            {/* <td>{downloadTicket()}</td> */}
          </tr>
          <tr>
            <td>01/01/2022</td>
            <td>7:15 A.M.</td>
            <td>Kolkata (CCU)</td>
            <td>02/01/2022</td>
            <td>03:35 P.M.</td>
            <td>Zurich (ZRH)</td>
            <td>Lufthansa</td>
            <td>{PdfWithQRGenerator()}</td>
            {/* <td>{downloadTicket()}</td> */}
          </tr>
          <tr>
            <td>01/01/2022</td>
            <td>7:15 A.M.</td>
            <td>Kolkata (CCU)</td>
            <td>02/01/2022</td>
            <td>03:35 P.M.</td>
            <td>Zurich (ZRH)</td>
            <td>Lufthansa</td>
            <td>{PdfWithQRGenerator()}</td>
            {/* <td>{downloadTicket()}</td> */}
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Profile;
