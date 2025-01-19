async function handleSubscribe() {
  const emailInput = document.getElementById('emailInput');
  const button = document.querySelector('.subscribe-btn');
  
  if (!emailInput.value) return;
  
  // Save original button text
  const originalText = button.textContent;
  
  // Update button state
  button.textContent = 'Please wait...';
  button.disabled = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success state
    button.textContent = 'Thanks for subscribing!';
    button.style.background = '#059669';
    emailInput.value = '';
    
    // Reset after 3 seconds
    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = '#2563eb';
      button.disabled = false;
    }, 3000);
    
  } catch (error) {
    button.textContent = 'Error, try again';
    button.style.background = '#dc2626';
    
    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = '#2563eb';
      button.disabled = false;
    }, 3000);
  }
} 