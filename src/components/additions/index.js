import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

const CircleRing = ({contact, stories}) => {
    if (!contact || !stories) return null;

    if (!Array.isArray(stories)) {
        throw new TypeError('CircleRing stories must be an array.');
    }

    let background;
    let name = contact.name.slice(0, 10)

    if (stories.length > 0) {
        const slice = 360 / stories.length;
        const gap = 5;
        const stops = [];

        stories.forEach((story, index) => {
            const start = index * slice;
            const end = start + slice - gap;
            const coming = (index + 1) * slice;

            stops.push(`#00BFA5 ${start}deg`, `#00BFA5 ${end}deg`);

            stops.push(`transparent ${end}deg ${coming}deg`);
        });

        background = `conic-gradient(${stops.join(', ')})`;
    }

    return (
        <div className="text-center">
            <div className="circle-ring" style={{background}}>
                <div className="rounded-circle bg-primary border position-relative border-2 border-bg overflow-hidden">
                    <img
                        src={contact.image}
                        alt={contact.name}
                        className="position-absolute top-50 start-50 translate-middle w-100 h-100 object-fit-cover"
                    />
                </div>
            </div>
            <p className="text-white mt-1 names">{name}</p>
        </div>
    );
};

const DoubleCheck = ({color}) => {
    return (
        <div className={`position-relative ${color}`}>
            <FontAwesomeIcon icon={faCheck} />
            <FontAwesomeIcon className="position-absolute doubler" icon={faCheck} />
        </div>
    );
};

const Chat = ({contact, messages}) => {
    if (!contact || !Array.isArray(messages) || messages.length === 0) {
        return null;
    }

    const message = messages[0];

    let messageStatus;

    switch (message.status) {
        case 'read':
            messageStatus = <DoubleCheck color="text-success" />;
            break;
        case 'pending':
            messageStatus = <FontAwesomeIcon icon={faCheck} />;
            break;
        case 'arrived':
            messageStatus = <DoubleCheck color="text-secondary" />;
            break;
        default:
            messageStatus = null;
    }

    return (
        <div className="d-flex gap-2">
            <span className="chat-logo position-relative rounded-circle overflow-hidden">
                <img src={contact.image} alt="" className="w-100 h-100 top-50 start-50 object-fit-cover translate-middle position-absolute" />
            </span>
            <div className="d-flex flex-column flex-fill gap-1 justify-content-center chat-content">
                <div className="d-flex align-items-center justify-content-between">
                    <h5>{contact.name}</h5>
                    <p>{message.time}</p>
                </div>
                <div className="d-flex">
                    {messageStatus}
                    <p className="overflow-hidden ms-1 message">{message.text}</p>
                    <span>...</span>
                </div>
            </div>
        </div>
    );
};

export {CircleRing, Chat};
