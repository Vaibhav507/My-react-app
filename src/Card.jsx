import profilePic from './assets/avatar-jessica.jpeg'

function Card() {

    return (
        <div className="card">
            <img src={profilePic} alt="profile picture" className="image"/>
            <h2 className="heading">Jessica Randall</h2>
            <p className="description">London, United Kingdom</p>
            <p>"Front-end developer and avid reader."</p>
            <div className="button">GitHub</div>
            <div className="button">Frontend Mentor</div>
            <div className="button">LinkedIn</div>
            <div className="button">Twitter</div>
            <div className="button">Instagram</div> 
        </div>   
    );
}

export default Card