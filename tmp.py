import json
import os
import sys
from collections import defaultdict

filepath = sys.argv[-1]
data = []
with open(filepath) as f:
    for line in f:
        if line.strip():
            try:
                line = json.loads(line[6:])
                data.append(line)
            except:
                continue
        else:
            continue
print(len(data))

paried = []
for item in data:
    if item['current_node']:
        resp = item['response']['formatted']['node'][
            item['current_node']]['response']['stream_state']
        paried.append((item['current_node'], resp))
    else:
        paried.append((None, item['response']['stream_state']))

out = defaultdict(list)
for item in paried:
    if out[item[0]]:
        if out[item[0]][-1] == item[1]:
            continue
        else:
            out[item[0]].append(item[1])
    else:
        out[item[0]].append(item[1])

print(out)
