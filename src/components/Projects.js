import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/img1.png";
import projImg2 from "../assets/img/img2.png";
import projImg3 from "../assets/img/img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Development Startup",
      description: "Front-End & Development",
      imgUrl: projImg1,
    },
    {
      title: "Development Startup",
      description: "Front-End & Development",
      imgUrl: projImg2,
    },
    {
      title: "Development Startup",
      description: "Front-End & Development",
      imgUrl: projImg3,
    },
    {
      title: "Development Startup",
      description: "Front-End & Development",
      imgUrl: projImg2,
    },
    {
      title: "Development Startup",
      description: "Front-End & Development",
      imgUrl: projImg3,
    },
    {
      title: "Development Startup",
      description: "Front-End & Development",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>1-The OTT movie details is a web application that allows users to browse movies and view movie details such as synopsis, cast, and crew. The application is built using React JS and styled with CSS. The application has a responsive Front-End that works well on desktop and mobile devices.</p>
                <p>2-The Money management is a web application that allows users to manage their finances. The application is built using JavaScript and styled with CSS. The application has a responsive Front-End that works well on desktop and mobile devices.</p>
                <p>3-The RGB game is a simple project developed using JavaScript, CSS, and HTML. This project is an interesting color guessing game where the user/player has to guess the result of the given RGB color combination and find the correct output of the color mixture. The user can guess the color until the option finishes.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
