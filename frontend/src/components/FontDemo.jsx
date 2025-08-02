import React from 'react';

const FontDemo = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mb-4">
          NeoCred Typography Showcase
        </h1>
        <p className="font-sans text-lg text-gray-600 dark:text-gray-300">
          Explore our beautiful font combinations
        </p>
      </div>

      {/* Inter Font (Default Sans) */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border">
        <h2 className="font-sans text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Inter Font (Default)
        </h2>
        <p className="font-sans text-base text-gray-700 dark:text-gray-300 mb-2">
          Perfect for body text and UI elements. Clean, modern, and highly readable.
        </p>
        <div className="space-y-2">
          <p className="font-sans text-sm font-light">Light weight text</p>
          <p className="font-sans text-base font-normal">Normal weight text</p>
          <p className="font-sans text-lg font-medium">Medium weight text</p>
          <p className="font-sans text-xl font-semibold">Semibold weight text</p>
          <p className="font-sans text-2xl font-bold">Bold weight text</p>
        </div>
      </div>

      {/* Poppins Font (Display) */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <h2 className="font-display text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4">
          Poppins Font (Display)
        </h2>
        <p className="font-display text-base text-blue-800 dark:text-blue-200 mb-2">
          Great for headings, buttons, and prominent UI elements. Friendly and approachable.
        </p>
        <div className="space-y-2">
          <p className="font-display text-sm font-light text-blue-700 dark:text-blue-300">Light display text</p>
          <p className="font-display text-base font-normal text-blue-800 dark:text-blue-200">Normal display text</p>
          <p className="font-display text-lg font-medium text-blue-900 dark:text-blue-100">Medium display text</p>
          <p className="font-display text-xl font-semibold text-blue-900 dark:text-blue-100">Semibold display text</p>
          <p className="font-display text-2xl font-bold text-blue-900 dark:text-blue-100">Bold display text</p>
        </div>
      </div>

      {/* Playfair Display Font (Heading) */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
        <h2 className="font-heading text-2xl font-bold text-purple-900 dark:text-purple-300 mb-4">
          Playfair Display Font (Elegant Headings)
        </h2>
        <p className="font-sans text-base text-purple-800 dark:text-purple-200 mb-2">
          Perfect for elegant headings and premium branding. Adds sophistication to your design.
        </p>
        <div className="space-y-2">
          <p className="font-heading text-lg font-normal text-purple-800 dark:text-purple-200">Elegant normal text</p>
          <p className="font-heading text-xl font-medium text-purple-900 dark:text-purple-100">Elegant medium text</p>
          <p className="font-heading text-2xl font-semibold text-purple-900 dark:text-purple-100">Elegant semibold text</p>
          <p className="font-heading text-3xl font-bold text-purple-900 dark:text-purple-100">Elegant bold text</p>
        </div>
      </div>

      {/* JetBrains Mono Font (Code) */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="font-sans text-2xl font-bold text-gray-900 dark:text-white mb-4">
          JetBrains Mono Font (Code)
        </h2>
        <p className="font-sans text-base text-gray-700 dark:text-gray-300 mb-4">
          Perfect for code snippets, numbers, and technical content. Monospaced for better alignment.
        </p>
        <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 space-y-2">
          <p className="font-mono text-sm text-green-400">const calculateSIP = (amount, rate, years) =&gt; &#123;</p>
          <p className="font-mono text-sm text-blue-400 ml-4">return amount * Math.pow(1 + rate/12, years * 12);</p>
          <p className="font-mono text-sm text-green-400">&#125;;</p>
        </div>
        <div className="mt-4 space-y-1">
          <p className="font-mono text-sm text-gray-600 dark:text-gray-400">Numbers: 1234567890</p>
          <p className="font-mono text-base text-gray-700 dark:text-gray-300">API Key: sk-1234567890abcdef</p>
          <p className="font-mono text-lg text-gray-800 dark:text-gray-200">₹ 1,50,000.00</p>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">
          How to Use These Fonts
        </h2>
        <div className="space-y-4 font-sans text-gray-700 dark:text-gray-300">
          <div>
            <h3 className="font-semibold text-lg mb-2">CSS Classes:</h3>
            <ul className="space-y-1 font-mono text-sm bg-gray-100 dark:bg-gray-800 p-3 rounded">
              <li>font-sans - Inter (default body text)</li>
              <li>font-display - Poppins (buttons, UI elements)</li>
              <li>font-heading - Playfair Display (elegant headings)</li>
              <li>font-mono - JetBrains Mono (code, numbers)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Font Weights:</h3>
            <ul className="space-y-1 font-mono text-sm bg-gray-100 dark:bg-gray-800 p-3 rounded">
              <li>font-light (300) | font-normal (400) | font-medium (500)</li>
              <li>font-semibold (600) | font-bold (700) | font-extrabold (800)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FontDemo;