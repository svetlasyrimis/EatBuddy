git add . &&
git commit -m "use less setState calls" &&
git push origin fix &&
npm run build &&
cd build &&
mv index.html 200.html &&
npx surge --domain http://mealmatch.surge.sh