export const blogData = [
    {
      id: "deploy",
      date: "17 June 2024",
      title: "MERN Deployment guide on Vercel",
      link: "/blogs/deploy",
      link_online: "https://dev.to/ppraneesh/deploy-react-node-projects-for-free-on-vercel-4365",
      contentsShort: "This is a blog about deploying MERN stack applications on Vercel. It will be definitely helpful for the people who are deploying their applications for the first time.",
      contents: `
  ###
  Looking to deploy your projects without spending a dime? You've come to the right place. There are several platforms out there that offer free deployment with some resource limitations. Some of the options include:
  
  - GitHub Pages
  - Glitch
  - Render
  - Netlify
  - Vercel
  - Digital Ocean
  
  Among these, I find Vercel to be the best for hobby projects. It's free, even for backend applications, and it boasts a 99% uptime. I was pleasantly surprised when my Node and Flask applications worked seamlessly on Vercel. In this blog, I'll show you how to deploy a frontend (React.js), a Node.js backend, and even connect MongoDB to your backend.
  # 
  ---
  
  ### Deploying React.js with Vercel
  
  Let's start with deploying a React.js application. I used Vite to create my React apps. If you haven't used it before, don't worry; it's straightforward. Here's a step-by-step guide:
  
  1. Upload Your Project to GitHub
  Make sure your project is uploaded to your GitHub account.
  2. Create a Vercel Account
  Sign up for a Vercel account using your GitHub credentials.
  3. Add a New Project on Vercel
  4. Click on the "Add New" button (top right, white color).
  5. Connect your GitHub account.
  6. Choose the repository you want to deploy.
  7. Type in your project name.
  8. Select the root directory (where your React files are located, e.g., frontend/reactfile/).
  9. Hit deploy.
  10. And that's it! Your project will be deployed, and you'll get a URL ending with vercel.app.
      
  ---
  
  ### Deploying Node.js with Vercel
        
  Deploying a Node.js application is a bit more involved, but don't worry, I've got you covered. Follow these steps carefully:
  
  1. Create a directory named 'api' in your project folder.
  2. Place your main server logic in index.js inside the /api directory. 
  3. Organize Additional Files
  4. If you have additional server files (e.g., teacherAPI.js), place them in the /api directory.
  5. Ensure Correct File Placement: Make sure package.json, package-lock.json, and .gitignore are outside the /api directory.
  6. Create vercel.json: In your project folder, create a file named vercel.json and paste the following content: 
  \`\`\`
  {
  "version": 2,
  "rewrites": [
      {
      "source": "/(.*)",
      "destination": "/api"
      }  
  ]
  }
  \`\`\`
  7. Commit your changes and push your project to GitHub.
  8. Deploy on Vercel: Go to Vercel and click "Add New" and select your repository.
  9. Set the framework preset to "Other."
  10. Ensure your root directory contains /api, .gitignore, package.json, etc.
  11. Copy your .env file content and paste it into the environment variables section on Vercel.
  12. Hit Deploy and voila! Your Node.js application is now deployed.
  
  File Structure for Node.js Backend
  Here's a visual representation of the file structure: 
  \`\`\`
  root directory
      |___
          |_ api
          |     |_ index.js
          |     |_ middlewares
          |_ package.json
          |_ .gitignore
  \`\`\`
      
  ---
  ### Connecting MongoDB to Your Node Server
  If you're using MongoDB with your Node server, you'll need to configure Vercel a bit differently. However, I've encountered issues with MongoDB disconnecting after a while. I recommend using Firebase instead, which is as simple as MongoDB and more stable for this setup.
      
  ### Final Thoughts
  I hope this guide helps you deploy your projects easily and efficiently. Experiment, learn, and happy coding!
  Feel free to reach out if you have any questions or need further assistance. Keep experimenting and keep coding!`,
        }
  ];