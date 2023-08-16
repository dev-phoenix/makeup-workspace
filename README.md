# makeup-workspace
workspace for quick layout development

v0.2

=====
## merge
[Bitbucket: 3-way merge](https://www.atlassian.com/git/tutorials/using-branches/git-merge)

``` bush
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
```
