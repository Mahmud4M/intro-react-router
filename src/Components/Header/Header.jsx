import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="mb-10">
            <nav>
                <Link className="text-xl ml-5 hover:bg-slate-400 p-3 rounded-xl duration-1000" to="/home">
                    Home</Link>
                <Link className="text-xl ml-5 hover:bg-slate-400 p-3 rounded-xl duration-1000" to="/users">
                    Users</Link>
                <Link className="text-xl ml-5 hover:bg-slate-400 p-3 rounded-xl duration-1000" to="/about">
                    About Us</Link>
                <Link className="text-xl ml-5 hover:bg-slate-400 p-3 rounded-xl duration-1000" to="/contact">Contact Us</Link>
            </nav>
        </div>
    );
};
export default Header;