import './App.scss';
import {useEffect, useReducer} from 'react';
import Footer from './containers/footer';
import Header from './containers/header';
import Main from './containers/main';
import {ThemeContext} from './contexts';

const initialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? 'dark' : 'light';
};

const changer = (state, action) => {
    switch (action.type) {
        case 'light':
        case 'dark':
            return action.type;
        default:
            return state;
    }
};

const App = () => {
    console.log("app")
    const [theme, dispatch] = useReducer(changer, 'dark', initialTheme);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className={`container theme-${theme} mt-5`}>
            <div className="row justify-content-center mt-5">
                <div className="col-sm-7 col-lg-5 col-xl-4">
                    <div className="border">
                        <ThemeContext.Provider value={{theme, dispatch}}>
                            <Header />
                            <Main />
                            <Footer />
                        </ThemeContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
