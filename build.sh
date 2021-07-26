yarn
echo '===== install modules done ====='
yarn stop
echo '===== stop done ====='
rm -rf ./app
echo '===== remove done ====='
yarn build
echo '===== build done ====='
yarn start
echo '===== run done ====='