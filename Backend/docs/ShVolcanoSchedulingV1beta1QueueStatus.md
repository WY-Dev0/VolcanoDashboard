# Kubernetes.ShVolcanoSchedulingV1beta1QueueStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocated** | **{String: Object}** | Allocated is allocated resources in queue | 
**completed** | **Number** | The number of &#x60;Completed&#x60; PodGroup in this queue. | [optional] 
**inqueue** | **Number** | The number of &#x60;Inqueue&#x60; PodGroup in this queue. | [optional] 
**pending** | **Number** | The number of &#39;Pending&#39; PodGroup in this queue. | [optional] 
**reservation** | [**ShVolcanoSchedulingV1beta1QueueStatusReservation**](ShVolcanoSchedulingV1beta1QueueStatusReservation.md) |  | [optional] 
**running** | **Number** | The number of &#39;Running&#39; PodGroup in this queue. | [optional] 
**state** | **String** | State is state of queue | [optional] 
**unknown** | **Number** | The number of &#39;Unknown&#39; PodGroup in this queue. | [optional] 


