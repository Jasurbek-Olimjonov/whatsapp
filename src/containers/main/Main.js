import {memo} from 'react';
import {Chat} from '../../components/additions';
import {ChatInfo} from '../../contexts';
import {messages, contacts} from '../../db';
import './Main.scss';

const Main = () => {
    console.log("main")
    return (
        <main className="px-2 pt-3 d-flex gap-2 flex-column">
            {contacts.map((contact) => {
                const belong = messages.filter((message) => contact.contact_id === message.contact_id);
                if (belong.length > 0)
                    return (
                        <ChatInfo.Provider key={contact.contact_id} value={{contact, messages: belong}}>
                            <Chat />
                        </ChatInfo.Provider>
                    );
                else return null;
            })}
        </main>
    );
};

export default memo(Main);
