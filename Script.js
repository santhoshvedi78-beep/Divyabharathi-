Here's the *JavaScript* code (`script.js`) for the *Iterative Resume Builder*:

```javascript
// Function to build the resume
function buildResume(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Get input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const skills = document.getElementById("skills").value;

  // Create resume HTML
  const resumeHTML = `
    <h2>name</h2>
    <p><strong>Email:</strong>{email}</p>
    <p><strong>Phone:</strong> phone</p>
    <h3>Education</h3>
    <p>{education}</p>
    <h3>Experience</h3>
    <p>experience</p>
    <h3>Skills</h3>
    <p>{skills}</p>
  `;

  // Display the resume
  document.getElementById("resumeOutput").innerHTML = resumeHTML;
}
```

*Note:* Make sure you connect this script in your HTML file with:

```html
<script src="script.js"></script>
```
