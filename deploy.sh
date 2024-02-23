
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if deploying to https://TheKirrrra.github.io/Vods
# git push -f git@github.com:TheKirrrra/VODs.git master:gh-pages

cd -