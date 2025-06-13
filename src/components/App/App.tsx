import './App.css';
import MainMenu from '../MainMenu/MainMenu';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Battle from '../Battle/Battle';
import Setup from '../Setup/Setup';
import { Route, Routes } from 'react-router';


function App() {

    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<MainMenu />}></Route>
                <Route path='/setup' element={<Setup />}></Route>
                <Route path='/battle' element={<Battle />}></Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
