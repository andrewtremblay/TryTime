#!/usr/bin/env bash
echo 'running appcenter-pre-build.sh'

# inject latest secrets from env vars
sed -i-e "s/APPCENTER_ANDROID_SECRET/${APPCENTER_ANDROID_SECRET:-APPCENTER_ANDROID_SECRET}/g" android/app/src/main/assets/appcenter-config.json
sed -i-e "s/APPCENTER_IOS_SECRET/${APPCENTER_IOS_SECRET:-APPCENTER_IOS_SECRET}/g" ios/AppCenter-Config.plist

rm ios/AppCenter-Config.plist-e
rm android/app/src/main/assets/appcenter-config.json-e