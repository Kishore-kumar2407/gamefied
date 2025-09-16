import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Layout/Header';
import { Sidebar } from './components/Layout/Sidebar';
import { Dashboard } from './components/Dashboard/Dashboard';
import { MyCourses } from './components/Learning/MyCourses';
import { Practice } from './components/Learning/Practice';
import { Playground } from './components/Playground/Playground';
import { Profile } from './components/Profile/Profile';
import { Leaderboard } from './components/Leaderboard/Leaderboard';
import { Certificates } from './components/Certificates/Certificates';
import { Settings } from './components/Settings/Settings';
import { AIAssistant } from './components/AI/AIAssistant';

export type ActiveSection = 'dashboard' | 'courses' | 'practice' | 'playground' | 'profile' | 'leaderboard' | 'certificates' | 'settings';

function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('dashboard');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'courses':
        return <MyCourses />;
      case 'practice':
        return <Practice />;
      case 'playground':
        return <Playground />;
      case 'profile':
        return <Profile />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'certificates':
        return <Certificates />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
        <Header />
        <div className="flex pt-16">
          <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
          <main className="flex-1 ml-64 p-6">
            {renderActiveSection()}
          </main>
        </div>
        <AIAssistant />
      </div>
    </ThemeProvider>
  );
}

export default App;