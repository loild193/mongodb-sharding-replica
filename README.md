# MongoDB sharding & clustering

- 3 shards, each shard is a replica with 3 MongoDB instances
- 3 instances are config servers and also a replica
- 2 instances are router with port 27017 and 27018

- Run stacks:

```sh
docker compose up -d --build
```