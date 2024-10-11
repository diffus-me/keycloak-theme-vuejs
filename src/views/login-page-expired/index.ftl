<#import "template_minimal.ftl" as layout>
<@layout.registrationLayout; section>
  <#if section = "scripts">
    <script id="environment" type="application/json">
      {
        "urls": {
          "loginRestartFlowUrl": "${url.loginRestartFlowUrl}",
          "loginAction": "${url.loginAction}"
        },
        "titles": {
          "pageExpiredTitle": "${msg("pageExpiredTitle")}"
        },
        "permissions": {
        },
        "labels": {
          "doClickHere": "${msg("doClickHere")}"
        },
        "forms": {
        },
        "user": {
        },
        "validations": {
        },
        "message": {
        },
        "instruction": {
          "pageExpiredMsg1": "${msg("pageExpiredMsg1")}",
          "pageExpiredMsg2": "${msg("pageExpiredMsg2")}"
        },
        "social": [
        ],
        "actions": []
      }
    </script>
    <script type="module" src="${url.resourcesPath}/js/login-page-expired.js"></script>
  </#if>
</@layout.registrationLayout>
