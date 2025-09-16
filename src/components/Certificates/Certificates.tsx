import React, { useState } from 'react';
import { Award, Download, Share2, Calendar, CheckCircle } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'Python Fundamentals',
    description: 'Completed comprehensive Python programming course',
    issueDate: '2024-03-15',
    validUntil: '2026-03-15',
    credentialId: 'PY-2024-AJ-001',
    skills: ['Python', 'OOP', 'Data Structures', 'Algorithms'],
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    status: 'active'
  },
  {
    id: 2,
    title: 'JavaScript Advanced',
    description: 'Mastered advanced JavaScript concepts and frameworks',
    issueDate: '2024-02-20',
    validUntil: '2026-02-20',
    credentialId: 'JS-2024-AJ-002',
    skills: ['JavaScript', 'ES6+', 'Async Programming', 'DOM Manipulation'],
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
    status: 'active'
  },
  {
    id: 3,
    title: 'Data Structures & Algorithms',
    description: 'Completed intensive DSA course with practical implementations',
    issueDate: '2024-01-10',
    validUntil: '2026-01-10',
    credentialId: 'DSA-2024-AJ-003',
    skills: ['Arrays', 'Trees', 'Graphs', 'Dynamic Programming'],
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
    status: 'active'
  },
  {
    id: 4,
    title: 'Machine Learning Basics',
    description: 'Introduction to ML algorithms and data science',
    issueDate: '2024-04-01',
    validUntil: 'In Progress',
    credentialId: 'ML-2024-AJ-004',
    skills: ['Machine Learning', 'Python', 'Scikit-learn', 'Data Analysis'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    status: 'in-progress'
  }
];

const stats = [
  { label: 'Certificates Earned', value: '3', icon: Award },
  { label: 'Skills Mastered', value: '12', icon: CheckCircle },
  { label: 'Completion Rate', value: '95%', icon: CheckCircle },
  { label: 'In Progress', value: '1', icon: Calendar }
];

export const Certificates: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  const downloadCertificate = (certificateId: number) => {
    // Simulate certificate download
    console.log(`Downloading certificate ${certificateId}`);
  };

  const shareCertificate = (certificateId: number) => {
    // Simulate certificate sharing
    console.log(`Sharing certificate ${certificateId}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Certificates</h1>
          <p className="text-gray-400">Your earned certificates and achievements</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {certificates.map(certificate => (
          <div 
            key={certificate.id} 
            className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl overflow-hidden hover:bg-white/15 dark:hover:bg-black/30 transition-all duration-300"
          >
            {/* Certificate Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  certificate.status === 'active' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {certificate.status === 'active' ? 'Completed' : 'In Progress'}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-1">{certificate.title}</h3>
                <p className="text-gray-300 text-sm">{certificate.description}</p>
              </div>
            </div>

            {/* Certificate Content */}
            <div className="p-6">
              {/* Certificate Details */}
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Issue Date:</span>
                  <span className="text-white">{certificate.issueDate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Valid Until:</span>
                  <span className="text-white">{certificate.validUntil}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Credential ID:</span>
                  <span className="text-white font-mono text-xs">{certificate.credentialId}</span>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-2">Skills Covered:</p>
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={() => downloadCertificate(certificate.id)}
                  disabled={certificate.status !== 'active'}
                  className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
                <button
                  onClick={() => shareCertificate(certificate.id)}
                  disabled={certificate.status !== 'active'}
                  className="flex items-center justify-center space-x-2 py-2 px-4 bg-white/10 dark:bg-black/20 text-gray-300 border border-white/20 dark:border-gray-700 rounded-lg hover:bg-white/20 dark:hover:bg-black/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Verification Info */}
      <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-lg border border-green-500/30 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Certificate Verification</h3>
            <p className="text-gray-300 text-sm mb-3">
              All certificates issued by CodeQuest are digitally signed and can be verified using the credential ID. 
              Employers and institutions can verify the authenticity of your certificates through our verification portal.
            </p>
            <button className="text-green-400 hover:text-green-300 text-sm font-medium transition-colors">
              Learn more about verification →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};