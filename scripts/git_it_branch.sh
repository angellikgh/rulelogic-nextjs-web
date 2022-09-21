P_COMMENT=$1
git status
git add --all

git commit -am "${P_COMMENT}"
git push -u origin main
