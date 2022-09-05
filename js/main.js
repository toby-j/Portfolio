document.addEventListener('DOMContentLoaded', function() {
  //Desktop navigation tabs
  document.getElementById("experience-tab-desktop").addEventListener("click", () => { openTopic(event, 'Experience', 'portfolio') });
  document.getElementById("techstack-tab-desktop").addEventListener("click", () => { openTopic(event, 'TechStack', 'portfolio') });
  document.getElementById("projects-tab-desktop").addEventListener("click", () => { openTopic(event, 'Projects', 'portfolio') });
  document.getElementById("education-tab-desktop").addEventListener("click", () => { openTopic(event, 'Education', 'portfolio') });
  document.getElementById("info-navigation-text").addEventListener("click", () => { openTopic(event, 'Info', 'aboutme') });
  document.getElementById("contact-navigation-text").addEventListener("click", () => { openTopic(event, 'Contact', 'aboutme') });
  //Mobile navigation tabs
  document.getElementById("experience-tab-mobile").addEventListener("click", () => { openTopic(event, 'Experience', 'portfolio') });
  document.getElementById("techstack-tab-mobile").addEventListener("click", () => { openTopic(event, 'TechStack', 'portfolio') });
  document.getElementById("projects-tab-mobile").addEventListener("click", () => { openTopic(event, 'Projects', 'portfolio') });
  document.getElementById("education-tab-mobile").addEventListener("click", () => { openTopic(event, 'Education', 'portfolio') });

  //Buttons to redirect client
  document.getElementById("SONY-hosted-system-architecture").addEventListener("click", () => {location.href='https://ams03pap003files.storage.live.com/y4mm2R4KwUSpGkjAZ-2CHnNQxKQx8f1ycdVUxZqoIiw6PcyP1G-m0qBOLJXYsZM6c867msluz-vLuPwvYjHdp3wmOJoRjrzuER8QV2VbdEMHSkSVZom8DpLw4RG94b4mTwulCbJH4QkEbUHczrsBktFBeswgR5Q5NSxOe5FU4u3KjOU1gFGIGbHsY7ACfr4FCtq?width=1604&height=828&cropmode=none'})
  document.getElementById("bepanda-website-btn").addEventListener("click", () => {location.href='https://bepanda.co.uk/'})
  document.getElementById("bt-cloud-architecture-btn").addEventListener("click", () => {location.href='https://ams03pap003files.storage.live.com/y4mQVJLZRIf1yE1F4O0iTfhUi-IuRphS90nb0MfUAwEiPaiB1aF6udMtz9O4NopcOnbDMYbW-g67pP3bhEF2-vC7Lqc0ygJBAC4tD7unjcPNSZQh9yaWEQl7TLHiyJ0ID_dEn-CwifZGeIdfm07shgv-ByGjZqYCSsatiwZd3QzzsBG4wZUrhNVBifRfpshZJe0?width=1143&height=1642&cropmode=none'})
  document.getElementById("bt-flow-diagram-btn").addEventListener("click", () => {location.href='https://ams03pap003files.storage.live.com/y4my0sC_U30GQ3-0JB400U53-s3CbG7nXq7HH9y83KwzZPyVLsEcezbFz-K83aY8caaPunMkrNByIsmxNMTCHi-_QmEqZ6gNIaaXIcsAfgwcL_R5HUYctquxj2yGUx7Gd3VIUNx2OgB2mAwLlysbt5bCcismaE64jnbc_u_HlVEAqvYPT0E7Hwpo-_yxC-Ybgy1?width=1502&height=2291&cropmode=none'})
  document.getElementById("bt-ui-designs-btn").addEventListener("click", () => {location.href='https://ams03pap003files.storage.live.com/y4mJvRirx8vTrsr5iEyDaFSqGCWqS3VAYcp__H52RL27fZYSaotxeL-emw0PLeQiDdgFYKgg9Lbwp_t0RkWaQOQfA2ucKEl3W1iXeFoaY1_yLALNfd0d7G00nM_0ixpDu3U1CcsHM0T7kOpxpLJbZl8Of3uoqAw7P4eTw1rSTbvw4twIMYOhEZIETv0T-BWNS7G?width=1401&height=1343&cropmode=none'})
  document.getElementById("bt-barcode-scanner-btn").addEventListener("click", () => {location.href='https://ams03pap003files.storage.live.com/y4m-rSuf1vu5Noy_P0G_AhT2j0CnoL8Dr8ZDbeOd10vPb_8_R1Dqdzd1LApgZUCFfC1hb7UMIwZpQvxihBWkXOlpc7sybARUrDYcIInNC82kCy6VvULOewPkBiS621JxWZbs81yiau0sxLbvV-10cUGthdWajmhEmMg989W0_9JnhukFxZMqEbkEpVgVGw9XQts?width=717&height=1273&cropmode=none'})
});


function openTopic(evt, topicName, section) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName(section + "_tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName(section + "_tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(topicName).style.display = "block";
  evt.currentTarget.className += " active";
}
