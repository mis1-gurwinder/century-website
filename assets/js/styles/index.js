/* Century style engine: every style on the site is defined in JavaScript (JSS) and attached here.
   Sheets attach in order (base, then theme), so the theme layer overrides the base layer. */
(function(){
  var S=window.CENTURY_STYLES||{};
  /* the brand palette is the default; dark only when chosen with the footer switch */
  try{var saved=localStorage.getItem('c-theme');document.documentElement.dataset.theme=saved||'light'}catch(e){document.documentElement.dataset.theme='light'}
  var engine=jss.create({plugins:[jssPluginGlobal.default(),jssPluginNested.default(),jssPluginCamelCase.default()]});
  (S.properties||[]).forEach(function(p){try{window.CSS&&CSS.registerProperty&&CSS.registerProperty(p)}catch(e){}});
  var keepName={generateId:function(rule){return rule.key}};
  ['base','theme','brand','glass','fx'].forEach(function(name,i){
    if(!S[name])return;
    var styles=typeof S[name]==='function'?S[name](S.tokens||{}):S[name];
    engine.createStyleSheet(styles,Object.assign({index:i,meta:'century-'+name},keepName)).attach();
  });
  window.CENTURY_STYLES.engine=engine;
})();
