git stash
git branch -D gh-pages
git checkout -b gh-pages
git stash pop
echo 'yarn installing:'
yarn
echo 'building package:'
yarn demo
git add .
git commit -m 'demo: publish demo' -n
echo 'publishing...'
git push origin gh-pages -f