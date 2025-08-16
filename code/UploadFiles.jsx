//uploadFiles.jsx
import React, { useState } from 'react';
import './uploadFiles.css'; // Assuming you have a CSS file for styling

/** * UploadFiles component allows users to upload multiple files.
 * It displays the selected files in a preview area.
 * @param {Function} onUpload - Callback function to handle file uploads.
**/


function UploadFiles({ onUpload }) {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files);
    setFiles(selected);
    if (onUpload) onUpload(selected);
  };

  return (
    <div className="upload-section">
      <label htmlFor="fileUpload">Upload Files:</label>
      <input
        type="file"
        id="fileUpload"
        multiple
        onChange={handleFileChange} />
      <div className="preview-area">
        {files.map((file, index) => (
          <p key={index}>📎 {file.name}</p>
        ))}
      </div>
    </div>
  );
}

export default UploadFiles;
