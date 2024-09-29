# Kubernetes.IoK8sApiDiscoveryV1EndpointSlice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressType** | **String** | addressType specifies the type of address carried by this EndpointSlice. All addresses in this slice must be the same type. This field is immutable after creation. The following address types are currently supported: * IPv4: Represents an IPv4 Address. * IPv6: Represents an IPv6 Address. * FQDN: Represents a Fully Qualified Domain Name.  Possible enum values:  - &#x60;\&quot;FQDN\&quot;&#x60; represents a FQDN.  - &#x60;\&quot;IPv4\&quot;&#x60; represents an IPv4 Address.  - &#x60;\&quot;IPv6\&quot;&#x60; represents an IPv6 Address. | 
**apiVersion** | **String** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources | [optional] 
**endpoints** | [**[IoK8sApiDiscoveryV1Endpoint]**](IoK8sApiDiscoveryV1Endpoint.md) | endpoints is a list of unique endpoints in this slice. Each slice may include a maximum of 1000 endpoints. | 
**kind** | **String** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds | [optional] 
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) |  | [optional] 
**ports** | [**[IoK8sApiDiscoveryV1EndpointPort]**](IoK8sApiDiscoveryV1EndpointPort.md) | ports specifies the list of network ports exposed by each endpoint in this slice. Each port must have a unique name. When ports is empty, it indicates that there are no defined ports. When a port is defined with a nil port value, it indicates \&quot;all ports\&quot;. Each slice may include a maximum of 100 ports. | [optional] 



## Enum: AddressTypeEnum


* `FQDN` (value: `"FQDN"`)

* `IPv4` (value: `"IPv4"`)

* `IPv6` (value: `"IPv6"`)




