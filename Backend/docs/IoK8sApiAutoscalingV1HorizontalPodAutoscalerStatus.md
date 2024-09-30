# Kubernetes.IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentCPUUtilizationPercentage** | **Number** | currentCPUUtilizationPercentage is the current average CPU utilization over all pods, represented as a percentage of requested CPU, e.g. 70 means that an average pod is using now 70% of its requested CPU. | [optional] 
**currentReplicas** | **Number** | currentReplicas is the current number of replicas of pods managed by this autoscaler. | 
**desiredReplicas** | **Number** | desiredReplicas is the  desired number of replicas of pods managed by this autoscaler. | 
**lastScaleTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] 
**observedGeneration** | **Number** | observedGeneration is the most recent generation observed by this autoscaler. | [optional] 


