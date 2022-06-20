import { createContext, useContext, useState } from 'react'
const AuthContext = createContext(false)
export const AuthProvider = ({ children }) => {
	const [isLogin, setLogin] = useState(false)
	const login = (user) => {
		console.log(user, "user");
		setLogin(user)
	}

	const logout = () => {
		setLogin(false)
	}
	return <AuthContext.Provider value={{ isLogin, login ,logout}}>{children}</AuthContext.Provider>
}
export const useAuth = () => {
	return useContext(AuthContext)
}
