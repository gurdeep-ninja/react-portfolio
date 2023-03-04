import { Container, Col, Row } from 'react-bootstrap';

function Home() {
    return (
        <main>
            <section>
                <div className="jumbotron jumbotron-fluid bg-dark">
                    <Container>
                        <Row>
                            <Col md={12} lg={5}>
                                <img src="assets/images/me.png" alt="A picture of my avatar" className="jumboHeroImage" />
                            </Col>
                            <Col md={12} lg={7} >
                                <div className="jumboCopy">
                                    <h1 className="display-4">Gurdeep Bangar</h1>
                                    <p className="lead">I'm a website developer based in London, UK</p><p>Welcome to my Portfolio site</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section>
                <section>
                    <Container className="pt-3 pt-md-5 section-container">
                        <Row>
                            {/* Column 1 of 2 - Title column */}
                            <Col sm={12} md={6}>
                                <Row className="pb-2">
                                    <h2>About me</h2>
                                </Row>
                                <Row>
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
                                <Row className="mt-5 pt-5">
                                    {/* Skill 1 of 12 */}
                                    <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                        <div className="skill">HTML</div>
                                    </Col>
                                    {/* Skill 2 of 12 */}
                                    <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                        <div className="skill">CSS</div>
                                    </Col>
                                    {/* Skill 3 of 12 */}
                                    <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                        <div className="skill">UX Design</div>
                                    </Col>
                                    {/* Skill 4 of 12 */}
                                    <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                        <div className="skill">Git</div>
                                    </Col>
                                    {/* Skill 5 of 12 */}
                                    <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                        <div className="skill">GitHub</div>
                                    </Col>
                                    {/* Skill 6 of 12 */}
                                    <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                        <div className="skill">Bootstrap</div>
                                    </Col>
                                    {/* Skill 7 of 12 */}
                                    <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                        <div className="skill">JavaScript</div>
                                    </Col>
                                    {/* Skill 8 of 12 */}
                                    <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                        <div className="skill">jQuery</div>
                                    </Col>
                                    {/* Skill 9 of 12 */}
                                    <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                        <div className="skill">React</div>
                                    </Col>
                                    {/* Skill 10 of 12 */}
                                    <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                        <div className="skill">Netlify</div>
                                    </Col>
                                    {/* Skill 11 of 12 */}
                                    <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                        <div className="skill">Node.js</div>
                                    </Col>
                                    {/* Skill 12 of 12 */}

                                    <Col lg={3} sm={6} className="col-6 text-center mb-4">
                                        <div className="skill">Agile</div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </section>
        </main>
    )
}

export default Home;