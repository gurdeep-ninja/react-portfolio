import { Container, Col, Row } from 'react-bootstrap';
function Home() {
    return (
        <main>
            <section>
                    <Container>
                <div className="jumbotron jumbotron-fluid bg-dark">
                        <Row>
                            <Col md={12} lg={5}>
                                <img src={require("../assets/images/me.png")} alt="Me" className="jumboHeroImage" />
                            </Col>
                            <Col md={12} lg={7} className="align-self-center" >
                                <div className="jumboCopy">
                                    <h1 className="display-4">Gurdeep Bangar</h1>
                                    <p className="lead">I'm a website developer based in London, UK</p><p>Welcome to my Portfolio site</p>
                                </div>
                            </Col>
                        </Row>
                </div>
                    </Container>
            </section>
            <section>
                <Container className="pt-3 pt-md-5 section-container">
                    <Row className="p-3">
                        {/* Column 1 of 2 - About me column */}
                        <Col sm={12} md={6}>
                            <Row className="pb-2">
                                <h2>About me</h2>
                            </Row>
                            <Row className="about">
                                <p>I'm a
                                    Multimedia Technology &amp; Design graduate from Brunel University - there I
                                    dabbled into all sorts of cool stuff such as web, graphic, multimedia, 3D animation &amp;
                                    programming.</p>
                                <p>
                                    I have a keen enthusiasm for all things tech related - from building computers, working on
                                    small electronic projects to tinkering with Linux server configurations.</p>
                            </Row>
                        </Col>
                        {/* Column 2 of 2 - Content column */}
                        <Col sm={12} md={6}>
                            <Row className="mt-5">
                                {/* Skill 1 of 8 */}
                                <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                    <div className="skill"><img src={require('../assets/images/html-icon.png')} alt="HTML" /><p>HTML</p></div>
                                </Col>
                                {/* Skill 2 of 8 */}
                                <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                    <div className="skill"><img src={require("../assets/images/css-file-format-icon.png")} alt="CSS" /><p>CSS</p></div>
                                </Col>
                                {/* Skill 3 of 8 */}
                                <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                    <div className="skill"><img src={require("../assets/images/git-icon.png")} alt="GIT" /><p>Git</p></div>
                                </Col>
                                {/* Skill 4 of 8 */}
                                <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                    <div className="skill"><img src={require("../assets/images/bootstrap-5-logo-icon.png")} alt="Bootstrap" /><p>Bootstrap</p></div>
                                </Col>
                                {/* Skill 5 of 8 */}
                                <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                    <div className="skill"><img src={require("../assets/images/javascript-programming-language-icon.png")} alt="JavaScript" /><p>JavaScript</p></div>
                                </Col>
                                {/* Skill 6 of 8 */}
                                <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                    <div className="skill"><img src={require("../assets/images/jquery-icon.png")} alt="jQuery" /><p>jQuery</p></div>
                                </Col>
                                {/* Skill 7 of 8 */}
                                <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                    <div className="skill"><img src={require("../assets/images/react-js-icon.png")} alt="ReactJS" /><p>React</p></div>
                                </Col>
                                {/* Skill 8 of 9 */}
                                <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                    <div className="skill"><img src={require("../assets/images/node-js-icon.png")} alt="Node.JS" /><p>Node.js</p></div>
                                </Col>
                                {/* Skill 9 of 9 */}
                                <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                    <div className="skill"><img src={require("../assets/images/php-logo.png")} alt="PHP Logo" /><p>PHP</p></div>
                                </Col>
                                {/* Skill 10 of 12 */}
                                <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                    <div className="skill"><img src={require("../assets/images/mysql-logo.png")} alt="MySQL Logo" /><p>MySQL</p></div>
                                </Col>
                                {/* Skill 11 of 12 */}
                                <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                    <div className="skill"><img src={require("../assets/images/linux-icon.png")} alt="Linux Logo" /><p>Linux</p></div>
                                </Col>
                                {/* Skill 12 of 12 */}
                                <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                    <div className="skill"><img src={require("../assets/images/csharp-logo.png")} alt="CSharp Logo" /><p>C#</p></div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default Home;