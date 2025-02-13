import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar'; // Only import this once
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

export default function Home() {
    const loggedIn = { firstName: 'Rares' , lastName: 'Basfalion', email:'rarssionut@gmail.com'};

  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account transactions."
                />
                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={0}
                />
            </header>
            RECENT TRANSACTIONS 
        </div>
        <RightSidebar user={loggedIn} transactions={[]} banks={[{},{}]} />
    </section>
  );
}
