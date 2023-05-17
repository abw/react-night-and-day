import { createContext, useContext } from 'react'
export const Context = createContext()
export const useTheme = () => useContext(Context)
export default Context
