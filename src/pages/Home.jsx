import {Container,Col,Row} from 'react-bootstrap';

function Home() {
    return (
        <main>
            <div class="jumbotron jumbotron-fluid bg-dark">
                <Container>
                    <Row>
                        <Col>
                        <img src="assets/images/me.png" alt="A picture of my avatar" class="jumboHeroImage"/>
                        </Col>

                        <Col>
                            <div class="jumboCopy">
                                <h1 class="display-4">Gurdeep Bangar</h1>
                                <p class="lead">I'm a website developer based in London, UK</p><p>Welcome to my Portfolio site</p>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </main>
    )
}

export default Home;