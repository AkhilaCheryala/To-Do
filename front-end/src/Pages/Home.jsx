 import Signup from '../Components/Signup';
import './Home.css';
 import Banner from '../assets/Banner.png';
import TaskManager from './TaskManager';

const Home =()=>{
    return(
        <div className="home-page">
            <img src={Banner} alt=''/>
            <Signup/>
           
        </div>
    );
}
export default  Home;