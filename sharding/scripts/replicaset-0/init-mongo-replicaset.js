var cfg = {
  _id: "rs0",
  members: [
    {
      _id: 0,
      host: "shard00:27017"
    },
    {
      _id: 1,
      host: "shard01:27017"
    },
    {
      _id: 2,
      host: "shard02:27017"
    }
  ]
};

var initStatus = rs.initiate(cfg);

printjson('Init mongo replica set status: ', initStatus);
