import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/authentication/login/login'
export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )

}