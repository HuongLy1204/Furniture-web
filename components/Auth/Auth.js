import { createContext, useContext, useState } from 'react'
const AuthContext = createContext(null)
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState("thang123")
	const login = (user) => {
		setUser(user)
	}
	console.log(user,"auth");

	const logout = () => {
		setLogin(null)
	}
	return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}
export const useAuth = () => {
	return useContext(AuthContext)
}
