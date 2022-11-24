import './App.css'; 
import tong from  './tong.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={tong} alt='tong' className='userImg'/>
        </div>
    )
}

export default Navbar;