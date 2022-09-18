P_LOGIN=$2
P_PASSWORD=$3
P_QUERY=$1
cypher-shell -a neo4j://localhost:7687 -u $P_LOGIN -p $P_PASSWORD -f $P_QUERY
