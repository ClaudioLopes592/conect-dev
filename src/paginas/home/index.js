import React from 'react';
import Header from './componentes/header';
import './style.css';

function Home() {
    return (
        <div>
            <Header/>
            <main className="main">
                <div className="nav-bar">
                    navbar
                </div>
                <div className="feed">
                    feed
                </div>
            </main>
        </div>
    );
}

export default Home;