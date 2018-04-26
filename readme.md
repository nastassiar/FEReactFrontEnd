## Overview

This application gets the user to sign in (will only work with users in the tenant of the current application). After successful sign in it shows the users display name, id, and a button to check if they have access to an application. 

This web application has been built using [React](https://facebook.github.io/react/) and shows how you can leverage [ADAL JS](https://github.com/AzureAD/azure-activedirectory-library-for-js) to connect to the Microsoft Graph. 

This repo was used as reference:  https://github.com/waldekmastykarz/office-mygroups-react

## Prerequisites

In order to have sign in work you need:
- AAD tenant
- admin access to the Azure Active Directory connected to the tenant

In order to have the button work you need:
- A back end similar to https://github.com/nastassiar/DjangoRESTTutorial set up

## Configuration

Following are the steps that you need to complete in order to see this application working:
- in the Azure  Portal (https://portal.azure.com):
  - go to Azure Active Directory (AAD)
  - create a new AAD web application
  - set the return URL to `https://localhost:8443`
  - copy the web application's **Client Id**
  - grant the application the following permissions:
    - Windows Azure Active Directory
      - Sign in and read user profile
    - Microsoft Graph
      - Access directory as the signed in user
      - Read all groups
  - in application's manifest enable OAuth implicit flow
- clone this repo
- in the **app/adal/adal-config.js** file in the **clientId** property paste the Client Id of the newly created AAD application
- in the command line:
```
$ npm start
```
- in your web browser navigate to https://localhost:8443
- when prompted, login with your organizational account
