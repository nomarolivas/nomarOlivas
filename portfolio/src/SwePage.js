import {
    AiFillLinkedin,
    AiFillGithub,
  
  } from "react-icons/ai";


const Swe = () => {
    return (
        <div swePage>
            <div className="sweNav">
                <div className="sweLinks">

                    <h1>Nomar Olivas</h1>
                    <h3>Software Engineer</h3>
                    <h5>About</h5>
                    <h5>Projects</h5>
                    <h5>Resume</h5>
                    <button onClick={() => clickLinkedIn()}>
                <AiFillLinkedin />
                <button onClick={() => clickGit()}>
                <AiFillGithub />
            </button>
            </button>
                </div>
            </div>
        </div>

    );
}

export default Swe;


function clickLinkedIn() {
    window.open("https://www.linkedin.com/in/nomarolivas/", '_blank');
    
  }
  
  function clickGit() {
  
    window.open("https://github.com/nomarolivas", '_blank');
    
  }