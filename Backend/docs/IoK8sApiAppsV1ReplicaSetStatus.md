# Kubernetes.IoK8sApiAppsV1ReplicaSetStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availableReplicas** | **Number** | The number of available replicas (ready for at least minReadySeconds) for this replica set. | [optional] 
**conditions** | [**[IoK8sApiAppsV1ReplicaSetCondition]**](IoK8sApiAppsV1ReplicaSetCondition.md) | Represents the latest available observations of a replica set&#39;s current state. | [optional] 
**fullyLabeledReplicas** | **Number** | The number of pods that have labels matching the labels of the pod template of the replicaset. | [optional] 
**observedGeneration** | **Number** | ObservedGeneration reflects the generation of the most recently observed ReplicaSet. | [optional] 
**readyReplicas** | **Number** | readyReplicas is the number of pods targeted by this ReplicaSet with a Ready Condition. | [optional] 
**replicas** | **Number** | Replicas is the most recently observed number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller | 


