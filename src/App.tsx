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

  const onNavTap0 = useCallback(() => {
    'background only';
    setSelectedIcon(0);
  }, [0]);

  const onNavTap1 = useCallback(() => {
    'background only';
    setSelectedIcon(1);
  }, [1]);

  const onNavTap2 = useCallback(() => {
    'background only';
    setSelectedIcon(2);
  }, [2]);

  const onNavTap3 = useCallback(() => {
    'background only';
    setSelectedIcon(3);
  }, [3]);

  return (
    <view>
      <view className="Navbar">
        <view className="Navbar-container">
          {/* Button 0 */}
          <view className="Icon" bindtap={onNavTap0}>
            <image className="Icon--navbar" src={clock} />
            {selectedIcon === 0 && <view className="Navbar-button-highlight" />}
          </view>
          
          {/* Button 1 */}
          <view className="Icon" bindtap={onNavTap1}>
            <image className="Icon--navbar" src={clock} />
            {selectedIcon === 1 && <view className="Navbar-button-highlight" />}
          </view>
          
          {/* Button 2 */}
          <view className="Icon" bindtap={onNavTap2}>
            <image className="Icon--navbar" src={clock} />
            {selectedIcon === 2 && <view className="Navbar-button-highlight" />}
          </view>
          
          {/* Button 3 */}
          <view className="Icon" bindtap={onNavTap3}>
            <image className="Icon--navbar" src={clock} />
            {selectedIcon === 3 && <view className="Navbar-button-highlight" />}
          </view>
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
