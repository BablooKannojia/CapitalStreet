import React, {useState,useEffect,Ref} from 'react';
import { NavLink } from 'react-bootstrap';
// import Match1 from '../img/match1.png';
// import Match2 from '../img/match2.png';
import { BiMap } from 'react-icons/bi';
import './MatchCard.css';



export const MatchCard = () => {
    // const val =useState();
    //fetch data JSON
    let item =useState();
    const [data,setData]=useState([]);

    const getData = () => {
        fetch("https://rest.entitysport.com/v2/matches/?status=2&token=ec471071441bb2ac538a0ff901abd249&per_page=10&&paged=1")
            .then(response => {
                return response.json()
            })
            .then(data => {
        setData(data)
      })
  }
  console.warn(data);

        useEffect(()=>{
            getData()
        },[])

        // Timer
        // The state for our timer
    const [timer, setTimer] = useState('00:00:00');

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
  
            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
    const clearTimer = (e) => {
  
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    
        setTimer('00:00:10');
  
        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
    const getDeadTime = () => {
        let deadline = new Date();
  
        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    }

    return (
        <>
            <div className='container'>
                <div className='row row-cols-1 row-cols-lg-3 pb-5'>
                    <div className='content-card p-5'>
                        <div className='d-flex align-items-center justify-content-center'>

                            <img src={item.logo_url} alt='img' width='32px' height='32px' />
                            {data.length > 0 && (
                                <span>
                                    {data.map(item => (
                                        <h3 key={item.match_id} className='match-head' >
                                            {item.short_title}
                                        </h3>
                                    ))}
                                </span>
                            )}
                            <img src={item.logo_url} alt='img' width='32px' height='32px' />

                        </div>
                        <div className='text-center'>
                            {data.length > 0 && (
                                <span>
                                    {data.map(item => (
                                        <h3 className='match-head' >
                                            {item.title}
                                        </h3>
                                    ))}
                                </span>
                            )}
                            <p>T10 | No Extension</p>
                            <p className='match-location'><BiMap />Spain</p>
                        </div>
                        <div className='league-close'>
                            <span className='close-league-color'>LEAGUE CLOSES IN</span>
                            <div className='d-flex justify-content-between'>
                                <p className='mt-3'>{timer}</p>
                                <NavLink className='lobby-text mt-3' to="#">Enter Lobby</NavLink>
                            </div>
                        </div>

                    </div>
                    <div className='content-card p-5 ms-2'>
                        <div className='d-flex align-items-center justify-content-center'>

                        <img src={item.logo_url} alt="image12" width='32px' height='32px' />
                            {data.length > 0 && (
                                <span>
                                    {data.map(item=> (
                                        <h3 key={item.match_id} className='match-head' >
                                            {item.short_title}
                                        </h3>
                                    ))}
                                </span>
                            )}
                            <img src={item.logo_url} alt="image12" width='32px' height='32px' />
                                   
                        </div>
                        <div className='text-center'>
                            {data.length > 0 && (
                                <span>
                                    {data.map(item => (
                                        <h3 className='match-head' >
                                            {item.title}
                                        </h3>
                                    ))}
                                </span>
                            )}
                            <p>T10 | No Extension</p>
                            <p className='match-location'><BiMap />New Zealand</p>
                        </div>
                        <div className='league-close'>
                            <span className='close-league-color'>LEAGUE CLOSES IN</span>
                            <div className='d-flex justify-content-between'>
                                <p className='mt-3'>{timer}</p>
                                <NavLink className='lobby-text mt-3' to="#">Enter Lobby</NavLink>
                            </div>
                        </div>

                    </div>
                    <div className='content-card p-5 ms-2'>
                        <div className='d-flex align-items-center justify-content-center'>

                        <img src={item.logo_url} alt="image12" width='32px' height='32px' />
                            {data.length > 0 && (
                                <span>
                                    {data.map(item=> (
                                        <h3 key={item.match_id} className='match-head' >
                                            {item.short_title}
                                        </h3>
                                    ))}
                                </span>
                            )}
                            <img src={item.logo_url} alt="image12" width='32px' height='32px' />
                                   
                        </div>
                        <div className='text-center'>
                            {data.length > 0 && (
                                <span>
                                    {data.map(item => (
                                        <h3 className='match-head' >
                                            {item.title}
                                        </h3>
                                    ))}
                                </span>
                            )}
                            <p>T10 | No Extension</p>
                            <p className='match-location'><BiMap />New Zealand</p>
                        </div>
                        <div className='league-close'>
                            <span className='close-league-color'>LEAGUE CLOSES IN</span>
                            <div className='d-flex justify-content-between'>
                                <p className='mt-3'>{timer}</p>
                                <NavLink className='lobby-text mt-3' to="#">Enter Lobby</NavLink>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}