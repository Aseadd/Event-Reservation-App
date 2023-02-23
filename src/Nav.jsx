import { useNavigate } from "react-router-dom"


const Nav = () => {
const navigate = useNavigate()

    return(
        <nav className='navbar'>
            <div className="nav-logo">
                <img src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg" alt="logo" onClick={() => navigate('/')}/>
            </div>
            <ul>
                <li onClick={() => navigate('/')}>Dashboard</li>
                <li onclick={() => navigate('/eventBooking')}>Events</li>
                <li onclick={() => navigate('/help')}> Help</li>
                <li onclick= {() => navigate('/logout')}>Logout</li>
            </ul>
        </nav>
    )
}

export default Nav 