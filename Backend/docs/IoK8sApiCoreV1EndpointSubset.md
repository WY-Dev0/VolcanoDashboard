# Kubernetes.IoK8sApiCoreV1EndpointSubset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**[IoK8sApiCoreV1EndpointAddress]**](IoK8sApiCoreV1EndpointAddress.md) | IP addresses which offer the related ports that are marked as ready. These endpoints should be considered safe for load balancers and clients to utilize. | [optional] 
**notReadyAddresses** | [**[IoK8sApiCoreV1EndpointAddress]**](IoK8sApiCoreV1EndpointAddress.md) | IP addresses which offer the related ports but are not currently marked as ready because they have not yet finished starting, have recently failed a readiness check, or have recently failed a liveness check. | [optional] 
**ports** | [**[IoK8sApiCoreV1EndpointPort]**](IoK8sApiCoreV1EndpointPort.md) | Port numbers available on the related IP addresses. | [optional] 


