<#import "template.ftl" as layout>
<@layout.registrationLayout; section>
  <#if section = "scripts">
    <script typo="module" src="${url.resourcesPath}/js/logout-confirm.js"></script>
  </#if>
</@layout.registrationLayout>
