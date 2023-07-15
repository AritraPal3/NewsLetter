Newsletter Signup

This project is a Newsletter Signup page that collects user's name and email address and sends the data to Mailchimp's servers via API calls. It is developed using ExpressJS, NodeJS, Mailchimp API, JSON, HTML, and CSS.

Table of Contents
Installation
Usage
Configuration

To run this project locally, follow these steps:

Clone the repository: git clone https://github.com/AritraPal3/NewsLetter.git

Navigate to the project directory: cd NewsLetter

Install the dependencies: npm install


Usage
To use this Newsletter Signup page, follow these steps:

Obtain an API key from Mailchimp. You can create an account and generate an API key on the Mailchimp website.
Open the project in a code editor.
Update the API key in the .env file with your Mailchimp API key.
Start the application: npm start
Open your web browser and visit http://localhost:3000 to access the Newsletter Signup page.
Enter your name and email address in the provided fields.
Click the "Subscribe" button to submit the form.
Upon successful submission, the user's name and email address will be sent to Mailchimp's servers using the Mailchimp API.

Configuration
In order to configure the application, you need to update the config.js file with your Mailchimp API key. Follow these steps:

Open the project in a code editor.
Locate the config.js file in the project's root directory.
Replace the placeholder value 'YOUR_MAILCHIMP_API_KEY' with your actual Mailchimp API key.
Save the changes.
Make sure to keep your API key confidential and avoid committing it to version control systems.

Contributing
Contributions to this project are welcome. If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on the GitHub repository.

When contributing to this project, please follow the Contributor Covenant code of conduct.
