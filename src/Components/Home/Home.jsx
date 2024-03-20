import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div className="text-center mb-12">
            <Header></Header>
            <h1 className="text-3xl mb-5 mt-5 font-bold">THis is home Section</h1>
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />  Quod cum assumenda illum laborum in cumque!</p>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;