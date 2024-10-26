import RightSideBar from '@/components/RightSideBar';
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = {firstName: 'Sam', lastName: 'Alaziz', email: 'husam636@gmail.com'};

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                    type= "greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your accounts and transactions effeciently"
                />

                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                />
            </header>

            RECENT TRANSACTIONS
        </div>

        <RightSideBar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:123.50}, {currentBalance:500.50}]}
        />
    </section>
  )
}

export default Home