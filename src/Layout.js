import React from 'react';



const BarNotification = (props) =>{
    
    return(
        <article className='top-bar-notification'>
        <h1>{props.title} <a className="notification-count">{props.notificationCount}</a></h1>
        
        <button onClick={props.markAllAsRead}>{props.text}</button>
        {props.children}
        </article>
    );
};

const BarNotificationReacted = (props) =>{

    const combinedClass = `${props.read} box-notification`;
    return(<div  className={combinedClass}>
    <img src={props.user} alt="icon user" className="user-icon"/>
    <div className="notification-content">
        <a className="user">{props.userName}</a> reacted to your recent post <a className="link">{props.content}</a>
        <p className="time">{props.time} ago</p>
    </div>
    </div>
);
};

const BarNotificationFollowed = (props) =>{

    const combinedClass = `${props.read} box-notification`;
    return(
        <div className={combinedClass}>
        <img src={props.user} alt="icon user" className="user-icon"/>
        <div className="notification-content">
        <a className="user">{props.userName}</a> followed you<a className="link"></a>
        <p className="time">{props.time} ago</p>
      </div>
      </div>
    );
};

const BarNotificationGroup = (props) =>{

    const combinedClass = `${props.read} box-notification`;
    return(
        <div className={combinedClass}>
        <img src={props.user} alt="icon user" className="user-icon"/>
        <div className="notification-content">
        <a className="user">{props.userName}</a> {props.actividad} <a className="link">Chess Club</a>
        <p className="time">{props.time} ago</p>
        </div>
      </div>
    );
};

const BarNotificationSend = (props) =>{

    const combinedClass = `${props.read} box-notification`;
    return(
        <div className={combinedClass}>
        <img src={props.user} alt="icon user" className="user-icon"/>
        <div className="notification-content">
        <a className="user">{props.userName}</a> sent you a private message
        <p className="time">{props.time} ago</p>
        <p className="message">Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
          I'm already having lots of fun and improving my game.</p>
        </div>
        </div>
    );
};

const BarNotificationCommented = (props) =>{

    const combinedClass = `${props.read} box-notification`;
    return(
        <div className={combinedClass}>
        <img src={props.user} alt="icon user" className="user-icon"/>
        <div className="notification-content">
        <a className="user">{props.userName}</a> commented on your picture
        <p className="time">{props.time} ago</p>
        </div>
        <img src={props.contentImage} alt="imagem de xadrez" className="image-contente"/>
    </div>
    );
}

export { BarNotification, BarNotificationReacted, BarNotificationFollowed, BarNotificationGroup,BarNotificationSend , BarNotificationCommented};