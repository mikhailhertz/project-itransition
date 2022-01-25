import { createContext } from 'react'
import { io } from 'socket.io-client'

var socket = io('http://localhost:3001', {
    transports: ['websocket', 'polling']
})

export const SocketContext = createContext()

export function SocketProvider({ children }) {
    return (
        <SocketContext.Provider value={{ socket: socket }}>
            {children}
        </SocketContext.Provider>
    )
}
