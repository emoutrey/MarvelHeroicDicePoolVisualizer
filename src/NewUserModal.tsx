import { useState } from 'react'
import Modal from 'react-modal';
import colors from 'tailwindcss/colors'

//is there a way to use Tailwind here?
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
    const [open, setOpen] = useState(true);

    // TODO:
    // Set cookie when modal is closed and don't open on page load if cookie is set
    // Put icon in top right to re-open modal if requested
    // Make bottom div Fixed
    // Style modal content (title, etc)
    // Figure out wonkiness with modal height and button text centering
    
    return (
        <Modal
            isOpen={open}
            style={customStyles}
            onAfterClose={setCookie}
            contentLabel={'aria'}
        >
            <div className='mb-4'>Welcome to Cortex Plus Dice Pool Visualizer!</div>
            <div className='mb-4'>Cortex Plus is the underpinning of multiple tabletop systems, including <i>Leverage: The Roleplaying Game</i>, <i>The Firefly Role-Playing Game</i>, <i>The Smallville Roleplaying Game</i>, and <i>Marvel Heroic Roleplaying</i>.</div>
            <div className='mb-4'>To make a roll in a Cortex Plus system, you assemble your dice pool from your character's abilities, and then roll all of them. You then select either the top two or top three results, and add them together for your Result.</div>
            <div className='mb-4'>In addition, a remaining die -- one which did not contribute to the Result -- is selected as the Effect Die for the roll. Any rolls of a one additionally generate Opportunities for your opponent.</div>
            <div className='mb-4'>As it is not straightforward to figure out what to expect from a dice pool during play, I created this tool to visualize average Results, Effect Dice, and Opportunity generation for a given roll.</div>
            <div className='mb-4'>I hope this tool helps you as it did me! Happy gaming!</div>
            <div className='mb-4'>To view this modal again after closing it, click the (put an icon here) icon in the top right.</div>
            <div className='flex justify-center'>
                <button className='border rounded-xl border-neutral-600 hover:border-neutral-300 transition-colors duration-250 px-4 py-2 active:scale-95' onClick={() => setOpen(false)}>
                    <span className=''>Close</span>
                </button>
            </div>
        </Modal>
    )
}

export default NewUserModal;
