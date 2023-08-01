document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Here you can add code to send the form data to your backend server (e.g., using AJAX or Fetch API)
  
    // For this example, we'll just show a success message
    const responseElement = document.getElementById('response');
    responseElement.textContent = `Thank you, ${name}! Your message has been sent.`;
  
    // Clear the form after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  });
function showTab(tabId) {
    const tabs = document.getElementsByClassName('tab-content');
    for (const tab of tabs) {
      tab.style.display = 'none';
    }
  
    const buttons = document.getElementsByClassName('tab-btn');
    for (const button of buttons) {
      button.classList.remove('active');
    }
  
    document.getElementById(tabId).style.display = 'block';
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
  }
  function openTab(tabName) {
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
  
    const tablinks = document.getElementsByClassName('tablink');
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('active');
    }
  
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
  }
  function openTab(tabName) {
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
  
    const tablinks = document.getElementsByClassName('tablink');
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('active');
    }
  
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
  }
  