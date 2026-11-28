import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignal, faCamera, faEllipsisVertical, faSearch, faWifi, faBattery, faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import {CircleRing} from '../../components/additions';
import {contacts, stories, Me} from '../../db';
import './Header.scss';
import {memo, useContext} from 'react';
import {ThemeContext, RingInfo} from '../../contexts';

const myRingInfo = {
    contact: Me,
    stories: stories.find((story) => story.contact_id === Me.contact_id).story,
};

const contactRingInfos = [...contacts]
    .sort((a, b) => a.contact_id - b.contact_id)
    .map((contact) => {
        const storyInfo = stories.find((story) => story.contact_id === contact.contact_id);
        if (!storyInfo) return null;
        return {
            contactId: contact.contact_id,
            value: {contact, stories: storyInfo.story},
        };
    })
    .filter((ringInfo) => ringInfo !== null);

const ThemeToggle = () => {
    const context = useContext(ThemeContext);
    console.log("theme toggle")
    return (
        <FontAwesomeIcon
            onClick={() => context.dispatch({type: context.theme === 'light' ? 'dark' : 'light'})}
            className="text-white me-3"
            role="button"
            icon={context.theme === 'light' ? faMoon : faSun}
        />
    );
};

const Header = () => {
    console.log("header")
    return (
        <>
            <header className="d-flex align-items-center justify-content-between px-3 py-2">
                <h6 className="text-white">9:41</h6>
                <div className="d-flex align-items-center gap-1">
                    <FontAwesomeIcon className="fw-bold text-white" icon={faSignal} />
                    <FontAwesomeIcon className="fw-bold text-white" icon={faWifi} />
                    <FontAwesomeIcon className="fw-bold text-white" icon={faBattery} />
                </div>
            </header>
            <aside className="back-bg d-flex flex-column gap-3 py-3">
                <div className="d-flex mx-3 align-items-center justify-content-between">
                    <h3 className="text-white">WhatsApp</h3>
                    <div className="d-flex gap-2">
                        <ThemeToggle />
                        <FontAwesomeIcon className="fw-bold text-white" icon={faSearch} />
                        <FontAwesomeIcon className="fw-bold text-white" icon={faEllipsisVertical} />
                    </div>
                </div>
                <div className="circle-ring-list px-3 d-flex align-items-center gap-3">
                    <div className="position-relative">
                        <RingInfo.Provider value={myRingInfo}>
                            <CircleRing />
                        </RingInfo.Provider>
                        <span className="d-block position-absolute d-flex align-items-center justify-content-center camera rounded-circle bg-light">
                            <FontAwesomeIcon icon={faCamera} />
                        </span>
                    </div>
                    {contactRingInfos.map(({contactId, value}) => (
                        <RingInfo.Provider key={contactId} value={value}>
                            <CircleRing />
                        </RingInfo.Provider>
                    ))}
                </div>
            </aside>
        </>
    );
};

export default memo(Header);
