import { useState } from 'react';
import { 
  DocumentArrowDownIcon, 
  ShareIcon, 
  ClipboardDocumentIcon,
  XMarkIcon 
} from '@heroicons/react/24/outline';

export default function ChatExport({ messages, darkMode, isOpen, onClose }) {
  const [exportFormat, setExportFormat] = useState('text');
  const [includeTimestamps, setIncludeTimestamps] = useState(true);
  const [includeMetadata, setIncludeMetadata] = useState(false);

  const formatMessages = (format) => {
    const filteredMessages = messages.filter(m => m.text && m.text.trim());
    
    if (format === 'text') {
      return filteredMessages.map(message => {
        let line = '';
        if (includeTimestamps) {
          line += `[${new Date(message.timestamp).toLocaleString()}] `;
        }
        line += `${message.sender === 'user' ? 'You' : 'FinBot'}: ${message.text}`;
        if (includeMetadata && message.responseTime) {
          line += ` (${message.responseTime}s)`;
        }
        return line;
      }).join('\n\n');
    }
    
    if (format === 'json') {
      return JSON.stringify(filteredMessages.map(message => ({
        sender: message.sender,
        text: message.text,
        timestamp: message.timestamp,
        ...(includeMetadata && {
          responseTime: message.responseTime,
          isApiResponse: message.isApiResponse,
          suggestions: message.suggestions,
          toolLink: message.toolLink
        })
      })), null, 2);
    }
    
    if (format === 'csv') {
      const headers = ['Timestamp', 'Sender', 'Message'];
      if (includeMetadata) {
        headers.push('Response Time', 'API Response', 'Tool Link');
      }
      
      const rows = filteredMessages.map(message => {
        const row = [
          new Date(message.timestamp).toLocaleString(),
          message.sender === 'user' ? 'You' : 'FinBot',
          `"${message.text.replace(/"/g, '""')}"`
        ];
        if (includeMetadata) {
          row.push(
            message.responseTime || '',
            message.isApiResponse ? 'Yes' : 'No',
            message.toolLink || ''
          );
        }
        return row.join(',');
      });
      
      return [headers.join(','), ...rows].join('\n');
    }
  };

  const downloadFile = (content, filename, mimeType) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleExport = () => {
    const content = formatMessages(exportFormat);
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `finbot-conversation-${timestamp}.${exportFormat === 'text' ? 'txt' : exportFormat}`;
    const mimeType = {
      text: 'text/plain',
      json: 'application/json',
      csv: 'text/csv'
    }[exportFormat];
    
    downloadFile(content, filename, mimeType);
  };

  const copyToClipboard = async () => {
    const content = formatMessages(exportFormat);
    try {
      await navigator.clipboard.writeText(content);
      // Could show toast notification here
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  const shareConversation = async () => {
    const content = formatMessages('text');
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'FinBot Conversation',
          text: content
        });
      } catch (error) {
        console.error('Failed to share:', error);
      }
    } else {
      // Fallback to clipboard
      copyToClipboard();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`absolute top-0 left-0 right-0 bottom-0 ${darkMode ? 'bg-gray-900' : 'bg-white'} z-20 flex flex-col`}>
      {/* Header */}
      <div className={`p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <DocumentArrowDownIcon className={`h-6 w-6 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
            <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Export Conversation
            </h2>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800 text-gray-400' : 'text-gray-600'}`}
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-md mx-auto space-y-6">
          {/* Format Selection */}
          <div>
            <label className={`block text-sm font-medium mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Export Format
            </label>
            <div className="space-y-2">
              {[
                { value: 'text', label: 'Plain Text (.txt)', desc: 'Simple text format' },
                { value: 'json', label: 'JSON (.json)', desc: 'Structured data format' },
                { value: 'csv', label: 'CSV (.csv)', desc: 'Spreadsheet compatible' }
              ].map((format) => (
                <label key={format.value} className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="format"
                    value={format.value}
                    checked={exportFormat === format.value}
                    onChange={(e) => setExportFormat(e.target.value)}
                    className="mt-1 text-blue-500 focus:ring-blue-500"
                  />
                  <div>
                    <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {format.label}
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {format.desc}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Options */}
          <div>
            <label className={`block text-sm font-medium mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Include Options
            </label>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeTimestamps}
                  onChange={(e) => setIncludeTimestamps(e.target.checked)}
                  className="text-blue-500 focus:ring-blue-500"
                />
                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Include timestamps
                </span>
              </label>
              
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeMetadata}
                  onChange={(e) => setIncludeMetadata(e.target.checked)}
                  className="text-blue-500 focus:ring-blue-500"
                />
                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Include metadata (response times, tool links)
                </span>
              </label>
            </div>
          </div>

          {/* Preview */}
          <div>
            <label className={`block text-sm font-medium mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Preview
            </label>
            <div className={`p-3 rounded-lg border ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
            } max-h-32 overflow-y-auto`}>
              <pre className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-700'} whitespace-pre-wrap`}>
                {formatMessages(exportFormat).substring(0, 200)}
                {formatMessages(exportFormat).length > 200 && '...'}
              </pre>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={handleExport}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
            >
              <DocumentArrowDownIcon className="h-5 w-5" />
              <span>Download File</span>
            </button>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={copyToClipboard}
                className={`flex items-center justify-center space-x-2 px-4 py-2 border rounded-lg font-medium transition-colors ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <ClipboardDocumentIcon className="h-4 w-4" />
                <span>Copy</span>
              </button>

              <button
                onClick={shareConversation}
                className={`flex items-center justify-center space-x-2 px-4 py-2 border rounded-lg font-medium transition-colors ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <ShareIcon className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className={`p-3 rounded-lg border ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-blue-50 border-blue-200'
          }`}>
            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-blue-800'}`}>
              <div className="flex justify-between">
                <span>Total messages:</span>
                <span className="font-medium">{messages.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Your messages:</span>
                <span className="font-medium">{messages.filter(m => m.sender === 'user').length}</span>
              </div>
              <div className="flex justify-between">
                <span>FinBot messages:</span>
                <span className="font-medium">{messages.filter(m => m.sender === 'bot').length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}