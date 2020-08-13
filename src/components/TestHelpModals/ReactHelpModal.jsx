import React, { useContext } from 'react';
import { closeInfoModal } from '../../context/actions/reactTestCaseActions';
import { ReactTestCaseContext } from '../../context/reducers/reactTestCaseReducer';
import ReactModal from 'react-modal';
import styles from '../../components/TestHelpModals/ReactHelpModal.module.scss';
const closeIcon = require('../../assets/images/close.png');
const describe = require('../../assets/images/describe.png');

const ReactHelpModal = () => {
  const [{ modalOpen }, dispatchToTestCase] = useContext(ReactTestCaseContext);

  const closeModal = () => {
    dispatchToTestCase(closeInfoModal());
  };

  // const modalStyles = {
  //   overlay: {
  //     zIndex: 3,
  //   },
  // };

  return (
    <ReactModal
      className={styles.modal}
      shouldCloseOnEsc={true}
      isOpen={modalOpen}
      style={{
        overlay: {
          zIndex: 3,
        },
      }}
      ariaHideApp={false}
    >
      <img src={closeIcon} onClick={closeModal} />
      <h2>Describe(name, fn)</h2>
      <p>
        Describe creates a block that groups together several related tests. The name argument is
        simply the name of component you're testing. fn argument is the test callback function{' '}
      </p>
      <img src={describe} />
    </ReactModal>
  );
};

export default ReactHelpModal;
