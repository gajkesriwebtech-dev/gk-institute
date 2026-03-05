
import React from 'react';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

const Icons: Record<string, React.FC<IconProps>> = {
  Microsoft: ({ className }) => (
    <svg viewBox="0 0 23 23" className={className} xmlns="http://www.w3.org/2000/svg">
      <path fill="#f35325" d="M1 1h10v10H1z" />
      <path fill="#81bc06" d="M12 1h10v10H12z" />
      <path fill="#05a6f0" d="M1 12h10v10H1z" />
      <path fill="#ffba08" d="M12 12h10v10H12z" />
    </svg>
  ),
  Google: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  ),
  HubSpot: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="#FF7A59" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.5 7.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM7.5 19.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM19.5 21a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM19.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path d="M18.75 12h-6.75V9.75a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0V13.5h6.75a.75.75 0 0 0 0-1.5Z" />
    </svg>
  ),
  Figma: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 18C6 19.6569 7.34315 21 9 21C10.6569 21 12 19.6569 12 18V15H9C7.34315 15 6 16.3431 6 18Z" fill="#0ACF83" />
      <path d="M6 12C6 10.3431 7.34315 9 9 9H12V15H9C7.34315 15 6 13.6569 6 12Z" fill="#A259FF" />
      <path d="M6 6C6 4.34315 7.34315 3 9 3H12V9H9C7.34315 9 6 7.65685 6 6Z" fill="#F24E1E" />
      <path d="M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9H12V3Z" fill="#FF7262" />
      <path d="M18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9C16.6569 9 18 10.3431 18 12Z" fill="#1ABCFE" />
    </svg>
  ),
  Vercel: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1.5L22.5 19.5H1.5L12 1.5Z" fill="currentColor" />
    </svg>
  ),
  GoogleCloud: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#4285F4" d="M16.12 9.53C16.12 8.23 15.69 7.02 14.97 6.04C14.83 5.86 14.68 5.68 14.53 5.51C12.98 3.73 10.68 2.76 8.32 2.97C5.07 3.26 2.37 5.72 1.77 8.94C1.51 10.33 1.63 11.69 2.05 12.94L2.05 12.94L5.59 19.08L5.73 19.32C6.39 20.31 7.42 20.97 8.6 21.03L19.48 21.03C21.43 21.03 23.01 19.45 23.01 17.5C23.01 15.55 21.43 13.97 19.48 13.97L16.12 13.97L16.12 9.53Z" fillOpacity="0" />
      <path fill="#EA4335" d="M12.06 9.53a4.01 4.01 0 0 0-1.25.19l-3.23-5.6A8 8 0 0 1 20 12h-3.9a4 4 0 0 0-4.04-2.47z" />
      <path fill="#4285F4" d="M7.58 19.75 4.35 14.16a8.03 8.03 0 0 1 .43-8.8l3.22 5.59a4.03 4.03 0 0 0 2.81 6.32H4.4c-1.12 0-2.18-.3-3.1-.82A7.97 7.97 0 0 1 12 4V.5a11.5 11.5 0 0 0-7.6 20.9l3.18-1.65z" />
      <path fill="#34A853" d="M10.81 17.27a4.01 4.01 0 0 0 3.25-1.92l3.23 5.6c-2.3 3.99-7.3 5.37-11.29 3.07a8 8 0 0 1-2.92-2.92l3.23-5.58c.8 1.13 2.1 1.83 3.5 1.75z" />
      <path fill="#FBBC05" d="M23.5 12a11.5 11.5 0 0 1-4.7 9.17l-3.23-5.6a4.03 4.03 0 0 0 1.53-3.57h6.4z" />
    </svg>
  ),
  Adobe: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="#FF0000" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.1 2H22v20h-6.9zM2 2h6.9v20H2zM9.8 2h4.4L18 11.3v3.3L12 6.6 6 14.6v-3.3z" />
    </svg>
  ),
  Shopify: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.037 6.559c-.832-.416-2.91-1.247-4.99-.831-1.248.25-2.08.832-2.911.416-.832-.416-2.495-1.247-4.574-.416-2.08.832-2.495 2.496-1.663 4.159l1.663 7.485c.416 1.663 2.08 2.08 3.327 2.08s2.08-.416 2.495-1.248c.416-.832.832-1.248 1.664-.831.83.416 1.247.416 2.078.416 1.248 0 2.911-1.248 3.327-1.248.832-.416 2.91-2.08 1.663-7.485.831-1.663.416-2.08-2.08-2.497z" fill="#95BF47" />
      <path d="M16.46 9.47c-.832.416-1.663 1.248-2.079 2.08-.416.832-.832 2.079-.416 2.91.416.832 1.247 1.248 2.079.832.831-.416 1.663-1.247 2.079-2.08.416-.831.831-2.078.416-2.91-.416-.832-1.247-1.248-2.08-.832z" fill="#5E8E3E" />
      <path d="M8.5 7.5C8.5 7.5 7.5 5 9.5 4S13.5 5.5 13.5 7.5" stroke="#95BF47" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Meta: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="#0668E1" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6.16c-2.42 0-3.9 1.35-4.63 2.92-.32.68-.61 1.51-.9 2.44-.7 2.27-1.42 4.55-3.23 4.55-1.12 0-1.88-.7-1.88-2.61 0-3.3 2.2-7.3 5.3-7.3 1.3 0 2.28.69 2.82 1.25.1.1.25.1.34 0 .54-.56 1.52-1.25 2.82-1.25 3.1 0 5.3 4 5.3 7.3 0 1.91-.76 2.61-1.88 2.61-1.81 0-2.53-2.28-3.23-4.55-.29-.93-.58-1.76-.9-2.44-.73-1.57-2.21-2.92-4.63-2.92H12z" />
    </svg>
  ),
  IBM: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="#052FAD" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4h20v2H2V4zm0 4h20v2H2V8zm0 4h4v2H2v-2zm6 0h8v2H8v-2zm10 0h4v2h-4v-2zm-10 4h8v2H8v-2zm10 0h4v2h-4v-2zM2 12h4v2H2v-2zm0 8h20v2H2v-2z" />
    </svg>
  ),
  Amazon: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 15.5c-2.5 1.5-5.5 1.5-8 0-.5-.3-1 .2-.5.5 3 2 7 2 9.5 0 .5-.3 0-.8-.5-.5z" fill="#FF9900" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 14c-2.6 0-4.8-1.3-6-3.3.8 0 1.5.1 2.2.3.8 1.4 2.3 2.3 3.8 2.3s3-1 3.8-2.3c.7-.2 1.4-.3 2.2-.3-1.2 2-3.4 3.3-6 3.3zm2.5-6c-.8 0-1.5-.7-1.5-1.5S12.2 7 13 7s1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm-5 0c-.8 0-1.5-.7-1.5-1.5S8.2 7 9 7s1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" fill="currentColor" />
    </svg>
  ),
  Netflix: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="#E50914" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3h-2v18h2V3zM8 3H6v18h2V3z" />
      <path d="M16 19.5 8 4.5V3h-.5v18H8l8-15v15h.5V3H16v16.5z" />
    </svg>
  ),
  Airbnb: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="#FF5A5F" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8 2 3 6 3 11c0 3 2.5 6 5.5 6C10 17 11 16 12 15c1 1 2 2 3.5 2 3 0 5.5-3 5.5-6C21 6 16 2 12 2zm0 13c-2 0-3-2-3-4s1-4 3-4 3 2 3 4-1 4-3 4z" />
    </svg>
  ),
  Spotify: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="#1DB954" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.59 14.42c-.18.3-.56.39-.86.21-2.35-1.44-5.31-1.76-8.8-1.01-.33.07-.66-.14-.73-.47-.07-.33.14-.66.47-.73 3.86-.88 7.18-.5 9.87 1.14.3.18.39.56.21.86zm1.23-3.23c-.23.37-.71.49-1.08.26-2.69-1.66-6.8-2.14-9.98-1.17-.41.13-.85-.1-1.02-.51-.13-.41.1-.85.51-1.02 3.65-1.11 8.24-.57 11.31 1.32.37.23.49.71.26 1.08zm.1-3.35c-3.22-1.91-8.53-2.09-11.61-1.15-.49.15-1.01-.13-1.16-.62-.15-.49.13-1.01.62-1.16 3.55-1.08 9.42-.87 13.12 1.33.44.26.59.83.33 1.27-.26.44-.83.59-1.27.33z" />
    </svg>
  ),
  Salesforce: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="#00A1E0" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 6c-2.5 0-4.5 1.5-5.5 3.5C9.5 9 8.5 8.5 7.5 8.5 5 8.5 3 10.5 3 13c0 2.5 2 4.5 4.5 4.5h9c3 0 5.5-2.5 5.5-5.5 0-2.5-2-4.5-4.5-4.5-.5 0-1 .1-1.5.2C16.5 6.5 16.5 6 16 6z" />
    </svg>
  ),
  Slack: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M6 15a2 2 0 1 1-2-2h2v2zm1-2a2 2 0 1 1 2-2v2H7zm8-6a2 2 0 1 1 2 2h-2V7zm-1 2a2 2 0 1 1-2 2V7h2zm-2 8a2 2 0 1 1 2 2v-2h-2zm-1-2a2 2 0 1 1-2-2h2v2zm6 1a2 2 0 1 1-2 2v-2h2zm-2-1a2 2 0 1 1 2-2h-2v2z" fill="currentColor" />
      <path d="M6 15a2 2 0 0 1 2 2v-2H6z" fill="#E01E5A" />
      <path d="M7 11a2 2 0 0 1 2 2V11H7z" fill="#36C5F0" />
      <path d="M15 7a2 2 0 0 1 2-2v2h-2z" fill="#2EB67D" />
      <path d="M14 9a2 2 0 0 1-2 2V9h2z" fill="#ECB22E" />
    </svg>
  ),
  Asana: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="7" r="2" fill="#F06A6A" />
      <circle cx="17" cy="12" r="2" fill="#FCBD01" />
      <circle cx="7" cy="12" r="2" fill="#FCBD01" />
    </svg>
  ),
  Notion: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 5v14h16V5H4zm2 2h2.5l5 7.5V7H16v10h-2.5L8.5 9.5V17H6V7z" />
    </svg>
  ),
  Intercom: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="#1F8CEB" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 20h16v-2H4v2zm2-4h12v-2H6v2zm3-4h6V4h-6v8z" />
    </svg>
  ),
  Zoho: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="9" height="9" fill="#F44336" />
      <rect x="13" y="2" width="9" height="9" fill="#4CAF50" />
      <rect x="2" y="13" width="9" height="9" fill="#2196F3" />
      <rect x="13" y="13" width="9" height="9" fill="#FFC107" />
    </svg>
  ),
  Uber: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-9h2v6h-2V9z" />
    </svg>
  ),
  React: ({ className }) => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  Nextjs: ({ className }) => (
    <svg viewBox="0 0 180 180" className={className} xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#mask0)">
        <circle cx="90" cy="90" r="90" fill="black" />
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.1836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
        <path d="M115.223 54H102V125.97H115.223V54Z" fill="white" />
      </g>
    </svg>
  ),
  Nodejs: ({ className }) => (
    <svg viewBox="0 0 256 256" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M128 0L24 60v120l104 60 104-60V60L128 0zm-14.8 178.5c-4 1.8-8.1 2.7-12.4 2.7-14.5 0-26.3-10.4-26.3-23.2v-1.5h10.3v1.5c0 7.3 6.9 13.2 15.6 13.2 4.1 0 7.8-1.3 10.3-3.6 2.2-2 3.4-5 3.4-8.1 0-5.4-3.5-9.3-11.4-12.8L100 145c-11.9-5.1-18.1-13.6-18.1-24.6 0-11.6 9-21.7 22.3-21.7 5.2 0 10 1.5 13.7 4.2l-3.9 8.1c-2.9-1.8-6.1-2.6-9.5-2.6-7.3 0-12.5 5.1-12.5 11.9 0 5.4 3.2 9.1 10.5 12.3l2.8 1.2c12.5 5.5 19.4 13.4 19.4 24.9 0 12-9 22.1-22.8 22.1v2.8zm63.4 0c-15.2 0-27.5-12.2-27.5-27.2s12.3-27.2 27.5-27.2c7.8 0 15 3.1 20.3 8.3l-7.1 7.2c-3.5-3.4-8.4-5.5-13.2-5.5-9.5 0-17.1 7.7-17.1 17.2s7.6 17.2 17.1 17.2c5 0 9.8-2 13.3-5.5l7.1 7.2c-5.3 5.3-12.5 8.3-20.3 8.3z" fill="#339933" />
    </svg>
  ),
  MongoDB: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2c-.52 0-1.03.04-1.54.12C8.61 2.5 7.14 3.5 6.12 4.96c-.46.66-.81 1.4-1.04 2.19-.6 2.12-.55 4.3.15 6.37.7 2.07 2.03 3.84 3.82 5.08 1.79 1.24 3.93 1.9 6.09 1.9 2.16 0 4.3-.66 6.09-1.9 1.79-1.24 3.12-3.01 3.82-5.08.7-2.07.75-4.25.15-6.37-.23-.79-.58-1.53-1.04-2.19-1.02-1.46-2.49-2.46-4.34-2.84-.51-.08-1.02-.12-1.54-.12h-2.12zm0 2h.12c2.8 0 5.07 2.27 5.07 5.07v6.86c0 2.8-2.27 5.07-5.07 5.07h-.12c-2.8 0-5.07-2.27-5.07-5.07V9.07c0-2.8 2.27-5.07 5.07-5.07z" fill="#47A248" />
    </svg>
  ),
  Java: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5 2c-.11 0-.22.01-.33.02.43.2 1.05.61 1.47 1.25.68 1.05.68 2.21.36 3.12-.22.61-.63 1.15-1.14 1.62-.21.2-.43.39-.67.57-.47.36-1.02.66-1.56.97-.54.3-1.05.64-1.49 1.05-.44.41-.78.89-1.02 1.42-.24.53-.36 1.13-.36 1.78s.11 1.2.33 1.72c.22.52.53.98.92 1.36.39.38.85.69 1.38.92.53.23 1.1.34 1.72.34s1.2-.11 1.73-.34c.53-.23 1-.54 1.39-.92.39-.38.7-.84.92-1.36.22-.52.33-1.08.33-1.72s-.11-1.25-.33-1.78c-.22-.53-.53-1.01-1-1.42-.47-.41-.98-.75-1.52-1.05-.54-.31-1.09-.61-1.56-.97-.24-.18-.46-.37-.67-.57-.51-.47-.92-1.01-1.14-1.62-.32-.91-.32-2.07.36-3.12.42-.64 1.04-1.05 1.47-1.25-.11-.01-.22-.02-.33-.02zm.5 16.5c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5 4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z" fill="#007396" />
    </svg>
  ),
  Python: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M11.97 2c-3.14 0-2.94 1.36-2.94 1.36l.01 1.4h3.01v.42H7.94S5.1 4.96 5.1 8.16c0 3.2 2.47 3.08 2.47 3.08h1.47v-2.07c0-1.55 1.25-2.8 2.8-2.8h3.33s2.8.08 2.8-2.84C18 3.51 15.11 2 11.97 2zm-2.44 1.14c.42 0 .76.34.76.76 0 .42-.34.76-.76.76s-.76-.34-.76-.76c0-.42.34-.76.76-.76zM12.03 22c3.14 0 2.94-1.36 2.94-1.36l-.01-1.4h-3.01v-.42h4.11S18.9 19.04 18.9 15.842c0-3.2-2.47-3.08-2.47-3.08h-1.47v2.072c0 1.55-1.25 2.8-2.8 2.8h-3.33s-2.8-.08-2.8 2.84C6 20.49 8.89 22 12.03 22zm2.44-1.14c-.42 0-.76-.34-.76-.76 0-.42.34-.76.76-.76s.76.34.76.76c0 .42-.34.76-.76.76z" fill="#3776AB" />
    </svg>
  ),
  WordPress: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 1.5c-4.7 0-8.5 3.8-8.5 8.5 0 1.04.19 2.03.52 2.95l3.22-8.82c.11-.29.27-.51.48-.65.21-.14.47-.21.78-.21.28 0 .52.06.71.18.19.12.33.29.41.52l2.38 6.55 1.34-3.69c.11-.29.27-.51.48-.65.21-.14.47-.21.78-.21.28 0 .52.06.71.18.19.12.33.29.41.52l3.22 8.82c.33-.92.52-1.91.52-2.95 0-4.7-3.8-8.5-8.5-8.5zm0 17c2.3 0 4.38-.91 5.91-2.41l-4.14-11.36-4.14 11.36C7.62 19.59 9.7 20.5 12 20.5z" fill="#21759B" />
    </svg>
  ),
  GoogleAds: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 2h-7L2 8.5l6.5 6.5 7-7L22 15l-6.5-6.5L15.5 2z" fill="#4285F4" />
      <path d="M8.5 2h7L22 8.5l-6.5 6.5-7-7L2 15l6.5-6.5L8.5 2z" fill="#FBBC05" />
    </svg>
  ),
  Instagram: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="25%" stopColor="#e6683c" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="75%" stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.247 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.247-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.247-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.247 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="url(#ig-grad)" />
    </svg>
  ),
  LinkedIn: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="#0077B5" />
    </svg>
  ),
  OpenAI: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5153-4.9108 6.0462 6.0462 0 0 0-4.7471-3.124A6.0868 6.0868 0 0 0 10.6533 2.5326 6.0914 6.0914 0 0 0 5.2323 1.058a6.056 6.056 0 0 0-4.3914 3.6323 5.9863 5.9863 0 0 0 .5154 4.9108 6.0462 6.0462 0 0 0 4.7471 3.124 6.0868 6.0868 0 0 0 6.3661-1.7144 6.0914 6.0914 0 0 0 5.4209 1.4746 6.056 6.056 0 0 0 4.3915-3.6322V9.8212z" fill="#10a37f" />
    </svg>
  ),
  n8n: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L19.5 8 12 11.5 4.5 8 12 4.5zM4 9.5l7 3.5V20l-7-3.5V9.5zm9 10.5v-7l7-3.5v7l-7 3.5z" fill="#FF6D5A" />
    </svg>
  ),
  Zapier: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M21.2 12.8l-1.6-1.6-1.6 1.6-1.6-1.6-1.6 1.6-1.6-1.6-1.6 1.6-1.6-1.6L6.8 12.8 5.2 11.2l-1.6 1.6L2 11.2l1.6-1.6L2 8l1.6-1.6L2 4.8l1.6-1.6L5.2 4.8 6.8 3.2 8.4 4.8l1.6-1.6 1.6 1.6 1.6-1.6 1.6 1.6 1.6-1.6 1.6 1.6 1.6-1.6 1.6 1.6-1.6 1.6 1.6 1.6-1.6 1.6 1.6 1.6-1.6 1.6 1.6 1.6-1.6 1.6z" fill="#FF4F00" />
    </svg>
  ),
  Photoshop: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#001E36" />
      <path d="M7 17V7h4.5c2.5 0 3.5 1.5 3.5 2.5s-1 2.5-3.5 2.5H8.5v4.5H7zm1.5-6h2.5c1.5 0 2-.5 2-1.25S12.5 8.5 11 8.5H8.5V11zm6.5 6a2 2 0 0 1 0-4 2 2 0 0 1 0 4z" fill="#31A8FF" />
    </svg>
  ),
  Premiere: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#2A0634" />
      <path d="M7 17V7h4c2 0 3 1 3 2.5S13 12 11 12H8.5v5H7zm1.5-6.5h2c1.5 0 1.5-1 1.5-1.25S11.5 8.5 10.5 8.5H8.5V10.5zm6.5 6.5a2 2 0 0 1 0-4 2 2 0 0 1 0 4z" fill="#EA77FF" />
    </svg>
  ),
  TCS: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 18l-8-4V8l8 4v8zm8-4l-8 4v-8l8-4v8z" fill="#1B365D" />
    </svg>
  ),
  Infosys: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 4h19v16h-19V4zm2 2v12h15V6h-15z" fill="#007CC3" />
    </svg>
  ),
  Coursera: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="#0056D2" />
    </svg>
  ),
  Udemy: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="#A435F0" />
    </svg>
  ),
  AWS: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="#232F3E" />
    </svg>
  ),
  Oracle: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="#F80000" />
    </svg>
  ),
  Express: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="#000000" />
      <text x="12" y="15" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="Arial">EX</text>
    </svg>
  ),
  GoogleAnalytics: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M11 20H7V10H11V20ZM17 20H13V4H17V20ZM23 20H19V14H23V20ZM5 20H1V16H5V20Z" fill="#F9AB00" />
    </svg>
  ),
  CS50: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#A51C30" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial">C50</text>
    </svg>
  ),
};

export const BrandIcon = ({ name, className, showLabel = false }: { name: string, className?: string, showLabel?: boolean }) => {
  const Icon = Icons[name];
  const iconElement = Icon ? (
    <Icon className={`${className} transition-all duration-300 hover:scale-110 hover:drop-shadow-lg`} />
  ) : (
    <span className={`inline-block bg-slate-200 rounded ${className}`} title={name}></span>
  );

  if (showLabel) {
    return (
      <div className="flex flex-col items-center gap-2 group">
        {iconElement}
        <span className="text-[10px] md:text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors whitespace-nowrap">
          {name}
        </span>
      </div>
    );
  }

  return iconElement;
};
