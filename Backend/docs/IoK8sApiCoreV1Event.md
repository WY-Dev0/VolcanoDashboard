# Kubernetes.IoK8sApiCoreV1Event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | What action was taken/failed regarding to the Regarding object. | [optional] 
**apiVersion** | **String** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources | [optional] 
**count** | **Number** | The number of times this event has occurred. | [optional] 
**eventTime** | **Date** | MicroTime is version of Time with microsecond level precision. | [optional] 
**firstTimestamp** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] 
**involvedObject** | [**IoK8sApiCoreV1ObjectReference**](IoK8sApiCoreV1ObjectReference.md) |  | 
**kind** | **String** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds | [optional] 
**lastTimestamp** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] 
**message** | **String** | A human-readable description of the status of this operation. | [optional] 
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) |  | 
**reason** | **String** | This should be a short, machine understandable string that gives the reason for the transition into the object&#39;s current status. | [optional] 
**related** | [**IoK8sApiCoreV1ObjectReference**](IoK8sApiCoreV1ObjectReference.md) |  | [optional] 
**reportingComponent** | **String** | Name of the controller that emitted this Event, e.g. &#x60;kubernetes.io/kubelet&#x60;. | [optional] 
**reportingInstance** | **String** | ID of the controller instance, e.g. &#x60;kubelet-xyzf&#x60;. | [optional] 
**series** | [**IoK8sApiCoreV1EventSeries**](IoK8sApiCoreV1EventSeries.md) |  | [optional] 
**source** | [**IoK8sApiCoreV1EventSource**](IoK8sApiCoreV1EventSource.md) |  | [optional] 
**type** | **String** | Type of this event (Normal, Warning), new types could be added in the future | [optional] 


