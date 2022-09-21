#!/bin/bash
############################################
### Generate python from proto
############################################
P_PROTO_FILE_NAME="${1}"

V_PROTO_DIR="protos"    # location of proto file
V_PROTO_OUT_DIR="grpc/generated"  # lib/generated"  # location of generated proto python file ( object classes)
V_GRPC_OUT_DIR="lib/generated"    # location of gRPC python files ( rpc methods )
V_PLUGIN_LOCATION="/Users/williamhannah/.pub-cache/bin/protoc-gen-dart" # "$HOME/.pub-cache/bin/protoc-gen-dart"
V_GOOGLE_API_DIR="/Users/williamhannah/apps/googleapis"   



echo "================================================="
echo "Started generating ${P_PROTO_FILE_NAME}"
echo "================================================="


echo "Entity: ${P_PROTO_FILE_NAME}"
echo "Proto Dir ${V_PROTO_DIR}"
echo "Proto Out Dir ${V_PROTO_OUT_DIR}"
echo "Grpc  Out Dir ${V_GRPC_OUT_DIR}"

protoc --dart_out=grpc:lib/src/generated  \
       -IPATH=/Users/williamhannah/apps/rulelogic/googleapis  \
       -IPATH=/Users/williamhannah/apps/rulelogic/rulelogic_api  \
       --proto_path=/Users/williamhannah/apps/rulelogic/googleapis  \
       --proto_path=/Users/williamhannah/apps/rulelogic/rulelogic_api/protos  \
       --proto_path=/Users/williamhannah/apps/rulelogic/rulelogic_api/protos/common  \
       -Iprotos ${P_PROTO_FILE_NAME}


#protoc --dart_out=grpc:lib/src/generated -Iprotos protos/helloworld.proto

#protoc \
#        --dart_out=grpc:lib/src/generated \
#        --include_imports \
#        --include_source_info \
#        --proto_path=${V_GOOGLE_API_DIR} \
#        --proto_path=. \
#        --descriptor_set_out=api_descriptor.pb \
#        ${P_PROTO_FILE_NAME}


echo "Finshed generating ${P_PROTO_FILE_NAME}"
