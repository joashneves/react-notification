import logo from './logo.svg';
import React, { useState , useEffect } from 'react';
import './App.css';
import { BarNotification, BarNotificationReacted, BarNotificationFollowed, BarNotificationGroup,BarNotificationSend , BarNotificationCommented} from './Layout.js'
import jsonData from './dados.json';

const componentsByType = {
  reacted: BarNotificationReacted,
  followed: BarNotificationFollowed,
  group : BarNotificationGroup,
  send : BarNotificationSend,
  commented : BarNotificationCommented
}

function App() {
  const [notificationData, setNotificationData] = useState(jsonData);
    const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    const notificationElements = document.querySelectorAll('.false');
    setNotificationCount(notificationElements.length);
  }, [notificationData]);

  const markAllAsRead = () => {
    const updatedData = [...notificationData];
    updatedData.forEach(item => {
      item.read = "true";
    });
    setNotificationData(updatedData);
  };


  return (
    <article className='box'>
      <BarNotification title={`Notifications`}
       text={`Mark all as read`} 
        markAllAsRead={markAllAsRead}
        notificationCount={notificationCount}>
      </BarNotification>

      {jsonData.map((data, index) => {
        const Component = componentsByType[data.type];
        return <Component key={index} 
          user={data.user}
             userName={data.userName}
               time={data.time}
               content={data.content}
                contentImage={data.contentImage}
                  actividad={data.actividad}
                    read={data.read}  />;
      })}
    </article>
  );
}

export default App;
