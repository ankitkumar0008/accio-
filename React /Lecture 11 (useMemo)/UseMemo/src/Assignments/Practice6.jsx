import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';
const messages = [
    "What time does the meeting start?",
    "ANN: Office will be closed on Friday",
    "Please submit your reports by EOD",
    "Is the server down?",
    "ANN: New company policy released",
    "Lunch will be provided today",
    "Can anyone review my PR?",
    "ANN: Team outing scheduled for next month",
    "Deployment completed successfully",
    "Why is the build failing?",
    "Remember to update your passwords",
    "ANN: Maintenance window tonight at 11 PM",
    "Does this feature support dark mode?",
    "Daily standup moved to 10 AM",
    "ANN: Welcome our new intern!"
];
function calculate(msg) {
    console.log("categorizing messages");
    const categories = {
        questions: [],
        ann: [],
        gen: []
    };
    for (let i = 0; i < msg.length; i++) {
        const message = msg[i];

        if (message.includes("ANN:")) {
            categories.ann.push(message);
        } else if (message.includes("?")) {
            categories.questions.push(message);
        } else {
            categories.gen.push(message);
        }
    }
    console.log(categories);
    return categories
}
const Practice6 = () => {
    const [show, setShow] = useState(false);
    const cat = useMemo(() => {
        return calculate(messages);
    }, [messages])
    return (
        <div>
            <h1>Message Categories</h1>
            <button onClick={() => { setShow(!show) }}>Toggle compact view</button>
            <h2>Announcements</h2>
            <ul>
                {cat.ann.map((a,i) => {
                    return <li key={i}>{a}</li>
                })}
            </ul>

            <h2>Questions</h2>

            {
                <ul>
                    {cat.questions.map((q,i) => {
                        return <li key={i}>{q}</li>
                    })}
                </ul>
            }

            {show && <><h2>General</h2>
                <ul>
                    {cat.gen.map((g,i) => {
                        return <li key={i}>{g}</li>
                    })}
                </ul>
            </>}
        </div>
    )
}

export default Practice6
