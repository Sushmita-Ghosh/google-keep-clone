// user@DESKTOP-L70T6QA MINGW64 ~/Desktop/Google Keep/google-keep (master)
// $ git init
// Reinitialized existing Git repository in C:/Users/user/Desktop/Google Keep/google-keep/.git/

// user@DESKTOP-L70T6QA MINGW64 ~/Desktop/Google Keep/google-keep (master)
// $ git remote add origin https://github.com/Sushmita-Ghosh/google-keep.git

// user@DESKTOP-L70T6QA MINGW64 ~/Desktop/Google Keep/google-keep (master)
// $ git status
// On branch master
// Changes not staged for commit:
//   (use "git add/rm <file>..." to update what will be committed)
//   (use "git restore <file>..." to discard changes in working directory)
//         modified:   src/App.css
//         modified:   src/App.js
//         deleted:    src/App.test.js
//         deleted:    src/reportWebVitals.js

// no changes added to commit (use "git add" and/or "git commit -a")

// user@DESKTOP-L70T6QA MINGW64 ~/Desktop/Google Keep/google-keep (master)
// $ git add -A
// warning: LF will be replaced by CRLF in src/App.js.
// The file will have its original line endings in your working directory

// user@DESKTOP-L70T6QA MINGW64 ~/Desktop/Google Keep/google-keep (master)
// $ git commit -m "created readme"
// [master dc9a003] created readme
//  4 files changed, 8 insertions(+), 84 deletions(-)
//  rewrite src/App.css (100%)
//  rewrite src/App.js (92%)
//  delete mode 100644 src/App.test.js
//  delete mode 100644 src/reportWebVitals.js

// user@DESKTOP-L70T6QA MINGW64 ~/Desktop/Google Keep/google-keep (master)
// $ git fetch origin
// remote: Enumerating objects: 3, done.
// remote: Counting objects: 100% (3/3), done.
// remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
// Unpacking objects: 100% (3/3), 602 bytes | 2.00 KiB/s, done.
// From https://github.com/Sushmita-Ghosh/google-keep
//  * [new branch]      main       -> origin/main

// user@DESKTOP-L70T6QA MINGW64 ~/Desktop/Google Keep/google-keep (master)
// $ git push -u origin main
// error: src refspec main does not match any
// error: failed to push some refs to 'https://github.com/Sushmita-Ghosh/google-keep.git'

// user@DESKTOP-L70T6QA MINGW64 ~/Desktop/Google Keep/google-keep (master)
// $ git branch -m master main

// user@DESKTOP-L70T6QA MINGW64 ~/Desktop/Google Keep/google-keep (main)
// $ git push -u origin main
// To https://github.com/Sushmita-Ghosh/google-keep.git
//  ! [rejected]        main -> main (non-fast-forward)
// error: failed to push some refs to 'https://github.com/Sushmita-Ghosh/google-keep.git'
// hint: Updates were rejected because the tip of your current branch is behind
// hint: its remote counterpart. Integrate the remote changes (e.g.
// hint: 'git pull ...') before pushing again.
// hint: See the 'Note about fast-forwards' in 'git push --help' for details.

// user@DESKTOP-L70T6QA MINGW64 ~/Desktop/Google Keep/google-keep (main)
// $ git fetch

// user@DESKTOP-L70T6QA MINGW64 ~/Desktop/Google Keep/google-keep (main)
// $ git pull --rebase origin main
// From https://github.com/Sushmita-Ghosh/google-keep
//  * branch            main       -> FETCH_HEAD
// error: could not apply 3a77b81... Initialize project using Create React App
// Resolve all conflicts manually, mark them as resolved with
// "git add/rm <conflicted_files>", then run "git rebase --continue".
// You can instead skip this commit: run "git rebase --skip".
// To abort and get back to the state before "git rebase", run "git rebase --abort".
// Could not apply 3a77b81... Initialize project using Create React App
// CONFLICT (add/add): Merge conflict in README.md
// Auto-merging README.md

