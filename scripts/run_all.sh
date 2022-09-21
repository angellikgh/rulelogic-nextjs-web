HOME=/home/ubuntu/rulelogic_api
LOG=/home/ubuntu/rulelogic_api/log

# cd $HOME; $HOME/run_event.sh         >>$LOG/run_event.log          2>> $LOG/run_event.err
# cd $HOME; $HOME/run_rule.sh          >>$LOG/run_rule.log          2>> $LOG/run_rule.err
# cd $HOME; $HOME/run_action.sh        >>$LOG/run_action.log        2>> $LOG/run_action.err
# cd $HOME; $HOME/run_rule_temporal.sh >>$LOG/run_rule_temporal.log 2>> $LOG/run_rule_temporal.err
# cd $HOME; $HOME/run_email.sh         >>$LOG/run_email.log         2>> $LOG/run_email.err

cd $HOME; $HOME/run_event.sh        
cd $HOME; $HOME/run_rule.sh         
cd $HOME; $HOME/run_action.sh      
cd $HOME; $HOME/run_rule_temporal.sh 
cd $HOME; $HOME/run_email.sh        