TEST RESTFULY
==============
npm package [express-restify-mongoose](https://florianholzapfel.github.io/express-restify-mongoose/).


With Postman
-----------
Query:
```
GET /api/V1/users?select={"name":1}
```
result:
```
[{"_id":"5a92e5a01da14db2f7f05fd7","name":"Donovan"},
{"_id":"5a92e6531da14db2f7f069c4","name":"Noble"},
{"_id":"5a92e6531da14db2f7f069c5","name":"Rose"},
{"_id":"5a92e6531da14db2f7f069c6","name":"Harriett"},
{"_id":"5a92e6531da14db2f7f069c7","name":"Donovan"},
{"_id":"5a92e6531da14db2f7f069c8","name":"Small"},
{"_id":"5a92e6531da14db2f7f069c9","name":"Ortiz"},
{"_id":"5a92e6531da14db2f7f069ca","name":"Vazquez"},
{"_id":"5a92e6531da14db2f7f069cb","name":"Reeves"},
{"_id":"5a92e6531da14db2f7f069cc","name":"Carey"},
{"_id":"5a92e6531da14db2f7f069cd","name":"Sharp"}]
```
Query:
```
GET /api/V1/users?query={"name":{"$regex":"(?i)(re)"}}&select={"name":1}
```
Result:
```
[{"_id":"5a92e6531da14db2f7f069cb","name":"Reeves"},
{"_id":"5a92e6531da14db2f7f069cc","name":"Carey"}]
```