// user@DESKTOP-L70T6QA MINGW64 ~/Desktop/Google Keep/google-keep (main|REBASE 1/2)
// $ git push -u origin main
// To https://github.com/Sushmita-Ghosh/google-keep.git
//  ! [rejected]        main -> main (non-fast-forward)
// error: failed to push some refs to 'https://github.com/Sushmita-Ghosh/google-keep.git'
// hint: Updates were rejected because a pushed branch tip is behind its remote
// hint: counterpart. Check out this branch and integrate the remote changes
// hint: (e.g. 'git pull ...') before pushing again.
// hint: See the 'Note about fast-forwards' in 'git push --help' for details.

// user@DESKTOP-L70T6QA MINGW64 ~/Desktop/Google Keep/google-keep (main|REBASE 1/2)
// $ git add -A

// user@DESKTOP-L70T6QA MINGW64 ~/Desktop/Google Keep/google-keep (main|REBASE 1/2)
// $ git commit -m "my local changes"
// [detached HEAD 8b1b852] my local changes
//  18 files changed, 11732 insertions(+), 1 deletion(-)
//  create mode 100644 .gitignore
//  rewrite README.md (100%)
//  create mode 100644 package.json
//  create mode 100644 public/favicon.ico
//  create mode 100644 public/index.html
//  create mode 100644 public/logo192.png
//  create mode 100644 public/logo512.png
//  create mode 100644 public/manifest.json
//  create mode 100644 public/robots.txt
//  create mode 100644 src/App.css
//  create mode 100644 src/App.js
//  create mode 100644 src/App.test.js
//  create mode 100644 src/index.css
//  create mode 100644 src/index.js
//  create mode 100644 src/logo.svg
//  create mode 100644 src/reportWebVitals.js
//  create mode 100644 src/setupTests.js
//  create mode 100644 yarn.lock

// user@DESKTOP-L70T6QA MINGW64 ~/Desktop/Google Keep/google-keep (main|REBASE 1/2)
// $ git pull
// You are not currently on a branch.
// Please specify which branch you want to merge with.
// See git-pull(1) for details.

//     git pull <remote> <branch>

// user@DESKTOP-L70T6QA MINGW64 ~/Desktop/Google Keep/google-keep (main|REBASE 1/2)
// $ git pull origin main
// From https://github.com/Sushmita-Ghosh/google-keep
//  * branch            main       -> FETCH_HEAD
// Already up to date.

// user@DESKTOP-L70T6QA MINGW64 ~/Desktop/Google Keep/google-keep (main|REBASE 1/2)
// $ git push -u origin main
// To https://github.com/Sushmita-Ghosh/google-keep.git
//  ! [rejected]        main -> main (non-fast-forward)
// error: failed to push some refs to 'https://github.com/Sushmita-Ghosh/google-keep.git'
// hint: Updates were rejected because a pushed branch tip is behind its remote
// hint: counterpart. Check out this branch and integrate the remote changes
// hint: (e.g. 'git pull ...') before pushing again.
// hint: See the 'Note about fast-forwards' in 'git push --help' for details.

// user@DESKTOP-L70T6QA MINGW64 ~/Desktop/Google Keep/google-keep (main|REBASE 1/2)
// $ git push origin main
// To https://github.com/Sushmita-Ghosh/google-keep.git
//  ! [rejected]        main -> main (non-fast-forward)
// error: failed to push some refs to 'https://github.com/Sushmita-Ghosh/google-keep.git'
// hint: Updates were rejected because a pushed branch tip is behind its remote
// hint: counterpart. Check out this branch and integrate the remote changes
// hint: (e.g. 'git pull ...') before pushing again.
// hint: See the 'Note about fast-forwards' in 'git push --help' for details.

// user@DESKTOP-L70T6QA MINGW64 ~/Desktop/Google Keep/google-keep (main|REBASE 1/2)
// $ git push -f origin main
// Enumerating objects: 27, done.
// Counting objects: 100% (27/27), done.
// Delta compression using up to 4 threads
// Compressing objects: 100% (26/26), done.
// Writing objects: 100% (27/27), 212.16 KiB | 7.86 MiB/s, done.
// Total 27 (delta 1), reused 0 (delta 0), pack-reused 0
// remote: Resolving deltas: 100% (1/1), done.
// To https://github.com/Sushmita-Ghosh/google-keep.git
//  + f3ef2ce...dc9a003 main -> main (forced update)

// user@DESKTOP-L70T6QA MINGW64 ~/Desktop/Google Keep/google-keep (main|REBASE 1/2)
