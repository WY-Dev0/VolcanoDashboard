# Kubernetes.IoK8sApiCoreV1EndpointPort

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appProtocol** | **String** | The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).  * Kubernetes-defined prefixed names:   * &#39;kubernetes.io/h2c&#39; - HTTP/2 prior knowledge over cleartext as described in https://www.rfc-editor.org/rfc/rfc9113.html#name-starting-http-2-with-prior-   * &#39;kubernetes.io/ws&#39;  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455   * &#39;kubernetes.io/wss&#39; - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol. | [optional] 
**name** | **String** | The name of this port.  This must match the &#39;name&#39; field in the corresponding ServicePort. Must be a DNS_LABEL. Optional only if one port is defined. | [optional] 
**port** | **Number** | The port number of the endpoint. | 
**protocol** | **String** | The IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP.  Possible enum values:  - &#x60;\&quot;SCTP\&quot;&#x60; is the SCTP protocol.  - &#x60;\&quot;TCP\&quot;&#x60; is the TCP protocol.  - &#x60;\&quot;UDP\&quot;&#x60; is the UDP protocol. | [optional] 



## Enum: ProtocolEnum


* `SCTP` (value: `"SCTP"`)

* `TCP` (value: `"TCP"`)

* `UDP` (value: `"UDP"`)



