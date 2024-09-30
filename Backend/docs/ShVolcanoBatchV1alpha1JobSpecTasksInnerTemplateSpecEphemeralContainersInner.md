# Kubernetes.ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecEphemeralContainersInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | **[String]** |  | [optional] 
**command** | **[String]** |  | [optional] 
**env** | [**[ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInner]**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInner.md) |  | [optional] 
**envFrom** | [**[ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvFromInner]**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvFromInner.md) |  | [optional] 
**image** | **String** |  | [optional] 
**imagePullPolicy** | **String** |  | [optional] 
**lifecycle** | [**ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecycle**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecycle.md) |  | [optional] 
**livenessProbe** | [**ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLivenessProbe**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLivenessProbe.md) |  | [optional] 
**name** | **String** |  | 
**ports** | [**[ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerPortsInner]**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerPortsInner.md) |  | [optional] 
**readinessProbe** | [**ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLivenessProbe**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLivenessProbe.md) |  | [optional] 
**resizePolicy** | [**[ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResizePolicyInner]**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResizePolicyInner.md) |  | [optional] 
**resources** | [**ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResources**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResources.md) |  | [optional] 
**restartPolicy** | **String** |  | [optional] 
**securityContext** | [**ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerSecurityContext**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerSecurityContext.md) |  | [optional] 
**startupProbe** | [**ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLivenessProbe**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLivenessProbe.md) |  | [optional] 
**stdin** | **Boolean** |  | [optional] 
**stdinOnce** | **Boolean** |  | [optional] 
**targetContainerName** | **String** |  | [optional] 
**terminationMessagePath** | **String** |  | [optional] 
**terminationMessagePolicy** | **String** |  | [optional] 
**tty** | **Boolean** |  | [optional] 
**volumeDevices** | [**[ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerVolumeDevicesInner]**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerVolumeDevicesInner.md) |  | [optional] 
**volumeMounts** | [**[ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerVolumeMountsInner]**](ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerVolumeMountsInner.md) |  | [optional] 
**workingDir** | **String** |  | [optional] 


