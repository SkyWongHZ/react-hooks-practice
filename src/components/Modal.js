import React, { useState } from 'react';
import { Modal, Button } from 'antd';

export default (props) => {
  const [isModalVisible, setIsModalVisible] = useState(props.isVisible);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
