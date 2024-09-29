# Kubernetes.IoK8sApiCoreV1SecurityContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowPrivilegeEscalation** | **Boolean** | AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows. | [optional] 
**appArmorProfile** | [**IoK8sApiCoreV1AppArmorProfile**](IoK8sApiCoreV1AppArmorProfile.md) |  | [optional] 
**capabilities** | [**IoK8sApiCoreV1Capabilities**](IoK8sApiCoreV1Capabilities.md) |  | [optional] 
**privileged** | **Boolean** | Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows. | [optional] 
**procMount** | **String** | procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.  Possible enum values:  - &#x60;\&quot;Default\&quot;&#x60; uses the container runtime defaults for readonly and masked paths for /proc. Most container runtimes mask certain paths in /proc to avoid accidental security exposure of special devices or information.  - &#x60;\&quot;Unmasked\&quot;&#x60; bypasses the default masking behavior of the container runtime and ensures the newly created /proc the container stays in tact with no modifications. | [optional] 
**readOnlyRootFilesystem** | **Boolean** | Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows. | [optional] 
**runAsGroup** | **Number** | The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. | [optional] 
**runAsNonRoot** | **Boolean** | Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. | [optional] 
**runAsUser** | **Number** | The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. | [optional] 
**seLinuxOptions** | [**IoK8sApiCoreV1SELinuxOptions**](IoK8sApiCoreV1SELinuxOptions.md) |  | [optional] 
**seccompProfile** | [**IoK8sApiCoreV1SeccompProfile**](IoK8sApiCoreV1SeccompProfile.md) |  | [optional] 
**windowsOptions** | [**IoK8sApiCoreV1WindowsSecurityContextOptions**](IoK8sApiCoreV1WindowsSecurityContextOptions.md) |  | [optional] 



## Enum: ProcMountEnum


* `Default` (value: `"Default"`)

* `Unmasked` (value: `"Unmasked"`)




