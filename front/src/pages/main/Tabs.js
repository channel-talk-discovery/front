import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AbcIcon from '@mui/icons-material/Abc';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CelebrationIcon from '@mui/icons-material/Celebration';

export const tabs = [
  { id: 0, value: 'all', label: '모두보기', icon: <AbcIcon /> },
  { id: 1, value: 'date', label: '데이트', icon: <FavoriteIcon /> },
  // { id: 2, value: 'idea', label: '영감을 주는 장소', icon: <EmojiObjectsIcon /> },
  { id: 3, value: 'surprise', label: '놀라운 장소', icon: <CelebrationIcon /> },
  { id: 4, value: 'alone', label: '나홀로 여행', icon: <AccessibilityNewIcon /> },
]

export default function MainTabs({ handleTabChange, initialTab }) {
  const handleChange = (event, newTabId) => {
    handleTabChange(newTabId);
  };

  return (
    <div style={{width: "100%"}}>
      <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", overflow: "scroll"}}>
        <Tabs value={initialTab} onChange={handleChange}>
          {tabs.map((tab) => <Tab id={tab.id} key={tab.id} label={tab.label} icon={tab.icon} iconPosition="top" />)}
        </Tabs>
      </div>
    </div>
  );
}
