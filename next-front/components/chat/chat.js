import React, {useEffect, useState} from 'react';
import styles from '../../styles/Chat.module.css';
import io from 'socket.io-client';
import Input from '../ui_items/input';
import Message from './message';
import {useSelector} from 'react-redux';
import UserInfo from '../ui_items/userInfo';
import Axios from 'axios';

function useSocket(url) {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const socketIo = io(url)

    setSocket(socketIo)

    function cleanup() {
      socketIo.disconnect()
    }
    return cleanup

    // should only run once and not on every re-render,
    // so pass an empty array
  }, [])

  return socket
}

const Chat = () => {
    const socket = useSocket(process.env.ENDPOINT)
    const [room, setRoom] = useState('');
    const [friendInfo, setFriendInfo] = useState({
        id: 0,
        username: ''
    });
    const [messeges, setMessages] = useState([])
    const [message, setMessage] = useState('')
    const user = useSelector(state => state.user)
    const [myId, setMyId] = useState(user.info ? user.info.id  : null);
    const [users, setUsers] = useState([])
    
    useEffect(()=> {
        setMyId(user.info.id)
        Axios.get(process.env.ENDPOINT+'/get-users',{
            headers: {
                Authorization: `Bearer ${user.jwt}`
            }
        })
        .then((response) => {
            setUsers(response.data)
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [user])

    useEffect(() => {
        const userId = user.info.id;
        if(socket){
            setRoom(`${Math.max(userId,friendInfo)}$${Math.min(userId,friendInfo)}`)
            socket.emit('joinRoom',`${Math.max(userId,friendInfo)}$${Math.min(userId,friendInfo)}`)
        }
        
    }, [friendInfo])

    useEffect(() => {
        const handleNewMessage = (data) => {
            const pos = data.sender === myId ? 'right' : 'left'
            setMessages(messages => [...messages, {
                message: data.text,
                position: pos
            }]);
        }
        if (socket) {
            socket.on('message', (data) => {
                console.log(data)
                handleNewMessage(data)
            },)
        }
    }, [socket])

    const handleSubmitNewMessage = (text) => {
        console.log(room)
        socket.emit('message', { room: room, text: text, sender: user.info.id })
    }

    return (
        <div className={styles['chat']}>
            <div className={styles['chat_users']}>
                <div className={styles['chat_users_top-sec']}>
                    Messages
                </div>
                <div className={styles['chat_users_input-sec']}>
                    <Input/>
                </div>
                
                {users.map((item)=>
                    <div key={item.id} className={styles['chat_users_user-info']}>
                        <UserInfo setUserInfo={(obj) => setFriendInfo(obj)} id={item.id} letter={item.username[0].toLowerCase()} username={item.username}/>
                    </div>
                )}
            </div>
            <div className={styles['chat_messages']}>
                <div className={styles['chat_messages_top-sec']}>
                    {friendInfo.username}
                </div>
                <div className={styles['chat_messages-sec']}>
                    <div className={styles['chat_messages-sec_content']}>
                        {messeges.map((item,key)=>
                            <Message key={key} text={item.message} position={item.position}/>
                        )}
                    </div>
                </div>
                <div className={styles['chat_messages-input']}>
                    <input onChange={(e)=>setMessage(e.target.value)} value={message} placeholder="Start new message"/>
                    <div onClick={()=>handleSubmitNewMessage(message)} className={styles['chat_messages-input_button']}>
                        Send
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
