# Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activeDeadlineSeconds** | **Number** |  | [optional] 
**affinity** | [**ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinity**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinity.md) |  | [optional] 
**automountServiceAccountToken** | **Boolean** |  | [optional] 
**containers** | [**[ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInner]**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInner.md) |  | 
**dnsConfig** | [**ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecDnsConfig**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecDnsConfig.md) |  | [optional] 
**dnsPolicy** | **String** |  | [optional] 
**enableServiceLinks** | **Boolean** |  | [optional] 
**ephemeralContainers** | [**[ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecEphemeralContainersInner]**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecEphemeralContainersInner.md) |  | [optional] 
**hostAliases** | [**[ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecHostAliasesInner]**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecHostAliasesInner.md) |  | [optional] 
**hostIPC** | **Boolean** |  | [optional] 
**hostNetwork** | **Boolean** |  | [optional] 
**hostPID** | **Boolean** |  | [optional] 
**hostUsers** | **Boolean** |  | [optional] 
**hostname** | **String** |  | [optional] 
**imagePullSecrets** | [**[ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecImagePullSecretsInner]**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecImagePullSecretsInner.md) |  | [optional] 
**initContainers** | [**[ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInner]**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInner.md) |  | [optional] 
**nodeName** | **String** |  | [optional] 
**nodeSelector** | **{String: String}** |  | [optional] 
**os** | [**ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResourcesClaimsInner**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResourcesClaimsInner.md) |  | [optional] 
**overhead** | **{String: Object}** |  | [optional] 
**preemptionPolicy** | **String** |  | [optional] 
**priority** | **Number** |  | [optional] 
**priorityClassName** | **String** |  | [optional] 
**readinessGates** | [**[ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecReadinessGatesInner]**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecReadinessGatesInner.md) |  | [optional] 
**resourceClaims** | [**[ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecResourceClaimsInner]**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecResourceClaimsInner.md) |  | [optional] 
**restartPolicy** | **String** |  | [optional] 
**runtimeClassName** | **String** |  | [optional] 
**schedulerName** | **String** |  | [optional] 
**schedulingGates** | [**[ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResourcesClaimsInner]**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResourcesClaimsInner.md) |  | [optional] 
**securityContext** | [**ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecSecurityContext**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecSecurityContext.md) |  | [optional] 
**serviceAccount** | **String** |  | [optional] 
**serviceAccountName** | **String** |  | [optional] 
**setHostnameAsFQDN** | **Boolean** |  | [optional] 
**shareProcessNamespace** | **Boolean** |  | [optional] 
**subdomain** | **String** |  | [optional] 
**terminationGracePeriodSeconds** | **Number** |  | [optional] 
**tolerations** | [**[ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecTolerationsInner]**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecTolerationsInner.md) |  | [optional] 
**topologySpreadConstraints** | [**[ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecTopologySpreadConstraintsInner]**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecTopologySpreadConstraintsInner.md) |  | [optional] 
**volumes** | [**[ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner]**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInner.md) |  | [optional] 


