# hackday-site
A single page site using react. It contains a survey. Uses the awesome [Parcel.js](https://parceljs.org/) to obviate all thinking.

## Install and deploy process

1. `npm install`
2. `npm start` for some deving.
3. Update the `action` in `js/Survey.js` to send your submits wherever.
    
    (Sign up at [formspree.io](https://formspree.io) to eliminate more thinkng.)

4. `git push origin master` (this also deploys to `gh_pages` using `JamesIves/github-pages-deploy-action`)
5. Turn on Github Pages by choosing the `gh_pages` publishing source. ([docs](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site))

Yay your site is live at `https://github.com/username/repo`!
