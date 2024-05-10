import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              오랜 기간 개발자로 살아오며 프로그래밍이 삶의 일부이자, 큰 부분이었습니다. 🤷‍♂️
              <br />
              <br />저는
              <i>
                <b className="purple"> C++, Javascript and Kotlin, C#, Java</b>
              </i>
              를 다른 언어보다 능숙하게 다룹니다. 실무에서 Python, Ruby 등도 사용한 경험이 있습니다. &nbsp;
              <br />
              <br />
              제가 새로 관심을 가지고 있는 것은 &nbsp;
              <i>
                <b className="purple">웹 기반의 생산성 높은 기술들입니다 </b> 
                또한 {" "}
                <b className="purple">
                  TypeScript, Nest.js, React (& Next.js)
                </b>
                들도 관심이 있어요
              </i>
              <br />
              <br />
              여전히 C++이 가장 익숙하고 자신 있는 언어이고, C#이나 Kotlin을 백엔드 언어로 선호하긴 하지만
              <b className="purple">Node.js</b>는 Frontend 개발로 인해 여러 상황에서 합리적인 선택이라 여겨 더 익숙해지고자 하고 있습니다.
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; 같은 것들 말이죠.
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/elky84"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/elky84"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/성훈-김-4089722ba/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/elky84"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
