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
csvfile.close()
print "success 1"
csvfile = open('su15_2.csv', 'r')
instate = {'children' : []}
a = {'test' : []}
for row in csv.DictReader(csvfile):
	a['test'].append({'name' : 'Instate', 'size' : row['Illinois']
		})
	a['test'].append({'name' : 'Outstate', 'size' : row['Non-Illinois']
		})
	instate['children'].append(
		{
		'name' : row['Courses'],
		'children' : a['test']
		})
	a = {'test' : []}

output['children'].append(
{
	'name' : 'Instate',
	'children' : instate['children']
})


json.dump(output, jsonfile)
jsonfile.close()
