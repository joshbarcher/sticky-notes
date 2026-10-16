import { useState } from 'react';

const WELCOME_NOTES = [
    { id: '1', text: 'Welcome! Click a note to select it.', color: 'yellow' },
    { id: '2', text: 'Refresh the page. Your notes are still here!', color: 'pink' },
    { id: '3', text: 'Open this app in two tabs and type…', color: 'mint' },
];

export default function App() {
    return (
        <div className="app">
            <header className="header">
                <div>
                    <h1>Sticky notes</h1>
                    <p>Let's build this together.</p>
                </div>
            </header>
        </div>
    );
}
