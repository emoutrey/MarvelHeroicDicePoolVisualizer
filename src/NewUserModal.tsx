import Modal from 'react-modal';
import colors from 'tailwindcss/colors'
import modalContent from './modalContent.json';

const customStyles = {
  content: {
    backgroundColor: colors.neutral[800],
    width: '480px',
    minHeight: '80vh',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

function setCookie() {
    //set a cookie to remember that the modal shouldn't open next time
    return null;
}

function NewUserModal() {

    return (
        <Modal
            isOpen={true}
            style={customStyles}
            onAfterClose={setCookie}
            contentLabel={'aria'}
        >
            {Object.entries(modalContent).map(([key, value]) => (<div key={key} className="mb-4">{value}</div>))}
        </Modal>
    )
}

export default NewUserModal;
