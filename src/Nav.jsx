import { useNavigate } from "react-router-dom"


const Nav = () => {
const navigate = useNavigate()

    return(
        <div className='navbar'>
            <ul>
                <li onClick={() => navigate('/')}>Dashboard</li>
                <li onclick={() => navigate('/events')}>Events</li>
                <li onclick={() => navigate('/help')}> Help</li>
                <li onclick= {() => navigate('/logout')}>Logout</li>
            </ul>
        </div>
    )
}

export default Nav 