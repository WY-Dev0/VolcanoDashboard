# Kubernetes.IoK8sApiCoreV1PersistentVolumeClaimCondition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastProbeTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] 
**lastTransitionTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] 
**message** | **String** | message is the human-readable message indicating details about last transition. | [optional] 
**reason** | **String** | reason is a unique, this should be a short, machine understandable string that gives the reason for condition&#39;s last transition. If it reports \&quot;Resizing\&quot; that means the underlying persistent volume is being resized. | [optional] 
**status** | **String** |  | 
**type** | **String** |  | 


