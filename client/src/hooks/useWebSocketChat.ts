import { useEffect, useRef, useState } from 'react'
import { IMessage } from '../redux/reducers/chatReducer'

const WEB_SOCKET_SERVER_URL = 'ws://localhost:5000'

type SendEvent = {
    event: 'current_login' | 'private_message'
}
enum receiveEvents {
    chat_history = 'chat_history',
    private_message = 'private_message',
}

export default function useWebSocketChat(login: string, recipient: string) {
    const [messages, setMessages] = useState<IMessage[]>([])
    const socket = useRef<WebSocket>()

    useEffect(() => {
        socket.current = new WebSocket(WEB_SOCKET_SERVER_URL)
        socket.current.onopen = () => {
            const message: Pick<IMessage, 'sender' | 'recipient'> & SendEvent =
                {
                    sender: login,
                    recipient: recipient,
                    event: 'current_login',
                }
            socket.current.send(JSON.stringify(message))
        }

        socket.current.onmessage = (event) => {
            const message = JSON.parse(event.data)

            if (message.event === receiveEvents.chat_history) {
                setMessages([...message.messages])
            } else if (message.event === receiveEvents.private_message) {
                setMessages((prev) => [...prev, message])
            }
        }
        socket.current.onclose = () => {
            console.log('Socket закрыт')
        }
        socket.current.onerror = () => {
            console.log('Socket произошла ошибка')
        }

        return () => {
            if (socket.current) {
                socket.current.close()
            }
        }
    }, [login, recipient])

    function sendMessage(message: string) {
        const data: IMessage & SendEvent = {
            recipient: recipient,
            sender: login,
            message: message,
            time: new Date(),
            id: Date.now().toString(),
            event: 'private_message',
        }

        if (socket.current) {
            socket.current.send(JSON.stringify(data))
        }
    }

    return { messages, sendMessage }
}
