import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  HelpCircle, 
  Save,
  Moon,
  Sun,
  Monitor
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface SettingsSection {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
}

const settingsSections: SettingsSection[] = [
  { id: 'profile', title: 'Profile Settings', icon: User },
  { id: 'notifications', title: 'Notifications', icon: Bell },
  { id: 'privacy', title: 'Privacy & Security', icon: Shield },
  { id: 'appearance', title: 'Appearance', icon: Palette },
  { id: 'language', title: 'Language & Region', icon: Globe },
  { id: 'help', title: 'Help & Support', icon: HelpCircle }
];

export const Settings: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('profile');
  const [settings, setSettings] = useState({
    profile: {
      displayName: 'Alex Johnson',
      email: 'alex.johnson@email.com',
      bio: 'Full-stack developer passionate about algorithms',
      publicProfile: true
    },
    notifications: {
      emailNotifications: true,
      pushNotifications: true,
      streakReminders: true,
      courseUpdates: true,
      leaderboardUpdates: false,
      weeklyDigest: true
    },
    privacy: {
      profileVisibility: 'public',
      showProgress: true,
      showAchievements: true,
      dataSharing: false,
      twoFactorAuth: false
    },
    appearance: {
      theme: isDark ? 'dark' : 'light',
      fontSize: 'medium',
      codeTheme: 'dark',
      animations: true
    },
    language: {
      language: 'en',
      timezone: 'America/New_York',
      dateFormat: 'MM/DD/YYYY'
    }
  });

  const updateSetting = (section: string, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [key]: value
      }
    }));
  };

  const renderProfileSettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-white font-medium mb-2">Display Name</label>
        <input
          type="text"
          value={settings.profile.displayName}
          onChange={(e) => updateSetting('profile', 'displayName', e.target.value)}
          className="w-full px-4 py-2 bg-white/10 dark:bg-black/20 border border-white/20 dark:border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      
      <div>
        <label className="block text-white font-medium mb-2">Email</label>
        <input
          type="email"
          value={settings.profile.email}
          onChange={(e) => updateSetting('profile', 'email', e.target.value)}
          className="w-full px-4 py-2 bg-white/10 dark:bg-black/20 border border-white/20 dark:border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      
      <div>
        <label className="block text-white font-medium mb-2">Bio</label>
        <textarea
          value={settings.profile.bio}
          onChange={(e) => updateSetting('profile', 'bio', e.target.value)}
          rows={3}
          className="w-full px-4 py-2 bg-white/10 dark:bg-black/20 border border-white/20 dark:border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
        />
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-white font-medium">Public Profile</h4>
          <p className="text-gray-400 text-sm">Allow others to view your profile</p>
        </div>
        <button
          onClick={() => updateSetting('profile', 'publicProfile', !settings.profile.publicProfile)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            settings.profile.publicProfile ? 'bg-purple-600' : 'bg-gray-600'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.profile.publicProfile ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      {Object.entries(settings.notifications).map(([key, value]) => (
        <div key={key} className="flex items-center justify-between">
          <div>
            <h4 className="text-white font-medium capitalize">
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </h4>
            <p className="text-gray-400 text-sm">
              {key === 'emailNotifications' && 'Receive updates via email'}
              {key === 'pushNotifications' && 'Get browser notifications'}
              {key === 'streakReminders' && 'Daily streak reminder notifications'}
              {key === 'courseUpdates' && 'New course and content notifications'}
              {key === 'leaderboardUpdates' && 'Rank change notifications'}
              {key === 'weeklyDigest' && 'Weekly progress summary'}
            </p>
          </div>
          <button
            onClick={() => updateSetting('notifications', key, !value)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              value ? 'bg-purple-600' : 'bg-gray-600'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                value ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      ))}
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-white font-medium mb-3">Theme</label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { id: 'light', label: 'Light', icon: Sun },
            { id: 'dark', label: 'Dark', icon: Moon },
            { id: 'system', label: 'System', icon: Monitor }
          ].map(theme => {
            const Icon = theme.icon;
            return (
              <button
                key={theme.id}
                onClick={() => {
                  updateSetting('appearance', 'theme', theme.id);
                  if (theme.id !== 'system') {
                    if ((theme.id === 'dark') !== isDark) {
                      toggleTheme();
                    }
                  }
                }}
                className={`flex flex-col items-center space-y-2 p-4 rounded-lg border-2 transition-all ${
                  (theme.id === 'dark' && isDark) || (theme.id === 'light' && !isDark)
                    ? 'border-purple-500 bg-purple-500/20'
                    : 'border-gray-600 bg-white/5 dark:bg-black/10'
                }`}
              >
                <Icon className="w-6 h-6 text-gray-400" />
                <span className="text-white text-sm">{theme.label}</span>
              </button>
            );
          })}
        </div>
      </div>
      
      <div>
        <label className="block text-white font-medium mb-2">Font Size</label>
        <select
          value={settings.appearance.fontSize}
          onChange={(e) => updateSetting('appearance', 'fontSize', e.target.value)}
          className="w-full px-4 py-2 bg-white/10 dark:bg-black/20 border border-white/20 dark:border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="small" className="bg-gray-800">Small</option>
          <option value="medium" className="bg-gray-800">Medium</option>
          <option value="large" className="bg-gray-800">Large</option>
        </select>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-white font-medium">Animations</h4>
          <p className="text-gray-400 text-sm">Enable UI animations and transitions</p>
        </div>
        <button
          onClick={() => updateSetting('appearance', 'animations', !settings.appearance.animations)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            settings.appearance.animations ? 'bg-purple-600' : 'bg-gray-600'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.appearance.animations ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'profile':
        return renderProfileSettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'appearance':
        return renderAppearanceSettings();
      default:
        return (
          <div className="text-center py-12">
            <p className="text-gray-400">Settings for {activeSection} coming soon!</p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
          <p className="text-gray-400">Manage your account and application preferences</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all">
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl p-4">
            <nav className="space-y-2">
              {settingsSections.map(section => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-white'
                        : 'text-gray-300 hover:bg-white/5 dark:hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${activeSection === section.id ? 'text-purple-400' : ''}`} />
                    <span className="font-medium">{section.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">
              {settingsSections.find(s => s.id === activeSection)?.title}
            </h2>
            {renderActiveSection()}
          </div>
        </div>
      </div>
    </div>
  );
};