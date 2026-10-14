"""Packs the whole game into ONE html file (dist/window14_single.html) - handy for uploading to a host
or publishing as a single page.   Run:   python tools/build_single.py"""
import os, re
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def rd(p): return open(os.path.join(ROOT,p),encoding='utf-8').read()
html=rd('index.html')
import re as _re
html=_re.sub(r'<link rel="stylesheet" href="css/style.css[^"]*">',lambda _m:'<style>\n'+rd('css/style.css')+'</style>',html)
for m in re.findall(r'<script src="([^"]+)"></script>',html):
    html=html.replace('<script src="%s"></script>'%m,'<script>\n'+rd(m.split('?')[0])+'</script>')
os.makedirs(os.path.join(ROOT,'dist'),exist_ok=True)
out=os.path.join(ROOT,'dist','window14_single.html'); open(out,'w',encoding='utf-8').write(html)
print('wrote dist/window14_single.html',round(os.path.getsize(out)/1e6,2),'MB')
