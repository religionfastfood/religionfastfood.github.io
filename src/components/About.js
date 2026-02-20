
import { Tab, Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { ProgressBar } from 'react-bootstrap';
import { BriefcaseOutline } from 'react-ionicons';
import '../component-css/About_CSS.css';
import FileSaver from 'file-saver';

const saveFile =() => { 
    FileSaver.saveAs(
    process.env.PUBLIC_URL + "/resources/Resume.pdf", "Chris_McDonald_Resume.pdf"
    );
};

function About(){
    
    return(
        <section id="about" class="ftco-section">
            <div class="container-xl">
                <div class="row g-xl-5">
                    <div class="col-md-6 d-block align-items-center">
                        <div class="img-about">                           
                        </div>
                    </div>
                    <div class="col-md-6 d-block align-items-center">
                        <div class="my-5">
                            <Tab.Container id="about-me-tabs" defaultActiveKey="first">
                                    <Nav variant="pills">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">ABOUT ME</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">SKILLS</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">EXPERIENCE</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="py-4">
                                        <Tab.Pane eventKey="first">
                                            <h2 class="mb-4 mono">MY STORY</h2>
                                            <p> I'm creative and analytical with a passion for good design. Reskilled into IT from Hospitality in 2019. Work that has complexity, impact, and social or humanitarian value keeps me engaged, as will ambitious and curious people.</p>
                                            <p>AUS-{'>'}NZ-{'>'}USA. Lost the accent, unfortunately.</p>
                                            <h3 class="mb-4 mono"> I'm currently looking for a backend or full stack developer role. </h3>
                                            <p>Enjoy the site!</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <h2 class="mb-4 mono">SKILLS</h2>
                                            <p>I have over 3 years experience developing software in an enterprise environment. These are some of the skills I'm looking to use and improve upon, but I like to always be learning and can pick up new technologies easily. </p>
                                            <div class="row mt-5">
                                                <div class="col-lg-6">
                                                    <div class="progress-wrap">
                                                        <h3 class="mono">C#/.NET</h3>
                                                        <ProgressBar now={100}></ProgressBar>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="progress-wrap">
                                                        <h3 class="mono">Java</h3>
                                                        <ProgressBar now={100}></ProgressBar>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="progress-wrap">
                                                        <h3 class="mono">Relational Databases</h3>
                                                        <ProgressBar now={100}></ProgressBar>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="progress-wrap">
                                                        <h3 class="mono">RESTful Microservices</h3>
                                                        <ProgressBar now={100}></ProgressBar>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="progress-wrap">
                                                        <h3 class="mono">Stream & Batch Processing</h3>
                                                        <ProgressBar now={100}></ProgressBar>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <div class="row">
                                                <div class="cold-md-12">
                                                    <div class="resume-wrap d-flex align-items-stretch">
                                                        <div class="w-100">
                                                            <h2 class="mt-3 mono">SOFTWARE ENGINEER</h2>
                                                            <span class="date">2021 - 2024</span>
                                                            <span class="position"><BriefcaseOutline height="15px" width="15px"/><a class="link" href="https://nri-na.com/">NRI North America</a></span>
                                                            <div class="mt-2">
                                                            <p>Technologies used: Java, C#, Kotlin, SQL, Apache Kafka</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="resume-wrap d-flex align-items-stretch">
                                                        <div class="w-100">
                                                            <h2 class="mt-3 mono">TEST ENGINEER</h2>
                                                            <span class="date">2020 - 2021</span>
                                                            <span class="position"><BriefcaseOutline height="15px" width="15px"/><a class="link" href="http://hyland.com/en">Hyland Software</a></span>
                                                            <div class="mt-2">
                                                            <p>Technologies used: C#, .NET, React, Javascript, Typescript, MSSQL, Selenium, WinAppDriver</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="resume-wrap d-flex align-items-stretch">
                                                        <div class="w-100">
                                                            <h2 class="mono">FULL-STACK DEVELOPMENT STUDENT</h2>
                                                            <span class="date">2019-2020</span>
                                                            <span class="position"><BriefcaseOutline height="15px" width="15px"/><a class="link" href="http://techelevator.com">Tech Elevator</a></span>
                                                            <div class="mt-2">
                                                            <p>Completed a 14-week coding bootcamp learning to create dynamic web-applications using the java programming language.</p>
                                                            <p>Technologies used: Java, HTML, CSS, JavaScript, Spring MVC, Vue.js, SQL</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="resume-wrap d-flex align-items-stretch">
                                                            <Button variant="light" size="lg" onClick={saveFile}>Resume</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;