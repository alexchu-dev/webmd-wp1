Welcome to Ports Travel - a simulated Travel Agency website for academic purpose on the web management and development project of University of Portsmouth by myself (up2244885).

This project was built with Next.js 14, a fullstack development framework.

The project uses App Router with server side rendering.

## Local view

To enable full functionalities of the project, you must have the .env file. This file is attached in the zip file for marking, however it will not be included in Github as it contains API credentials.

Below attached the env file template, open users can create their own API keys and secrets according to the services. (Google Maps API, Mongodb API, Gmail API, Github and Google OAuth)

When you have the .env file ready, you should be able to run the development server.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Click the "Login" link at the top right corner. You can use email: "demo@demo.com" and password: "demo" to login.

However, you are suggested to use Google or Github OAuth login for better security.

![image](https://github.com/alexchu-dev/webmd-wp1/assets/61229735/f52ae314-fc48-4d73-bbea-e2c54acb02ff)


After login, you should be redirected to the dashboard.

![image](https://github.com/alexchu-dev/webmd-wp1/assets/61229735/1217c819-6beb-4fc2-8837-ffe7957f57a1)


If you have the admin right, you would be able to see an Admin Panel page. You would be able to Add, Edit and Delete destinations. Package, Journal and User are still under construction.

![image](https://github.com/alexchu-dev/webmd-wp1/assets/61229735/eea01b4c-b8dd-4159-b970-e697353e1b2e)

When you click Edit, a modal would pop up and allow you to modify the details of the destination.

![image](https://github.com/alexchu-dev/webmd-wp1/assets/61229735/1cf7b77c-6e81-42e9-8c97-74ac24cc1bfe)


## Staging environment deployed on Vercel

Demo site: [https://webmd-wp1.vercel.app/] (Image upload not available due to Vercel's restriction)

![image](https://github.com/alexchu-dev/webmd-wp1/assets/61229735/38b6fe9a-c289-4be1-a7bd-181a89751d06)

This project is deployed on [Vercel Platform](https://vercel.com/)


## .env file template

NEXT_PUBLIC_API_URL="http://localhost:3000"

GOOGLE_MAPS_API_KEY=

NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=

MONGODB_URI=

GMAIL_USER=
GMAIL_PASS=

NEXTAUTH_SECRET=

//Linux: `openssl rand -hex 32` or go to https://generate-secret.vercel.app/32

AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
