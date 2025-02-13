"use client"

import React, { useState } from 'react';
import { Client, Databases } from 'appwrite';

const Transfer = () => {
  // Appwrite client setup
  const client = new Client();
  client.setEndpoint('https://cloud.appwrite.io/v1').setProject('679033b40021143a0a93'); // Set your Appwrite endpoint and project ID

  const databases = new Databases(client);

  // State management for form inputs
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [description, setDescription] = useState('');
  const [fromAccount, setFromAccount] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the data to be sent to Appwrite
    const transactionData = {
      amount,
      recipient,
      description,
      fromAccount,
      timestamp: new Date().toISOString(),
    };

    try {
      // Replace with your collection ID
      const collectionId = '6790959c0035ba806038';
      const databaseId = '679034c100386d6f6875'; // Your database ID

      // Create a new document in the "transactions" collection
      await databases.createDocument(databaseId, collectionId, 'unique()', transactionData);

      console.log('Transfer successful:', transactionData);
      alert('Transfer successful!');
    } catch (error) {
      console.error('Error creating document:', error);
      alert('Transfer failed. Please try again.');
    }
  };

  return (
    <div className="transfer p-8 bg-gray-25 max-w-4xl mx-auto rounded-lg shadow-md">
      {/* Page Header */}
      <div className="transfer-header mb-6">
        <h1 className="text-24 font-semibold text-gray-900">Transfer Funds</h1>
        <p className="text-14 text-gray-600">Transfer money between your accounts</p>
      </div>

      {/* Transfer Form */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          {/* From Account */}
          <div>
            <label htmlFor="fromAccount" className="text-16 font-medium text-gray-700">From Account</label>
            <select 
              id="fromAccount" 
              value={fromAccount} 
              onChange={(e) => setFromAccount(e.target.value)} 
              className="mt-2 p-2 border rounded-lg w-full"
            >
              <option value="">Select Account</option>
              <option value="Account 1">Account 1</option>
              <option value="Account 2">Account 2</option>
              <option value="Account 3">Account 3</option>
            </select>
          </div>

          {/* Amount */}
          <div>
            <label htmlFor="amount" className="text-16 font-medium text-gray-700">Amount</label>
            <input 
              id="amount" 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              placeholder="Enter amount" 
              className="mt-2 p-2 border rounded-lg w-full"
            />
          </div>

          {/* Recipient */}
          <div>
            <label htmlFor="recipient" className="text-16 font-medium text-gray-700">Recipient</label>
            <input 
              id="recipient" 
              type="text" 
              value={recipient} 
              onChange={(e) => setRecipient(e.target.value)} 
              placeholder="Enter recipient name" 
              className="mt-2 p-2 border rounded-lg w-full"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="text-16 font-medium text-gray-700">Description</label>
            <input 
              id="description" 
              type="text" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              placeholder="Enter description" 
              className="mt-2 p-2 border rounded-lg w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-center">
            <button 
              type="submit"
              className="bg-blue-500 text-white text-lg font-semibold py-2 px-4 rounded-lg"
            >
              Transfer Now
            </button>
          </div>
        </div>
      </form>

      {/* Footer */}
      <div className="footer mt-6 text-gray-600 text-center">
        <p>Secure and Fast Transactions</p>
      </div>
    </div>
  );
};

export default Transfer;
