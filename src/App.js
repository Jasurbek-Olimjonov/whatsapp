import './App.css';
import {useState} from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';

const App = () => {
    const [theme, setTheme] = useState('light');

    const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return (
        <div className={`container theme-${theme} mt-5`}>
            <div className="row justify-content-center mt-5">
                <div className="col-sm-7 col-lg-5 col-xl-4">
                    <div className="border">
                        <Header changeTheme={changeTheme} theme={theme} />
                        <Main />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
