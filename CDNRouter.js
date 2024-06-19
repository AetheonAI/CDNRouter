(function() {
    // Authentication logic goes here
    // Example: Check the domain of the requesting website
    var allowedDomains = ['accomify.com', 'www.accomify.com'];
    var currentDomain = window.location.hostname;
    
    if (allowedDomains.includes(currentDomain)) {
      // Authentication successful, load the main chatbot script
      var script = document.createElement('script');
      script.src = 'https://d5umvjosg8xwo.cloudfront.net/AccomifyChatbot.js';
      document.head.appendChild(script);
    } else {
      console.error('Unauthorized domain. Chatbot script not loaded.');
    }
  })();
