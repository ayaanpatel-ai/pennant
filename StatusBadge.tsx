import React, { useState, useRef, useEffect } from 'react';
import { SectionStatus } from '../types';
import { STATUS_CONFIG } from '../services/storageService';
import { Circle, Clock, CheckCircle2, Send, ChevronDown } from 'lucide-react';

interface StatusBadgeProps {
  status: SectionStatus;
  onChange?: (newStatus: SectionStatus) => void;
  size?: 'sm' | 'md' | 'lg';
  isInteractive?: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  onChange,
  size = 'md',
  isInteractive = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.not_started;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const renderIcon = (st: SectionStatus, iconClass: string) => {
    switch (st) {
      case 'not_started':
        return <Circle className={iconClass} />;
      case 'in_progress':
        return <Clock className={`${iconClass} animate-spin-slow`} />;
      case 'finished':
        return <CheckCircle2 className={iconClass} />;
      case 'submitted':
        return <Send className={iconClass} />;
    }
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1.5',
    md: 'text-xs font-medium px-2.5 py-1 gap-1.5',
    lg: 'text-sm font-medium px-3 py-1.5 gap-2'
  }[size];

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-3.5 h-3.5',
    lg: 'w-4 h-4'
  }[size];

  if (!isInteractive || !onChange) {
    return (
      <span
        className={`inline-flex items-center rounded-full border transition-colors shadow-2xs ${sizeClasses} ${config.badgeClass}`}
      >
        <span className={`rounded-full shrink-0 ${config.dotClass} ${size === 'sm' ? 'w-1.5 h-1.5' : 'w-2 h-2'}`} />
        <span>{config.label}</span>
      </span>
    );
  }

  const allStatuses: SectionStatus[] = ['not_started', 'in_progress', 'finished', 'submitted'];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center justify-between rounded-full border transition-all shadow-2xs cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-navy-500 ${sizeClasses} ${config.badgeClass}`}
        title="Click to change section status"
      >
        <span className="flex items-center gap-1.5">
          {renderIcon(status, iconSizes)}
          <span>{config.label}</span>
        </span>
        <ChevronDown className="w-3 h-3 opacity-60 ml-0.5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-44 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl z-50 py-1.5 animate-in fade-in zoom-in-95 duration-100">
          <div className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Set Status
          </div>
          {allStatuses.map((st) => {
            const itemConf = STATUS_CONFIG[st];
            const isSelected = st === status;
            return (
              <button
                key={st}
                type="button"
                onClick={() => {
                  onChange(st);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors cursor-pointer text-left hover:bg-slate-50 dark:hover:bg-slate-800/80 ${
                  isSelected ? 'font-semibold text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${itemConf.dotClass}`} />
                  <span className="flex items-center gap-1.5">
                    {renderIcon(st, 'w-3.5 h-3.5')}
                    {itemConf.label}
                  </span>
                </div>
                {isSelected && (
                  <span className="text-xs text-navy-600 dark:text-navy-400 font-bold">✓</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
