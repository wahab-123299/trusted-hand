import React, { useState } from 'react';
import './messageModal.css';
import PropTypes from 'prop-types';

const MessageModal = ({ client, onClose }) => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim()) {
      console.log(`Sending message to ${client.name}: ${message}`);
      setMessage('');
      onClose(); // Close modal after sending
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Message {client.name}</h3>
        <textarea
          placeholder={`Type your message to ${client.name} here...`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          maxLength={500}
        />
        <p className="char-count">{message.length}/500</p>
        <div className="modal-actions">
          <button onClick={sendMessage} disabled={!message.trim()}>
            Send
          </button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

MessageModal.propTypes = {
  client: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
  onClose: PropTypes.func.isRequired
};

export default MessageModal;
