(function(){
  const BASE='https://lash-course-auth-proxy.layero.app/new';
  const KEY='sb_publishable_4CCOM_y--DyR87goWV3mPQ_givZCJcO';
  const nativeFetch=window.fetch.bind(window);
  function authenticatedJwt(token){
    try{
      if(!token||token.split('.').length!==3)return false;
      const s=token.split('.')[1].replace(/-/g,'+').replace(/_/g,'/');
      const p=JSON.parse(atob(s.padEnd(Math.ceil(s.length/4)*4,'=')));
      return p&&p.role==='authenticated';
    }catch{return false}
  }
  window.fetch=async function(input,init){
    const opts=init?{...init}:{};
    let raw;
    try{raw=input instanceof Request?input.url:String(input)}catch{return nativeFetch(input,init)}
    let u;
    try{u=new URL(raw,location.href)}catch{return nativeFetch(input,init)}
    if(!/^\/(auth|rest|storage|functions)\/v1(?:\/|$)/.test(u.pathname))return nativeFetch(input,init);
    const target=BASE+u.pathname+u.search;
    const headers=new Headers(input instanceof Request?input.headers:undefined);
    if(opts.headers)new Headers(opts.headers).forEach((v,k)=>headers.set(k,v));
    headers.set('apikey',KEY);
    const auth=headers.get('authorization');
    const token=auth&&auth.replace(/^Bearer\s+/i,'');
    if(!authenticatedJwt(token))headers.set('authorization','Bearer '+KEY);
    opts.headers=headers;
    if(input instanceof Request){
      opts.method=opts.method||input.method;
      if(!('body' in opts)&&!['GET','HEAD'].includes(opts.method.toUpperCase())){
        try{opts.body=await input.clone().arrayBuffer()}catch{}
      }
    }
    return nativeFetch(target,opts);
  };
  window.__LASH_NEW_BACKEND__=true;
})();
