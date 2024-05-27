# makeup-workspace
workspace for quick layout development

v1.1

=====
## merge
[Bitbucket: 3-way merge](https://www.atlassian.com/git/tutorials/using-branches/git-merge)

``` bash
Start a new feature
git checkout -b new-feature main
# Edit some files
git add <file>
git commit -m "Start a feature"
# Edit some files
git add <file>
git commit -m "Finish a feature"
# Develop the main branch
git checkout main
# Edit some files
git add <file>
git commit -m "Make some super-stable changes to main"
# Merge in the new-feature branch
git merge new-feature
git branch -d new-feature

# Remove file from observation
git rm --cached file\ name
```

## git config ssh url
[Changing Git Remote to SSH](https://devconnected.com/how-to-change-git-remote-origin/)

``` bush
git remote set-url origin git@github.com:YOUR_ACCOUNT/YOUR_PROJECT.git
```