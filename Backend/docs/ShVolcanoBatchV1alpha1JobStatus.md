# Kubernetes.ShVolcanoBatchV1alpha1JobStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**[ShVolcanoBatchV1alpha1JobStatusConditionsInner]**](ShVolcanoBatchV1alpha1JobStatusConditionsInner.md) |  | [optional] 
**controlledResources** | **{String: String}** |  | [optional] 
**failed** | **Number** |  | [optional] 
**minAvailable** | **Number** |  | [optional] 
**pending** | **Number** |  | [optional] 
**retryCount** | **Number** |  | [optional] 
**running** | **Number** |  | [optional] 
**runningDuration** | **String** |  | [optional] 
**state** | [**ShVolcanoBatchV1alpha1JobStatusState**](ShVolcanoBatchV1alpha1JobStatusState.md) |  | [optional] 
**succeeded** | **Number** |  | [optional] 
**taskStatusCount** | [**{String: ShVolcanoBatchV1alpha1JobStatusTaskStatusCountValue}**](ShVolcanoBatchV1alpha1JobStatusTaskStatusCountValue.md) |  | [optional] 
**terminating** | **Number** |  | [optional] 
**unknown** | **Number** |  | [optional] 
**version** | **Number** |  | [optional] 


