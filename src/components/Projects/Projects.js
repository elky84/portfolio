import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import excel from "../../Assets/Projects/excel.png";
import stock from "../../Assets/Projects/stock.png";
import lol from "../../Assets/Projects/lol.png";
import rss from "../../Assets/Projects/rss.png";
import webCrawler from "../../Assets/Projects/web-crawler.png";
import light from "../../Assets/Projects/light.png";
import srpg from "../../Assets/Projects/srpg.jpeg";

import gm from "../../Assets/Projects/gm.png";

import blog from "../../Assets/Projects/blog.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          나의 주요 <strong className="purple">작업 </strong>
        </h1>
        <p style={{ color: "white" }}>
          최근 프로젝트 또는 노력과 관심을 많이 투자하는 프로젝트를 언급합니다.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={light}
              isBlog={false}
              title="Light"
              badges={['C++', 'IOCP', 'OLE DB', 'Direct-X', 'Unity3D']}
              description="C++ game library"
              ghLink="https://github.com/elky84/light"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gm}
              isBlog={false}
              title="gm"
              badges={['dotnet', 'C#', 'DotNetty', 'MongoDB', 'Unity3D']}
              description="2D MMORPG 게임입니다"
              // ghLink="https://github.com/elky84/light"
              demoLink="https://www.youtube.com/watch?v=BVraOJ3WA5s"
              downloadLink="https://drive.google.com/file/d/14gzmzYJ13sKcmOlVEuwDe238V0AN18wu/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="blog"
              badges={['jekyll']}
              description="개발 관련 이야기, 또 가끔은 개인적인 이야기도 하는 개발 블로그입니다"
              ghLink="https://github.com/elky84/elky84.github.io"
              demoLink="https://elky84.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webCrawler}
              isBlog={false}
              title="web-crawler"
              badges={['dotnet', 'C#', 'MongoDB']}
              description="C# .NET CORE로 만든 web-crawler 입니다."
              ghLink="https://github.com/elky84/web-crawler"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={srpg}
              isBlog={false}
              title="SRPG"
              badges={['dotnet', 'C#', 'Unity3D']}
              description="2D SRPG Game"
              demoLink="https://www.youtube.com/watch?v=ojFI4uvDnhA"
              downloadLink="https://drive.google.com/file/d/1_-8mTDF4bBEhYmt2-0e6ReAMbZtMGNA6/view?usp=sharing"   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={excel}
              isBlog={false}
              title="ExcelToDotnet"
              badges={['dotnet', 'C#']}
              description="Excel sheet (xlsx)를 C# 코드와 JSON으로 변환해주는 툴입니다. dotnet global cli로 이용 가능합니다."
              ghLink="https://github.com/elky84/ExcelToDotnet"   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lol}
              isBlog={false}
              title="lol-crawler"
              badges={['dotnet', 'C#', 'MongoDB']}
              description="친구의 게임 시작/승패를 추적하세요. C# .NET Core로 만들었습니다"
              ghLink="https://github.com/elky84/lol-crawler"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rss}
              isBlog={false}
              title="rss-feed-crawler"
              badges={['dotnet', 'C#', 'MongoDB']}
              description="RSS Feed를 구독하고, 슬랙 또는 Discord 알림을 발생 시키는 어플리케이션입니다"
              ghLink="https://github.com/elky84/rss-feed-crawler"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="stock-crawler"
              badges={['dotnet', 'C#', 'MongoDB']}
              description="네이버 주식을 크롤링하고, 크롤링 된 데이터를 기준으로 다양한 모의 투자를 해보는 모의 투자 서비스입니다"
              ghLink="https://github.com/elky84/stock-crawler"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
