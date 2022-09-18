#!/bin/bash
############################################
### Generate python from proto
############################################

#pub global activate protoc_plugin
#export PATH="$PATH:$HOME/.pub-cache/bin"

#./do_generate_one.sh protos/google/api/http.proto
#./do_generate_one.sh protos/google/api/annotations.proto
./scripts/do_generate_one.sh common/common.proto
./scripts/do_generate_one.sh party.proto
./scripts/do_generate_one.sh rule.proto
./scripts/do_generate_one.sh action.proto
./scripts/do_generate_one.sh event.proto
./scripts/do_generate_one.sh location.proto
./scripts/do_generate_one.sh weather.proto
./scripts/do_generate_one.sh message.proto
./scripts/do_generate_one.sh analytic.proto


