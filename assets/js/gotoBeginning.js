// Reading progress + back-to-top
(function(){
    const bar = document.createElement('div');
    bar.id = 'read-progress';
    document.body.appendChild(bar);

    const wrap = document.createElement('div');
    wrap.id = 'to-top';
    wrap.innerHTML = '<button class="btn btn-sm btn-outline-secondary" aria-label="Back to top">↑</button>';
    document.body.appendChild(wrap);

    function onScroll(){
        const h = document.documentElement;
        const scrolled = h.scrollTop;
        const height = h.scrollHeight - h.clientHeight;
        const pct = height>0 ? (scrolled/height)*100 : 0;
        bar.style.width = pct + '%';
        wrap.classList.toggle('show', scrolled > (h.clientHeight * 0.33));
    }
    window.addEventListener('scroll', onScroll, {passive:true});
    window.addEventListener('resize', onScroll);
    onScroll();
    wrap.addEventListener('click', ()=>window.scrollTo({top:0, behavior:'smooth'}));
})();
