"""Rebuilds js/assets.js from the files in assets/.
Run this after you add, replace or delete a file in assets/ :   python tools/build_assets.py
Every file becomes a key in the ASSETS object (the file name without its extension).
Audio: the two menu songs have fixed keys (music, music2); sfx/*.mp3 go into ASSETS.sfx by file name."""
import os, json, base64
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MIME={'webp':'image/webp','png':'image/png','jpg':'image/jpeg','jpeg':'image/jpeg','mp3':'audio/mpeg'}
MUSIC={'menu_music_1_bella_ciao.mp3':'music','menu_music_2_house_of_the_rising_sun.mp3':'music2'}
def uri(path):
    ext=path.rsplit('.',1)[1].lower()
    return 'data:%s;base64,%s'%(MIME[ext],base64.b64encode(open(path,'rb').read()).decode())
out={}
d=os.path.join(ROOT,'assets','images')
for f in sorted(os.listdir(d)): out[f.rsplit('.',1)[0]]=uri(os.path.join(d,f))
d=os.path.join(ROOT,'assets','audio','music')
for f in sorted(os.listdir(d)):
    if f in MUSIC: out[MUSIC[f]]=uri(os.path.join(d,f))
d=os.path.join(ROOT,'assets','audio','sfx'); out['sfx']={}
for f in sorted(os.listdir(d)): out['sfx'][f.rsplit('.',1)[0]]=uri(os.path.join(d,f))
open(os.path.join(ROOT,'js','assets.js'),'w').write('const ASSETS = '+json.dumps(out)+';\n')
print('wrote js/assets.js:',len(out)-1,'files +',len(out['sfx']),'sound effects,',round(os.path.getsize(os.path.join(ROOT,'js','assets.js'))/1e6,2),'MB')
