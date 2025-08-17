// Additional JavaScript functionality for Elyx Health Dashboard
// This file can contain additional features and utilities

console.log('Elyx Health Dashboard - Additional JS loaded');

// Example utility function
function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
