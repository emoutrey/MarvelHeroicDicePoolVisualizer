import Modal from 'react-modal';
import colors from 'tailwindcss/colors'

const customStyles = {
  content: {
    backgroundColor: colors.neutral[800],
    width: '50vw',
    minWidth: '480px',
    height: '80vh',
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
            <div className="mb-4">Welcome to Cortex Plus Dice Pool Visualizer!</div>
            <div className="mb-4">Cortex Plus is the underpinning of multiple tabletop systems, including <i>Leverage: The Roleplaying Game</i>, <i>The Firefly Role-Playing Game</i>, <i>The Smallville Roleplaying Game</i>, and <i>Marvel Heroic Roleplaying</i>.</div>
            <div className="mb-4">To make a roll in a Cortex Plus system, you assemble your dice pool from your character's abilities, and then roll all of them. You then select either the top two or top three results, and add them together for your Result.</div>
            <div className="mb-4">In addition, a remaining die -- one which did not contribute to the Result -- is selected as the Effect Die for the roll. Any rolls of a one additionally generate Opportunities for your opponent.</div>
            <div className="mb-4">As it is not straightforward to figure out what to expect from a dice pool during play, I created this tool to visualize average Results, Effect Dice, and Opportunity generation for a given roll.</div>
            <div className="mb-4">I hope this tool helps you as it did me! Happy gaming!</div>
            <div className="mb-4">To view this modal again after closing it, click the (put an icon here) icon in the top right.</div>
        </Modal>
    )
}

export default NewUserModal;
