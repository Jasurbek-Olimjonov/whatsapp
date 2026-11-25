import {Chat} from '../additions';
import {messages, contacts} from '../../db';
import './Main.scss'

const Main = () => {
    return (
        <main className="px-2 pt-3 d-flex gap-2 flex-column">
            {contacts.map((contact) => {
                const belong = messages.filter((message) => contact.contact_id === message.contact_id);
                if (belong.length > 0) return <Chat key={contact.contact_id} contact={contact} messages={belong} />;
                else return null;
            })}
        </main>
    );
};

export default Main;
