# How to contribute
If you are new to open-source contribution and don't know how to get started, don't worry, this is a deatiled step by step guide to help you make your first contribution.

Before heading any further, open terminal and run `git --version` to make sure that git is installed on your machine, if not, install it from [here](https://git-scm.com/downloads).

## Fork this repository

In order to make any changes to this repository, fork it by clicking on the fork button. This will create a copy of this repository in your account.

## Clone the repository

Now, to clone this repository to your local machine, copy the url of the forked repository.

Now, open a terminal and run the following command:

```
git clone https://github.com/Techtonic-Community/site.git Techtonic_Community
```

## Create a branch

After cloning the repository, change the current working directory to the repository directory by running the following command:

```
cd Techtonic_Community
```
Before making any changes, make sure to always create a new branch. To create a new brach run the following command:

```
git checkout -b branch-name
```
You can run `git branch` command to check your branch status.

## Install all the dependencies Start the server

After successfully making a branch, run the project by using the following commands:

```
npm i
npm run dev
```

# or

```
yarn
yarn run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Make changes

Now you are all set to make changes. For that you can use any text editor, but I will recommend using Vs Code and Atom as it feature rich and easy to use. If VS Code or Atom is already installed on your machine, run the following command:

### For VS Code

```
code .
```

### For Atom
```
atom .
```

It will open all the files in VS Code or Atom (which you opened).

## Now make chganges which you want to change for contribution.

After making the changes, run `git status` command. It will show you all the changes you have made.

## Commits 👮

Try and make small commits, it will be easier for us to review and merge them and also it will be easier for you to fix any errors if there are any.

## Commit Message Format 🔐

The commit message should be in the format of `type(scope): subject` where the `scope` is optional `type` is one of the following:

- `feat` : Use this when you are adding a new feature.
- `fix` : Use this when you are fixing a bug.
- `docs` : Use this when you are adding documentation.
- `style` : Use this when you are changing the style of the code.
- `refactor` : Use this when you are refactoring the code.
- `test` : Use this when you are adding tests.
- `chore` : Use this when you are changing the build process or auxiliary tools and libraries such as documentation generation.

## Commit those changes

Now, before commiting the changes you will have to add those changes to the staging area of the branch you have created. For that run the following command:

```
git add .
```
Now commit those changes by running the following command:

```
git commit -m "put-your-message-here"
```

## Push to GitHub

Finally push the changes you made to github by running the following command:

```
git push origin -u <your-branch-name>
```

Replace `<your-branch-name>` with the name of the branch you created earlier.

### If the code not pushed then chech there will be a upstream in the error oce copy it and paste it on terminal now all fine.


## If you're Working on an ISSUE or want to report on an ISSUE then must read this
[Issue](ISSUE.md)

## Pull requests 👮
## Submit the pull request

Now open your browser, here you will see a notification. Juslt click on **compare & pull request**.

Now submit the pull request with proper name and message where you explained about your changes and also you can include pictures or videos to make it more clear to the maintainer.

Soon your pull request will be reviewed and merged. You will be notified via email once your pull request has been merged.

Congratulations!! You have successfully raised your first pull request. Share on your socials.


#### Creating a Pull Request 📝

- Do not raise a PR if you are not assigned to the issue. Do not try and make spam pull requests as you might be **banned** from the the owner.
- Whenever making a Pull request, make sure you fill up the fields properly.
- We use `Lint PR title` workflow which makes sure that the PR titles are in the correct format. If you are not sure about the format, you can check the `Pull Request Title Format` section below.


#### Pull Request Title Format 🔐

🔴🔴🔴 **All LowerCase**

The title of the pull request should be in the format of `type(scope): subject` where the `scope` is optional `type` is one of the following:

Available types:

- `feat` : Use this when you are adding a new feature.
- `fix` : Use this when you are fixing a bug.
- `docs` : Use this when you are adding documentation.
- `style` : Use this when you are changing the style of the code.
- `refactor` : Use this when you are refactoring the code.
- `test` : Use this when you are adding tests.
- `chore` : Use this when you are changing the build process or auxiliary tools and libraries such as documentation generation.

**Examples:**

- `feat: customized icon for plates`
- `chore(refactor): remove unused dependencies`
- `fix: updated broken link in the footer`


#### Reviewing a Pull Request 📌

We welcome everyone to review Pull Requests, it is a great way to learn and network.

##### DOs
- Be kind and respectful, we use inclusive, gender-neutral language (for example `they/them` instead of `guy/man`)
- Use inline comments to explain your suggestions
- Use inline suggestions to propose changes
##### DON'Ts
- Don't be rude, disrespectful or aggressive
- Do not repeat feedback, this creates more noise than value (check the existing conversation), use GitHub reactions if you agree/disagree with a comment
- Do not spam Pull requests/issues.


##### NOTE

- Make sure there are no `failed` checks in the pull request. If there are any failed checks, you can click on the `Details` button to see the logs and fix the errors.
- If the tests are failing due to some internal error on our side, **ignore it.**
- Merging and reviewing the PRs takes time, so please be patient.
- If you want to work on the backend then contact me through any of my social media.
- If you have any problem related to database or drizzle or any backend related problem then please go to [.env.example](.env.example) and put all the details of your .env file on the projects root from your own supabase postgres database, as you're working your own so you'll not having any privacy problem or and excessive data so work without any tension.

<br>

#### For more information on how to contribute to open source projects, check out this [link](https://opensource.guide/how-to-contribute/) and [this](https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source) and "How to Contribute to Open Source" by [freeCodeCamp](https://www.freecodecamp.org/news/how-to-contribute-to-open-source-projects/).


### Thanks for Contributing :tada: