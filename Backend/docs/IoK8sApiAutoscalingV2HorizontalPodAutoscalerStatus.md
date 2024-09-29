# Kubernetes.IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**[IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition]**](IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition.md) | conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met. | [optional] 
**currentMetrics** | [**[IoK8sApiAutoscalingV2MetricStatus]**](IoK8sApiAutoscalingV2MetricStatus.md) | currentMetrics is the last read state of the metrics used by this autoscaler. | [optional] 
**currentReplicas** | **Number** | currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler. | [optional] 
**desiredReplicas** | **Number** | desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler. | 
**lastScaleTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] 
**observedGeneration** | **Number** | observedGeneration is the most recent generation observed by this autoscaler. | [optional] 


