# Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecSecurityContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appArmorProfile** | [**ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerSecurityContextAppArmorProfile**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerSecurityContextAppArmorProfile.md) |  | [optional] 
**fsGroup** | **Number** |  | [optional] 
**fsGroupChangePolicy** | **String** |  | [optional] 
**runAsGroup** | **Number** |  | [optional] 
**runAsNonRoot** | **Boolean** |  | [optional] 
**runAsUser** | **Number** |  | [optional] 
**seLinuxOptions** | [**ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerSecurityContextSeLinuxOptions**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerSecurityContextSeLinuxOptions.md) |  | [optional] 
**seccompProfile** | [**ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerSecurityContextAppArmorProfile**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerSecurityContextAppArmorProfile.md) |  | [optional] 
**supplementalGroups** | **[Number]** |  | [optional] 
**sysctls** | [**[ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGetHttpHeadersInner]**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGetHttpHeadersInner.md) |  | [optional] 
**windowsOptions** | [**ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerSecurityContextWindowsOptions**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerSecurityContextWindowsOptions.md) |  | [optional] 


