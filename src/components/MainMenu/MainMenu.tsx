import { Link } from 'react-router';
import { Button } from '@mui/material';
import './MainMenu.css';

function MainMenu() {
    return (
        <>
            <header className='header'>
                <div className='header__overlay'>
                    <h1 className='header__title'>Warhammer Wizard</h1>
                    <p className='header__description'>
                        Deploy. Learn. Conquer.
                    </p>
                </div>
            </header>
            <section className='battle'>
                <Button
                    className='battle__button'
                    variant='contained'
                    style={{
                        backgroundColor: '#BFD1E595',
                        color: '#1D263C',
                    }}
                >
                    <Link to='/setup'>⚔️ Start Battle</Link>
                </Button>
                {/* <Button
                    className='battle__button'
                    style={{ color: '#BFD1E5', marginTop: '10px' }}
                >
                    ⚙️ Configure Armies
                </Button> */}
            </section>
        </>
    );
}

export default MainMenu;
