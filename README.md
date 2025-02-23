# Next.js 15 App Router Client-Side Navigation Bug

This repository demonstrates a bug encountered in Next.js 15's App Router where client-side navigation using the `<Link>` component fails after the initial page load. The initial navigation functions correctly, but subsequent client-side transitions do not update the page content, despite the URL changing in the browser.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/about` (this works).
5. Navigate back to `/` (this fails).  The URL changes, but the page content remains unchanged.

## Potential Causes

The issue might be related to how the App Router handles client-side navigation, potentially a caching problem or improper route handling within the client-side transitions. 

## Workaround and Solution

Please refer to the `bugSolution.js` file for a potential solution and explanation.
