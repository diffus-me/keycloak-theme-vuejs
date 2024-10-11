<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=!messagesPerField.existsError('password','password-confirm'); section>
  <#if section = "scripts">
    <script type="module" src="${url.resourcesPath}/js/login-update-password.js"></script>
  </#if>
</@layout.registrationLayout>
