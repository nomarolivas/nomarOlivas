import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="nomar-Title" >Nomar Olivas</h1>


                <Link to="/SwePage"><button class="link-btn">Software Engineer</button></Link>
                <Link to="/ItPage"><button class="link-btn">IT Specialist</button></Link>

            </header>
        </div>

    );
}

export default Home;

