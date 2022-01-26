import { createContext } from 'react'
import { io } from 'socket.io-client'

var socket = io()//window.location.origin, {
//    transports: ['websocket', 'polling']
//})

export const SocketContext = createContext()

export function SocketProvider({ children }) {
    return (
        <SocketContext.Provider value={{ socket: socket }}>
            {children}
        </SocketContext.Provider>
    )
}
