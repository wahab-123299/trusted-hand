//inviocewizard.jsx
import React, { useState } from 'react';
import './InvoiceWizard.css'; // ✅ Correct


function InvoiceWizard({ client, job, onSend }) {
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');

  const handleSendInvoice = () => {
    const invoiceData = {
      to: client.name,
      jobTitle: job.title,
      amount,
      notes,
      date: new Date().toLocaleDateString(),
    };
    console.log("Invoice sent:", invoiceData);
    if (onSend) onSend(invoiceData);
  };

  return (
    <div className="invoice-wizard">
      <h3>Create Invoice for {client.name}</h3>
      <p><strong>Job:</strong> {job.title}</p>
      <input
        type="number"
        placeholder="Amount (₦)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)} />
      <textarea
        placeholder="Additional Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)} />
      <div className="actions">
        <button onClick={handleSendInvoice}>Send Invoice</button>
      </div>
    </div>
  );
}

export default InvoiceWizard;
