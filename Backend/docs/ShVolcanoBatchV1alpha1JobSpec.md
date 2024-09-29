# Kubernetes.ShVolcanoBatchV1alpha1JobSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxRetry** | **Number** |  | [optional] 
**minAvailable** | **Number** |  | [optional] 
**minSuccess** | **Number** |  | [optional] 
**plugins** | **{String: [String]}** |  | [optional] 
**policies** | [**[ShVolcanoBatchV1alpha1JobSpecPoliciesInner]**](ShVolcanoBatchV1alpha1JobSpecPoliciesInner.md) |  | [optional] 
**priorityClassName** | **String** |  | [optional] 
**queue** | **String** |  | [optional] 
**runningEstimate** | **String** |  | [optional] 
**schedulerName** | **String** |  | [optional] 
**tasks** | [**[ShVolcanoBatchV1alpha1JobSpecTasksInner]**](ShVolcanoBatchV1alpha1JobSpecTasksInner.md) |  | [optional] 
**ttlSecondsAfterFinished** | **Number** |  | [optional] 
**volumes** | [**[ShVolcanoBatchV1alpha1JobSpecVolumesInner]**](ShVolcanoBatchV1alpha1JobSpecVolumesInner.md) |  | [optional] 


