import csv
import json

csvfile = open('su15.csv', 'r')
jsonfile = open('output.json', 'w')
output = {'name' : 'Summer 2015', 'children': []}
gender = {'children' : []}
i = 0
a = {'test' : []}
for row in csv.DictReader(csvfile):
	a['test'].append({'name' : 'Male', 'size' : row['Male']
		})
	a['test'].append({'name' : 'Female', 'size' : row['Female']
		})
	gender['children'].append(
		{
		'name' : row['Courses'],
		'children' : a['test']
		})
	a = {'test' : []}

output['children'].append(
{
	'name' : 'Gender',
	'children' : gender['children']
})
json.dump(output, jsonfile)
print "success"
jsonfile.close()
csvfile.close()