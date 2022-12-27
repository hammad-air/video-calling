import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import images from '../pic/name.png';
import '../Home/index.css'

const HomePage = () => {

    const [value, setValue] = useState();
    const navigate = useNavigate();

    const HandleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`)
    }, [navigate, value])
    return (
        <form action="">
            <br />
            <br />
            <br />
        <div className="roomInput">
           {/* <center> <img className='img' src={images}/></center> */}
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                className='form'
                maxlength="8"
                placeholder='Enter Room Code' />
           <Button className='btnInput' onClick={HandleJoinRoom}>Join</Button>

        </div>
        </form>


    );
}

export default HomePage;
