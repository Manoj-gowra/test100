import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";



const HomePage = () => {
    const [roomCode, setRoomCode] = useState('');
    const navigate = useNavigate();
    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(roomCode)
        roomCode==="manoj"?navigate("/room"):navigate("/")
        // navigate("/");
        
    }
  return (
    <div className="home-page">
        <form onSubmit={HandleSubmit} className="home-page__form">
            <input value={roomCode} onChange={(e)=> setRoomCode(e.target.value)} placeholder="Enter Room Code" />
            <button>Enter</button>
        </form>
    </div>
  );
}

export default HomePage;