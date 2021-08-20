# !/bin/bash
if [ -z "$(git status --porcelain)" ]; then 
  git push origin :gh-pages
  git branch -D gh-pages
  git checkout -b gh-pages
  echo "\x1b[32mInfo: yarn installing...\x1b[39m"
  yarn
  echo "\x1b[32mInfo: building...\x1b[39m"
  yarn demo
  git add .
  git commit -m 'demo: publish demo' -n
  echo "\x1b[32mInfo: publishing...\x1b[39m"
  git push origin gh-pages -f

  branch_name=publish_`date +%Y_%m_%d`
  git checkout -b $branch_name
  git push origin $branch_name -f
  git checkout master
else
  echo "\x1b[31mError: Please clean your workspace before publishing\x1b[39m"
fi
