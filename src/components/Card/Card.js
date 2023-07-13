import './Card.css';

import {BsDownload} from 'react-icons/bs';
import {FaStar,FaDownload} from 'react-icons/fa';

const Card = (props) => {
  return (
    <>
        <div className='most-popular-item'>
            <div className='card-wrapper'>
                <img className='most-populer-item-image' src={props.image}/>
                <div className='most-populer-content'>
                    <span>
                        {props.title} <br /> 
                        <span>{props.category}</span>
                    </span>
                    <ul>
                        <li>
                            <span style={{"color":"var(--color-icon)"}}><FaStar/></span>
                            <span>{props.rating}</span>
                        </li>
                        <li>
                            <span style={{"color": "var(--color-primary)"}}><FaDownload/></span>
                            <span>{props.download}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card