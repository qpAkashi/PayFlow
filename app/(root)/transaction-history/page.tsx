import React from 'react';

const TransactionHistory = () => {
  return (
    <div className="transactions">
      {/* Page Header */}
      <div className="transactions-header">
        <div className="header-box">
          <h1 className="header-box-title">Transaction History</h1>
          <p className="header-box-subtext">View all your past transactions</p>
        </div>
      </div>

      {/* Transactions List */}
      <div className="recent-transactions">
        {/* Transaction Item 1 */}
        <div className="transaction-item flex justify-between items-center p-4 border-b border-gray-200">
          <div className="transaction-info">
            <p className="text-16 font-semibold text-gray-900">Payment to Vendor X</p>
            <p className="text-12 text-gray-600">Payment for Services</p>
          </div>
          <div className="transaction-amount">
            <p className="text-16 font-semibold text-red-600">-$200.00</p>
          </div>
        </div>

        {/* Transaction Item 2 */}
        <div className="transaction-item flex justify-between items-center p-4 border-b border-gray-200">
          <div className="transaction-info">
            <p className="text-16 font-semibold text-gray-900">Deposit from Bank Y</p>
            <p className="text-12 text-gray-600">Salary Payment</p>
          </div>
          <div className="transaction-amount">
            <p className="text-16 font-semibold text-green-600">+$3,000.00</p>
          </div>
        </div>

        {/* Transaction Item 3 */}
        <div className="transaction-item flex justify-between items-center p-4 border-b border-gray-200">
          <div className="transaction-info">
            <p className="text-16 font-semibold text-gray-900">Transfer to Bank Z</p>
            <p className="text-12 text-gray-600">Payment for rent</p>
          </div>
          <div className="transaction-amount">
            <p className="text-16 font-semibold text-blue-600">-$1,500.00</p>
          </div>
        </div>

        {/* More Transactions Link */}
        <div className="view-all-btn flex justify-center mt-6">
          <button className="text-14 font-semibold text-gray-700 border border-gray-300 px-4 py-2.5 rounded-lg">
            View All Transactions
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer_name">
          <span className="text-10 text-white">Banking App</span>
        </div>
        <div className="footer_email">
          <p className="text-12 text-gray-600">contact@PayFlowapp.com</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
