function e(n,o="story"){const t=window.__STORYBOOK_ADDONS_CHANNEL__;t?t.emit("setCurrentStory",{storyId:n,viewMode:o}):window.location.href=`?id=${n}&viewMode=${o}`}export{e as n};
