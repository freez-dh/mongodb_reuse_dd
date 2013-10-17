db.test.remove()
var a = {}
var end = 0
for (var i = 0 ; i < end; ++i) {
	a["" + i] = i
}
db.test.save(a)

var start_time = new Date().valueOf()

for (var i = 0; i < 10000; ++i) {
	var cur_value = i + end
	var key = cur_value
	var inside_obj = {}
	inside_obj[key] = cur_value
	var set_obj = {"$set" : inside_obj}
	db.test.update({}, set_obj)
}
db.test.findOne({}, {"_id" : 1})

var end_time = new Date().valueOf()
print(end_time - start_time)

