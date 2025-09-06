
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import { Home } from './pages/Home';
import Category from './components/category';
import Recipe from './pages/recipe';

function NoMath() {
  let location = useLocation();
  return (
    <div className="grey" >
      <h1 >Ops!</h1>
      <h3 >Error has occurred</h3>
      <h5 >Does not exist: {location.pathname}</h5>
    </div>
  );
};

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
    <!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104053596', 'ym');

    ym(104053596, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/104053596" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
        <main className='container content'>
          <Routes>
            <Route path='*' element={<NoMath />} />
            <Route path='/' element={<Home />} />
            <Route path='Contact/' element={<Contact />} />
            <Route path='About/' element={<About />} />
            <Route path='Category/:name' element={<Category />} />
            <Route path='meal/:id' element={<Recipe />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}
