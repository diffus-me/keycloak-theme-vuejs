<#import "template.ftl" as layout>
<@layout.registrationLayout; section>
  <#if section = "scripts">
    <script type="module" src="${url.resourcesPath}/js/login-idp-link-email.js"></script>
  </#if>
</@layout.registrationLayout>
