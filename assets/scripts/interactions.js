(function(){
  const D=window.CHANGHUXIAN_DATA;
  if(!D)return;

  /* ========== 小宇舅舅一日轨迹（已由内联JS接管，此处跳过） ========== */

  /* ========== 职业缴费测算（已由内联JS接管，此处跳过） ========== */

  /* ========== 城市滑杆（已由内联JS接管，此处跳过） ========== */

  /* ========== 流程步骤（旧版兼容，已废弃） ========== */

  /* ========== 定点机构准入流程图弹窗交互 ========== */
  const openModalBtn = document.getElementById('openConditionModal');
  const closeModalBtn = document.getElementById('closeConditionModal');
  const modal = document.getElementById('conditionModal');
  if (openModalBtn && modal) {
    openModalBtn.addEventListener('click', () => {
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
    });
  }
  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
    });
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('process-flow-modal-backdrop')) {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  /* ========== 循环节点 ========== */
  let loop=0;
  document.querySelectorAll('#loopNodes button').forEach((b,i)=>b.addEventListener('click',()=>{if(i<=loop){b.classList.add('visible');loop=Math.min(2,i+1);document.querySelectorAll('#loopNodes button')[loop]?.classList.add('visible')}}));
  document.querySelector('#loopNodes button')?.classList.add('visible');

  /* ========== 国家对比 ========== */
  const run=document.getElementById('runwayButtons'),co=document.getElementById('countryOutput');
  function showCountry(c){
    if(co)co.innerHTML='<h4>'+c.country+'</h4><p><b>制度模式：</b>'+c.mode+'</p><p><b>受益范围：</b>'+c.scope+'</p><p><b>筹资方式：</b>'+c.funding+'</p>'
  }
  if(run){
    D.countryCompare.forEach((c,i)=>{
      const b=document.createElement('button');
      b.type='button';
      b.textContent=c.country;
      b.onclick=()=>showCountry(c);
      run.appendChild(b);
      if(i===0)showCountry(c)
    })
  }
})();
