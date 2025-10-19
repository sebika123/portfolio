# Deployment Instructions

This portfolio website can be easily deployed using either Vercel or Netlify. Both platforms offer simple deployment processes and are well-suited for Next.js applications.

## Deploying to Vercel

1. Create a Vercel account at [vercel.com](https://vercel.com/) if you don't have one already
2. Install the Vercel CLI: `npm install -g vercel`
3. Run `vercel` in the project directory
4. Follow the prompts to link your project to Vercel
5. Your site will be deployed automatically

Alternatively, you can deploy directly from the Vercel dashboard:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to the Vercel dashboard
3. Click "Import Project"
4. Select "Import Git Repository" and provide the URL to your repository
5. Configure the project settings (the defaults should work fine for this Next.js project)
6. Click "Deploy"

## Deploying to Netlify

1. Create a Netlify account at [netlify.com](https://netlify.com/) if you don't have one already
2. Build your project locally with `npm run build`
3. Install the Netlify CLI: `npm install -g netlify-cli`
4. Run `netlify deploy` in the project directory
5. Follow the prompts to deploy your site

Alternatively, you can deploy via the Netlify dashboard:

1. Push your code to a Git repository
2. Log in to the Netlify dashboard
3. Click "New site from Git"
4. Connect to your Git provider and select your repository
5. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Click "Deploy site"

## Environment Variables

This project doesn't require any environment variables for deployment.

## Custom Domain

After deploying your site, you can connect a custom domain through either platform's dashboard:

1. Purchase a domain name from a domain registrar
2. In the Vercel or Netlify dashboard, go to your project settings
3. Look for domain settings and add your custom domain
4. Follow the instructions to update your DNS settings with your domain registrar

Your portfolio website should now be live and accessible to visitors!