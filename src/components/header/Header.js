import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignal, faEllipsisVertical, faSearch, faWifi, faBattery, faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import {CircleRing} from '../additions';
import {contacts, stories} from '../../db';

const Header = (props) => {
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
                        <FontAwesomeIcon
                            onClick={props.changeTheme}
                            className="text-white me-3"
                            role="button"
                            icon={props.theme === 'light' ? faMoon : faSun}
                        />
                        <FontAwesomeIcon className="fw-bold text-white" icon={faSearch} />
                        <FontAwesomeIcon className="fw-bold text-white" icon={faEllipsisVertical} />
                    </div>
                </div>
                <div className="circle-ring-list ps-3 d-flex align-items-center gap-3">
                    {contacts.map((contact) => {
                        const belong = stories.find((story) => story.contact_id === contact.contact_id);
                        if (belong) {
                            return (
                                <CircleRing
                                    key={contact.contact_id}
                                    contact={contact}
                                    stories={belong.story}
                                />
                            );
                        }
                        return null;
                    })}
                </div>
            </aside>
        </>
    );
};

export default Header;
