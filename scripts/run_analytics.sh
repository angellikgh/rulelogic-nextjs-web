#!/bin/bash
echo "============================================="
echo "Moose DB Login is "
echo $DB_LOGIN
echo "++++++++++++++"
echo "-------   Running Event Analtics --------------"
./scripts/do_run_one_analytic.sh ./queries/update_event_analytics.cypher $DB_LOGIN  $DB_PASSWORD
echo "-------   Running Rule Analytics ---------------"
./scripts/do_run_one_analytic.sh ./queries/update_rule_analytics.cypher $DB_LOGIN $DB_PASSWORD
echo "-------   Running Action Analytics ----------"
./scripts/do_run_one_analytic.sh ./queries/update_action_analytics.cypher $DB_LOGIN $DB_PASSWORD
echo "============================================="
