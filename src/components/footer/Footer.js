import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMessage, faPhone, faUsers} from '@fortawesome/free-solid-svg-icons';

const Footer = (props) => (
    <footer className="border-top py-3 align-items-center">
        <div className="row px-3">
            <span className="d-flex col text-success flex-column gap-2 align-items-center">
                <FontAwesomeIcon icon={faMessage} />
                Chats
            </span>
            <span className="d-flex col flex-column rest gap-2 align-items-center">
                <FontAwesomeIcon icon={faPhone} />
                Calls
            </span>
            <span className="d-flex col flex-column rest gap-2 align-items-center">
                <FontAwesomeIcon icon={faUsers} />
                Contacts
            </span>
        </div>
    </footer>
);

export default Footer;
