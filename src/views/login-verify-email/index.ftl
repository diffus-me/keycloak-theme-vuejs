<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=true; section>
  <#if section = "scripts">
    <script type="module" src="${url.resourcesPath}/js/login-verify-email.js"></script>
  </#if>
</@layout.registrationLayout>
