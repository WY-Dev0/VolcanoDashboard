# Kubernetes.IoK8sApiCoreV1ContainerPort

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containerPort** | **Number** | Number of port to expose on the pod&#39;s IP address. This must be a valid port number, 0 &lt; x &lt; 65536. | 
**hostIP** | **String** | What host IP to bind the external port to. | [optional] 
**hostPort** | **Number** | Number of port to expose on the host. If specified, this must be a valid port number, 0 &lt; x &lt; 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. | [optional] 
**name** | **String** | If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services. | [optional] 
**protocol** | **String** | Protocol for port. Must be UDP, TCP, or SCTP. Defaults to \&quot;TCP\&quot;.  Possible enum values:  - &#x60;\&quot;SCTP\&quot;&#x60; is the SCTP protocol.  - &#x60;\&quot;TCP\&quot;&#x60; is the TCP protocol.  - &#x60;\&quot;UDP\&quot;&#x60; is the UDP protocol. | [optional] 



## Enum: ProtocolEnum


* `SCTP` (value: `"SCTP"`)

* `TCP` (value: `"TCP"`)

* `UDP` (value: `"UDP"`)




