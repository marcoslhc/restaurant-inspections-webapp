# Restaurant Inspections Web App
## What
This web app shows information about Miami-Dade County's restaurant inspections, using this API: [Code For Miami Restaurant Inspection API](https://github.com/Code-for-Miami/restaurant-inspections-api/). It'll make it easier to find out which eateries make the grade, and which ones are failing inspections.

#### Status
The prototype is currently being built.
We are discussing app design in issues and documenting in the [wiki](https://github.com/Code-for-Miami/restaurant-inspections-webapp/wiki)

## Why
The purpose of the app is show the data in a user friendly way via dashboard, tables and graphs in order to facilitate data inference over the dataset.

## Who
- [Code for Miami](https://github.com/codeformiami) &lt;[http://codefor.miami/projects](http://codefor.miami/projects)&gt;
- [Marcos Hernandez](https://github.com/marcoslhc) &lt;[http://xiryvella.com](http://xiryvella.com)&gt;
- [Tomas Prieto](https://github.com/pancakerobot)

If you contribute please add your name and contact information:

`[Name](https://github.com/username) <[contact info](contact_url)]>`

Also you can add your name to the [package.json](https://github.com/Code-for-Miami/restaurant-inspections-webapp/blob/develop/package.json)

## How
#### Dependencies
This is a Reactjs SPA and uses Webpack, Jest, Node.js, NPM, Sass, and React.js

#### Install
1. Download/clone this repository
2. Enter the project folder
3. Run `npm install`
4. Run `npm start`

More TBD

#### Deploy
run `npm run build`

More TBD

#### Testing
Run `npm test`

## Contribute
We use the [Integration-Manager Workflow](https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows#Integration-Manager-Workflow)

First fork this repository and clone your fork in your computer. Add this repo as a remote after you clone your fork into your local

```sh
git add remote upstream https://github.com/Code-for-Miami/restaurant-inspections-webapp/
```

Repeat this for every new feature

```sh
git checkout develop                # 1. Branch from develop
git branch cool-new-feature         # 2. Create a new branch for your feature
git pull --rebase upstream develop  # 3. Play your team's changes into your feature branch
git push origin cool-new-feature    # 4. Push to your origin
```

It is advisable to update your public branches often:

```sh
git checkout <branch>               # master or develop
git pull --rebase upstream/<branch> # Use rebase to update your local
git push origin <branch>            # Push your public fork
```

Make a PR from `cool-new-feature` in your fork against `develop` in https://github.com/Code-for-Miami/restaurant-inspections-webapp

## License
[LICENSE](https://github.com/Code-for-Miami/restaurant-inspections-webapp/blob/develop/LICENSE)
