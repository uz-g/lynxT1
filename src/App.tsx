import { useCallback, useEffect, useState } from '@lynx-js/react';

import './App.css';
import arrow from './assets/arrow.png';
import lynxLogo from './assets/lynx-logo.png';
import reactLynxLogo from './assets/react-logo.png';
import clock from './assets/clock-white.png';

export function App() {
  const [alterLogo, setAlterLogo] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(0);

  useEffect(() => {
    console.info('Hello, ReactLynx');
  }, []);

  const onTap = useCallback(() => {
    'background only';
    setAlterLogo(!alterLogo);
  }, [alterLogo]);

  const onIconTap = useCallback((index: number) => {
    'background only';
    setSelectedIcon(index);
  }, []);

  return (
    <view>
      <view className="Navbar">
        <view className="Navbar-container">
          {[0, 1, 2, 3].map((index) => (
            <view 
              key={index}
              className={`Navbar-icon-wrapper ${selectedIcon === index ? 'Navbar-icon-selected' : ''}`}
              bindtap={() => onIconTap(index)}
            >
              <image 
                className="Navbar-icon" 
                src={clock} 
                bindtap={() => onIconTap(index)} 
              />
            </view>
          ))}
        </view>
      </view>

      <view className="Background" />
      <view className="App">
        <view className="Banner">
          <view className="Logo" bindtap={onTap}>
            {alterLogo ? (
              <image src={reactLynxLogo} className="Logo--react" />
            ) : (
              <image src={lynxLogo} className="Logo--lynx" />
            )}
          </view>
          <text className="Title">React</text>
          <text className="Subtitle">on Lynx</text>
        </view>
        <view style={{ flex: 1.1 }} />
      </view>
    </view>
  );
}
