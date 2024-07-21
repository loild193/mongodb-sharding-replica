const addShard0 = sh.addShard("rs0/shard00:27017,shard01:27017,shard02:27017");
const addShard1 = sh.addShard("rs1/shard10:27017,shard11:27017,shard12:27017");
const addShard2 = sh.addShard("rs2/shard20:27017,shard21:27017,shard22:27017");

printjson('Add sharding mongodb: ', addShard0);
printjson('Add sharding mongodb: ', addShard1);
printjson('Add sharding mongodb: ', addShard2);
