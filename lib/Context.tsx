import { createContext, useContext } from 'react'
import { ContextData, NULL_CONTEXT } from './ThemeProvider'
export const Context = createContext<ContextData>(NULL_CONTEXT)
export const useTheme = () => useContext(Context)
export default Context
