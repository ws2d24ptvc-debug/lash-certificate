(function(){
  document.addEventListener('submit', async function(ev){
    const form=ev.target;
    if(!(form instanceof HTMLFormElement)) return;
    const submit=form.querySelector('button[type="submit"]');
    if(!submit || (submit.textContent||'').trim()!=='Зарегистрироваться') return;

    ev.preventDefault();
    ev.stopPropagation();
    ev.stopImmediatePropagation();

    const name=form.querySelector('#name')?.value?.trim()||'';
    const email=form.querySelector('#email')?.value?.trim()||'';
    const password=form.querySelector('#password')?.value||'';
    if(!name||!email||password.length<8) return;

    submit.disabled=true;
    const original=submit.textContent;
    submit.textContent='Отправляем письмо…';

    try{
      const res=await fetch('/auth/v1/signup',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({email,password,data:{full_name:name}})
      });
      let data={};
      try{data=await res.json()}catch{}
      if(!res.ok){
        const msg=data?.msg||data?.message||data?.error_description||data?.error||'Не удалось зарегистрироваться. Попробуйте ещё раз.';
        throw new Error(msg);
      }

      form.style.display='none';
      const box=document.createElement('div');
      box.setAttribute('data-signup-success','1');
      box.style.cssText='margin-top:24px;padding:20px;border:1px solid rgba(231,182,143,.35);border-radius:14px;background:rgba(231,182,143,.08);text-align:center;line-height:1.6';
      box.innerHTML='<div style="font-size:28px;margin-bottom:8px">✓</div><strong style="display:block;font-size:18px;margin-bottom:8px">Письмо отправлено</strong><span style="color:#cdbbb0">Откройте письмо от LASH ACADEMY и подтвердите электронную почту. После подтверждения вернитесь сюда и войдите с указанной почтой и паролем.</span>';
      form.insertAdjacentElement('afterend',box);
    }catch(err){
      const old=document.querySelector('[data-signup-error="1"]');
      if(old) old.remove();
      const box=document.createElement('div');
      box.setAttribute('data-signup-error','1');
      box.style.cssText='margin-top:14px;padding:12px;border-radius:10px;background:rgba(180,60,50,.14);color:#f1b2a8;text-align:center';
      box.textContent=err instanceof Error?err.message:'Ошибка регистрации';
      form.insertAdjacentElement('afterend',box);
      submit.disabled=false;
      submit.textContent=original;
    }
  },true);
})();
