<#import "template_minimal.ftl" as layout>
<@layout.registrationLayout displayMessage=false; section>
  <#if section = "scripts">
    <script id="environment" type="application/json">
      {
        "urls": {
          "clientBaseUrl":  <#if client?? && client.baseUrl?has_content>"${client.baseUrl}"<#else>""</#if>,
          "loginRestartFlowUrl": "${url.loginRestartFlowUrl}"
        },
        "titles": {
          "errorTitle": "${kcSanitize(msg("errorTitle"))?no_esc}"
        },
        "permissions": {
        },
        "labels": {
          "backToLogin": "${kcSanitize(msg("backToLogin"))?no_esc}",
          "backToApplication": "${kcSanitize(msg("backToApplication"))?no_esc}"
        },
        "forms": {
        },
        "user": {
        },
        "validations": {
        },
        "message": {
          "sumary": "${kcSanitize(message.summary)?no_esc}"
        },
        "instruction": {
        },
        "social": [
        ],
        "actions": []
      }
    </script>
    <script type="module" src="${url.resourcesPath}/js/error.js"></script>
  </#if>
</@layout.registrationLayout>
