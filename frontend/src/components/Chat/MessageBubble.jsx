import { useState, useRef, useEffect } from 'react';
import { 
  ClipboardDocumentIcon, 
  HandThumbUpIcon, 
  HandThumbDownIcon,
  ArrowTopRightOnSquareIcon,
  SpeakerWaveIcon,
  StopIcon,
  TrashIcon,
  PencilIcon
} from '@heroicons/react/24/outline';
import { 
  HandThumbUpIcon as HandThumbUpSolid, 
  HandThumbDownIcon as HandThumbDownSolid 
} from '@heroicons/react/24/solid';

export default function MessageBubble({ 
  message, 
  darkMode, 
  onCopy, 
  onReact, 
  onSpeak, 
  onDelete, 
  onEdit,
  onNavigateToTool,
  onSendMessage,
  isSpeaking 
}) {
  const [showActions, setShowActions] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(message.text);
  const [copyFeedback, setCopyFeedback] = useState(false);
  const hoverTimeoutRef = useRef(null);
  const copyTimeoutRef = useRef(null);

  // Sync edit text when message changes
  useEffect(() => {
    setEditText(message.text);
  }, [message.text]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(message.id, editText);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleCopy = async () => {
    try {
      await onCopy(message.text);
      setCopyFeedback(true);
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
      copyTimeoutRef.current = setTimeout(() => setCopyFeedback(false), 2000);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setShowActions(true);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setShowActions(false);
    }, 150);
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div 
      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} group relative`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative w-full ${message.sender === 'user' ? 'pr-20' : 'pl-20'}`}>
        {/* Avatar for bot messages */}
        {message.sender === 'bot' && (
          <div className="absolute -left-10 top-0">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">🤖</span>
            </div>
          </div>
        )}

        <div
          className={`px-4 py-3 rounded-lg shadow-sm relative ${
            message.sender === 'user'
              ? `bg-blue-600 text-white ml-auto max-w-xs sm:max-w-md ${message.isError ? 'bg-red-600' : ''}`
              : `${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800 border border-gray-200'} max-w-full`
          }`}
        >
          {/* Message content */}
          {isEditing && message.sender === 'user' ? (
            <div className="space-y-2">
              <textarea
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="w-full p-2 text-sm bg-white/10 border border-white/20 rounded text-white placeholder-white/60 resize-none"
                rows={3}
              />
              <div className="flex space-x-2">
                <button
                  onClick={handleEdit}
                  className="px-2 py-1 bg-white/20 hover:bg-white/30 rounded text-xs"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-2 py-1 bg-white/10 hover:bg-white/20 rounded text-xs"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div 
              className="text-sm sm:text-base whitespace-pre-wrap leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: message.text
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  .replace(/\n/g, '<br>')
              }}
            />
          )}

          {/* Multiple Tool Links for VS comparisons */}
          {message.toolLinks && message.toolLinks.length > 0 && !isEditing && (
            <div className="mt-4 flex flex-wrap gap-2">
              {console.log('Rendering toolLinks:', message.toolLinks)}
              {message.toolLinks.map((tool, idx) => (
                <button
                  key={idx}
                  onClick={() => onNavigateToTool(tool.url)}
                  className={`inline-flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    darkMode 
                      ? 'bg-blue-900/50 hover:bg-blue-900/70 text-blue-300' 
                      : 'bg-blue-50 hover:bg-blue-100 text-blue-700'
                  }`}
                >
                  <span>{tool.icon}</span>
                  <ArrowTopRightOnSquareIcon className="h-3 w-3" />
                  {tool.name}
                </button>
              ))}
            </div>
          )}

          {/* Single Tool Link Button */}
          {message.toolLink && !message.toolLinks?.length && !isEditing && (
            <button
              onClick={() => onNavigateToTool(message.toolLink)}
              className={`mt-4 inline-flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                darkMode 
                  ? 'bg-blue-900/50 hover:bg-blue-900/70 text-blue-300' 
                  : 'bg-blue-50 hover:bg-blue-100 text-blue-700'
              }`}
            >
              <ArrowTopRightOnSquareIcon className="h-3 w-3" />
              {message.toolName || 'Open Tool'}
            </button>
          )}

          {/* Smart Suggestions */}
          {message.suggestions && message.suggestions.length > 0 && !isEditing && (
            <div className="mt-4 flex flex-wrap gap-2">
              {message.suggestions.slice(0, 3).map((suggestion, idx) => (
                <button
                  key={idx}
                  onClick={() => onSendMessage && onSendMessage(suggestion)}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    darkMode
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Message footer */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs opacity-70">
                {formatTime(message.timestamp)}
              </span>
              {message.responseTime && (
                <span className="text-xs opacity-50">
                  ({message.responseTime}s)
                </span>
              )}
              {message.sender === 'bot' && (
                <span className={`text-xs px-1 py-0.5 rounded text-white ${
                  message.isApiResponse ? 'bg-green-500' : 'bg-orange-500'
                }`}>
                  {message.isApiResponse ? 'API' : 'Mock'}
                </span>
              )}
            </div>

            {/* Reaction buttons */}
            {message.sender === 'bot' && (
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => onReact(message.id, 'like')}
                  className={`p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    message.reaction === 'like' ? 'text-green-500' : 'text-gray-400'
                  }`}
                >
                  {message.reaction === 'like' ? 
                    <HandThumbUpSolid className="h-3 w-3" /> : 
                    <HandThumbUpIcon className="h-3 w-3" />
                  }
                </button>
                <button
                  onClick={() => onReact(message.id, 'dislike')}
                  className={`p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    message.reaction === 'dislike' ? 'text-red-500' : 'text-gray-400'
                  }`}
                >
                  {message.reaction === 'dislike' ? 
                    <HandThumbDownSolid className="h-3 w-3" /> : 
                    <HandThumbDownIcon className="h-3 w-3" />
                  }
                </button>
              </div>
            )}
          </div>

          {/* Invisible hover bridge for AI responses */}
          {message.sender === 'bot' && (
            <div 
              className="absolute -right-20 top-0 w-20 h-full z-10"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          )}
          
          {/* Invisible hover bridge for user messages */}
          {message.sender === 'user' && (
            <div 
              className="absolute -left-20 top-0 w-20 h-full z-10"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          )}

          {/* Action buttons (show on hover) */}
          {(showActions || (typeof window !== 'undefined' && window.innerWidth < 768)) && !isEditing && (
            <div 
              className={`absolute ${message.sender === 'user' ? '-left-12' : '-right-12'} top-0 flex flex-col space-y-1 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } rounded-lg shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-1 z-20`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={handleCopy}
                className={`p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${darkMode ? 'text-gray-400' : 'text-gray-600'} relative transition-colors`}
                title={copyFeedback ? "Copied!" : "Copy"}
                aria-label={copyFeedback ? "Text copied to clipboard" : "Copy message text"}
              >
                <ClipboardDocumentIcon className="h-4 w-4" />
                {copyFeedback && (
                  <span className={`absolute ${message.sender === 'user' ? '-right-16' : '-left-16'} top-1/2 transform -translate-y-1/2 px-2 py-1 text-xs rounded shadow-lg z-30 ${
                    darkMode ? 'bg-green-800 text-green-200' : 'bg-green-600 text-white'
                  } whitespace-nowrap`}>
                    Copied!
                  </span>
                )}
              </button>
              
              {message.sender === 'bot' && (
                <button
                  onClick={() => onSpeak(message.text)}
                  className={`p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                    isSpeaking 
                      ? 'text-red-500 bg-red-50 dark:bg-red-900/20' 
                      : darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                  title={isSpeaking ? 'Stop speaking' : 'Speak message'}
                  aria-label={isSpeaking ? 'Stop text-to-speech' : 'Read message aloud'}
                >
                  {isSpeaking ? <StopIcon className="h-4 w-4" /> : <SpeakerWaveIcon className="h-4 w-4" />}
                </button>
              )}

              {message.sender === 'user' && (
                <>
                  <button
                    onClick={handleEdit}
                    className={`p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                      isEditing 
                        ? 'text-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                        : darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                    title={isEditing ? 'Save changes' : 'Edit message'}
                    aria-label={isEditing ? 'Save message changes' : 'Edit this message'}
                  >
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => onDelete(message.id)}
                    className="p-1.5 rounded hover:bg-red-100 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 transition-colors"
                    title="Delete message"
                    aria-label="Delete this message"
                  >
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}