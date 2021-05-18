import json 
en = "q w e r t y u i o p [ ] a s d f g h j k l ; ' \ z x c v n m , . / `"
ar = "ض ص ث ق ف غ ع ه خ ح ج د ش س ي ب ل ا ت ن م ك ط \ ئ ء ؤ ر ى ة و ز ظ ذ" 

print(len(en), len(ar))

eng = [i for i in en.split(" ")]
arb = [i for i in ar.split(" ")]


data = {}
for i,key in enumerate(eng):
    data[key] = arb[i]

with open('ar_en.json', 'w', encoding='utf8') as json_file:
    json.dump(data, json_file, ensure_ascii=False)

