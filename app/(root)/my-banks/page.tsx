import React from 'react';
import BankCard from '@/components/BankCard';

const MyBanks = () => {
  
  const bankAccounts = [
    { 
      id: "1", 
      name: "Bank 1", 
      currentBalance: 5200.00, 
      mask: "****1234", 
      accountType: "Checking"
    },
    { 
      id: "2", 
      name: "Bank 2", 
      currentBalance: 3150.00, 
      mask: "****5678", 
      accountType: "Savings"
    },
    { 
      id: "3", 
      name: "Bank 3", 
      currentBalance: 12500.00, 
      mask: "****9876", 
      accountType: "Business"
    }
  ];

  return (
    <div className="bg-gray-800 min-h-screen text-gray-100">
      
      <div className="py-12 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-white">My Banks</h1>
          <p className="mt-2 text-lg text-gray-400">Manage and view your bank accounts with ease</p>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bankAccounts.map((account) => (
          <BankCard 
            key={account.id}
            account={account}
            userName="John Doe"
            showBalance={true}
          />
        ))}
      </div>

      
      <div className="bg-gray-900 py-4 mt-8">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="text-sm text-gray-400">Banking App</span>
          <p className="text-sm text-gray-500">contact@PayFlowapp.com</p>
        </div>
      </div>
    </div>
  );
};

export default MyBanks;
