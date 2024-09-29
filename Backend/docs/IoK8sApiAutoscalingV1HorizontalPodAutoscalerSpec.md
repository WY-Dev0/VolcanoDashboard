# Kubernetes.IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxReplicas** | **Number** | maxReplicas is the upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas. | 
**minReplicas** | **Number** | minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down.  It defaults to 1 pod.  minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured.  Scaling is active as long as at least one metric value is available. | [optional] 
**scaleTargetRef** | [**IoK8sApiAutoscalingV1CrossVersionObjectReference**](IoK8sApiAutoscalingV1CrossVersionObjectReference.md) |  | 
**targetCPUUtilizationPercentage** | **Number** | targetCPUUtilizationPercentage is the target average CPU utilization (represented as a percentage of requested CPU) over all the pods; if not specified the default autoscaling policy will be used. | [optional] 


