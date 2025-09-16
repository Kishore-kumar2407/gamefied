import React from 'react';
import { StatsCards } from './StatsCards';
import { WelcomeCard } from './WelcomeCard';
import { RecentActivity } from './RecentActivity';
import { ContinueLearning } from './ContinueLearning';
import { ProblemOfTheDay } from './ProblemOfTheDay';
import { AchievementShowcase } from './AchievementShowcase';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <WelcomeCard />
      <StatsCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <RecentActivity />
          <ProblemOfTheDay />
        </div>
        <div className="space-y-6">
          <ContinueLearning />
          <AchievementShowcase />
        </div>
      </div>
    </div>
  );
};