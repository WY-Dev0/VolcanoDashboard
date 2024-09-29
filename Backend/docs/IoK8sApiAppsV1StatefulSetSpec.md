# Kubernetes.IoK8sApiAppsV1StatefulSetSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minReadySeconds** | **Number** | Minimum number of seconds for which a newly created pod should be ready without any of its container crashing for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) | [optional] 
**ordinals** | [**IoK8sApiAppsV1StatefulSetOrdinals**](IoK8sApiAppsV1StatefulSetOrdinals.md) |  | [optional] 
**persistentVolumeClaimRetentionPolicy** | [**IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy**](IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy.md) |  | [optional] 
**podManagementPolicy** | **String** | podManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. The default policy is &#x60;OrderedReady&#x60;, where pods are created in increasing order (pod-0, then pod-1, etc) and the controller will wait until each pod is ready before continuing. When scaling down, the pods are removed in the opposite order. The alternative policy is &#x60;Parallel&#x60; which will create pods in parallel to match the desired scale without waiting, and on scale down will delete all pods at once.  Possible enum values:  - &#x60;\&quot;OrderedReady\&quot;&#x60; will create pods in strictly increasing order on scale up and strictly decreasing order on scale down, progressing only when the previous pod is ready or terminated. At most one pod will be changed at any time.  - &#x60;\&quot;Parallel\&quot;&#x60; will create and delete pods as soon as the stateful set replica count is changed, and will not wait for pods to be ready or complete termination. | [optional] 
**replicas** | **Number** | replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1. | [optional] 
**revisionHistoryLimit** | **Number** | revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet&#39;s revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10. | [optional] 
**selector** | [**IoK8sApimachineryPkgApisMetaV1LabelSelector**](IoK8sApimachineryPkgApisMetaV1LabelSelector.md) |  | 
**serviceName** | **String** | serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where \&quot;pod-specific-string\&quot; is managed by the StatefulSet controller. | 
**template** | [**IoK8sApiCoreV1PodTemplateSpec**](IoK8sApiCoreV1PodTemplateSpec.md) |  | 
**updateStrategy** | [**IoK8sApiAppsV1StatefulSetUpdateStrategy**](IoK8sApiAppsV1StatefulSetUpdateStrategy.md) |  | [optional] 
**volumeClaimTemplates** | [**[IoK8sApiCoreV1PersistentVolumeClaim]**](IoK8sApiCoreV1PersistentVolumeClaim.md) | volumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name. | [optional] 



## Enum: PodManagementPolicyEnum


* `OrderedReady` (value: `"OrderedReady"`)

* `Parallel` (value: `"Parallel"`)



