# !/bin/bash
if [ -z "$(git status --porcelain)" ]; then 
  git branch -D gh-pages
  git checkout gh-pages
  echo "\x1b[32mInfo: yarn installing...\x1b[39m"
  yarn
  echo "\x1b[32mInfo: building...\x1b[39m"
  yarn demo
  git add .
  git commit -m 'demo: publish demo' -n
  echo "\x1b[32mInfo: publishing...\x1b[39m"
  git push origin gh-pages -f
  git checkout master
else
  echo "\x1b[31mError: Please clean your workspace before publishing\x1b[39m"
fi