<#import "template_minimal.ftl" as layout>
<@layout.registrationLayout displayMessage=false; section>
  <#if section = "scripts">
    <script id="environment" type="application/json">
      {
        "urls": {
          "clientBaseUrl":  <#if skipLink??>""<#else><#if pageRedirectUri?has_content>"${pageRedirectUri}"<#elseif actionUri?has_content>"${actionUri}"<#elseif (client.baseUrl)?has_content>"${client.baseUrl}"<#else>""</#if></#if>
        },
        "titles": {
          "messageHeader": <#if messageHeader??>"${kcSanitize(msg("${messageHeader}"))?no_esc}"<#else>"${message.summary}"</#if>
        },
        "permissions": {
        },
        "labels": {
          "backToApplication": <#if pageRedirectUri?has_content>"${kcSanitize(msg("backToApplication"))?no_esc}"<#elseif actionUri?has_content>"${kcSanitize(msg("proceedWithAction"))?no_esc}"<#elseif (client.baseUrl)?has_content>"${kcSanitize(msg("backToApplication"))?no_esc}"<#else>""</#if>
        },
        "forms": {
        },
        "user": {
        },
        "validations": {
        },
        "message": {
          "sumary": "${message.summary}"
        },
        "instruction": {
        },
        "social": [
        ],
        "actions": [
          <#if requiredActions??>
            <#list requiredActions>
              <#items as reqActionItem>
                "${kcSanitize(msg("requiredAction.${reqActionItem}"))?no_esc}"<#sep>,</#sep>
              </#items>
            </#list>
          </#if>
        ]
      }
    </script>
    <script type="module" src="${url.resourcesPath}/js/info.js"></script>
  </#if>
</@layout.registrationLayout>
