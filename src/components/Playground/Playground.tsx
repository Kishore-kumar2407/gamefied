import React, { useState } from 'react';
import { Play, Save, Download, Settings, Maximize2 } from 'lucide-react';

const languages = [
  { id: 'javascript', name: 'JavaScript', extension: 'js' },
  { id: 'python', name: 'Python', extension: 'py' },
  { id: 'java', name: 'Java', extension: 'java' },
  { id: 'cpp', name: 'C++', extension: 'cpp' },
  { id: 'c', name: 'C', extension: 'c' }
];

const sampleCode = {
  javascript: `// JavaScript Playground
console.log("Hello, World!");

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci(10):", fibonacci(10));`,

  python: `# Python Playground
print("Hello, World!")

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(f"Fibonacci(10): {fibonacci(10)}")`,

  java: `// Java Playground
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Fibonacci(10): " + fibonacci(10));
    }
    
    public static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}`,

  cpp: `// C++ Playground
#include <iostream>
using namespace std;

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    cout << "Hello, World!" << endl;
    cout << "Fibonacci(10): " << fibonacci(10) << endl;
    return 0;
}`,

  c: `// C Playground
#include <stdio.h>

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    printf("Hello, World!\\n");
    printf("Fibonacci(10): %d\\n", fibonacci(10));
    return 0;
}`
};

export const Playground: React.FC = () => {
  const [activeLanguage, setActiveLanguage] = useState('javascript');
  const [code, setCode] = useState(sampleCode.javascript);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleLanguageChange = (languageId: string) => {
    setActiveLanguage(languageId);
    setCode(sampleCode[languageId as keyof typeof sampleCode]);
    setOutput('');
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Running code...\n');
    
    // Simulate code execution
    setTimeout(() => {
      if (activeLanguage === 'javascript') {
        setOutput('Hello, World!\nFibonacci(10): 55\n\n✅ Execution completed successfully');
      } else if (activeLanguage === 'python') {
        setOutput('Hello, World!\nFibonacci(10): 55\n\n✅ Execution completed successfully');
      } else {
        setOutput('Hello, World!\nFibonacci(10): 55\n\n✅ Execution completed successfully');
      }
      setIsRunning(false);
    }, 2000);
  };

  const saveCode = () => {
    const language = languages.find(lang => lang.id === activeLanguage);
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `playground.${language?.extension || 'txt'}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Code Playground</h1>
          <p className="text-gray-400">Write, test, and experiment with your code</p>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={saveCode}
            className="flex items-center space-x-2 px-4 py-2 bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 text-white rounded-lg transition-all border border-white/20 dark:border-gray-700"
          >
            <Download className="w-4 h-4" />
            <span>Save</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 text-white rounded-lg transition-all border border-white/20 dark:border-gray-700">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
        </div>
      </div>

      {/* Language Tabs */}
      <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl p-1">
        <div className="flex space-x-1 overflow-x-auto">
          {languages.map(language => (
            <button
              key={language.id}
              onClick={() => handleLanguageChange(language.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeLanguage === language.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/10 dark:hover:bg-black/20'
              }`}
            >
              {language.name}
            </button>
          ))}
        </div>
      </div>

      {/* Code Editor and Output */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[600px]">
        {/* Code Editor */}
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-white/20 dark:border-gray-800/50">
            <h3 className="text-lg font-semibold text-white">Code Editor</h3>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="h-full">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full p-4 bg-transparent text-white font-mono text-sm resize-none focus:outline-none"
              style={{ height: 'calc(100% - 60px)' }}
              placeholder="Write your code here..."
            />
          </div>
        </div>

        {/* Output Panel */}
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-white/20 dark:border-gray-800/50">
            <h3 className="text-lg font-semibold text-white">Output</h3>
            <button
              onClick={runCode}
              disabled={isRunning}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play className="w-4 h-4" />
              <span>{isRunning ? 'Running...' : 'Run Code'}</span>
            </button>
          </div>
          <div className="p-4 h-full overflow-y-auto" style={{ height: 'calc(100% - 60px)' }}>
            {output ? (
              <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap">
                {output}
              </pre>
            ) : (
              <div className="text-gray-400 text-center py-12">
                <Play className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Click "Run Code" to see the output</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-800/50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 bg-white/5 dark:bg-black/10 rounded-lg hover:bg-white/10 dark:hover:bg-black/20 transition-all text-center">
            <div className="text-2xl mb-2">📝</div>
            <div className="text-white font-medium">New File</div>
          </button>
          <button className="p-4 bg-white/5 dark:bg-black/10 rounded-lg hover:bg-white/10 dark:hover:bg-black/20 transition-all text-center">
            <div className="text-2xl mb-2">📁</div>
            <div className="text-white font-medium">Open File</div>
          </button>
          <button className="p-4 bg-white/5 dark:bg-black/10 rounded-lg hover:bg-white/10 dark:hover:bg-black/20 transition-all text-center">
            <div className="text-2xl mb-2">🔍</div>
            <div className="text-white font-medium">Format Code</div>
          </button>
          <button className="p-4 bg-white/5 dark:bg-black/10 rounded-lg hover:bg-white/10 dark:hover:bg-black/20 transition-all text-center">
            <div className="text-2xl mb-2">🚀</div>
            <div className="text-white font-medium">Share Code</div>
          </button>
        </div>
      </div>
    </div>
  );
};