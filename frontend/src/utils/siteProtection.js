/**
 * Site Protection Script
 * Gradually decreases site opacity if running on unauthorized domains
 */

const AUTHORIZED_DOMAINS = [
  'localhost',
  '127.0.0.1',
  'vizag-travels.windsurf.build',
  'vizag-travels.vercel.app',
  'vizag-travels.netlify.app',
  // Add your production domain here
];

// Maximum number of days before site fades completely
const MAX_DAYS = 2;

export function initializeSiteProtection() {
  // Don't run during development
  // Check if we're in development environment based on hostname
  const isDevelopment = window.location.hostname === 'localhost' || 
                         window.location.hostname === '127.0.0.1';
  
  if (isDevelopment) {
    return;
  }

  const currentDomain = window.location.hostname;
  
  // Check if current domain is authorized
  const isAuthorized = AUTHORIZED_DOMAINS.some(domain => 
    currentDomain === domain || currentDomain.endsWith('.' + domain)
  );
  
  if (isAuthorized) {
    return; // Site is on authorized domain, no action needed
  }

  console.log('Running on unauthorized domain. Protection activated.');
  
  // Get or set first visit date
  let firstVisitDate = localStorage.getItem('site_first_visit');
  if (!firstVisitDate) {
    firstVisitDate = new Date().toISOString();
    localStorage.setItem('site_first_visit', firstVisitDate);
  }
  
  // Calculate days since first visit
  const daysSinceFirstVisit = Math.floor(
    (new Date() - new Date(firstVisitDate)) / (1000 * 60 * 60 * 24)
  );
  
  // Calculate opacity based on days (1.0 to 0)
  let opacity = 1.0 - (daysSinceFirstVisit / MAX_DAYS * 1.0);
  
  // Ensure opacity doesn't go below 0
  opacity = Math.max(0, opacity);
  
  // Apply opacity to the entire document
  document.documentElement.style.opacity = opacity;
  
  // Add a warning message if opacity is decreasing
  if (opacity < 0.9) {
    const warningDiv = document.createElement('div');
    warningDiv.style.position = 'fixed';
    warningDiv.style.bottom = '10px';
    warningDiv.style.right = '10px';
    warningDiv.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
    warningDiv.style.color = 'white';
    warningDiv.style.padding = '10px';
    warningDiv.style.borderRadius = '5px';
    warningDiv.style.zIndex = '9999';
    warningDiv.style.fontSize = '12px';
    warningDiv.innerHTML = `This appears to be an unauthorized copy of Vizag Travels. Site functionality will continue to degrade.`;
    
    document.body.appendChild(warningDiv);
  }
}
