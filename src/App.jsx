import React, { useState, useEffect } from 'react';

export default function PomodoroTimer() {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(25 * 60);
    const [activeMode, setActiveMode] = useState('pomodoro');
    const [sessionCount, setSessionCount] = useState(1);

    const modes = {
        pomodoro: { time: 25 * 60, bgColor: '#ba4949' },
        shortBreak: { time: 5 * 60, bgColor: '#38858a' },
        longBreak: { time: 15 * 60, bgColor: '#397097' }
    };

    function handleModeChange(mode) {
        setIsRunning(false);
        setActiveMode(mode);
        setTime(modes[mode].time);
        document.body.style.backgroundColor = modes[mode].bgColor;
    }

    function toggleTimer() {
        setIsRunning(!isRunning);
        if (!isRunning && activeMode === 'pomodoro') {
            setSessionCount(prev => prev + 1);
        }
    }

    useEffect(() => {
        let timer;
        if (isRunning && time > 0) {
            timer = setTimeout(() => setTime(time - 1), 1000);
        } else if (time === 0) {
            setIsRunning(false);
            // You might want to add a sound or notification here
        }
        return () => clearTimeout(timer);
    }, [isRunning, time]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };

    return (
        <div>
            <div className="timer-nav">
                <button 
                    id="pomodoro" 
                    className={activeMode === 'pomodoro' ? 'active' : ''}
                    onClick={() => handleModeChange('pomodoro')}
                >
                    Pomodoro
                </button>
                <button 
                    id="shortBreak" 
                    className={activeMode === 'shortBreak' ? 'active' : ''}
                    onClick={() => handleModeChange('shortBreak')}
                >
                    Short Break
                </button>
                <button 
                    id="longBreak" 
                    className={activeMode === 'longBreak' ? 'active' : ''}
                    onClick={() => handleModeChange('longBreak')}
                >
                    Long Break
                </button>
            </div>
            <div id="display-timer">{formatTime(time)}</div>
            <button id="button-timer" onClick={toggleTimer}>
                {isRunning ? 'STOP' : 'START'}
            </button>
            <div className="session-count">#{sessionCount}</div>
        </div>
    );
}