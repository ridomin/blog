---
title: MSIX Catalog
date: "2019-03-04T22:40:32.169Z"
---

I've started a desktop application to explore different **modernization** characteristics
of a Windows Desktop application such as Windows 10 api usage, port WPF to .NET Core 3, compare
different deployment methods and use best DevOps practices.

I could create a dummy app to explore these topics, but rather I'd became with the idea
of a small utility to query the catalog of applications installed with MSIX/APPX.



## Explore Windows MSIX management APIs

The MSIX catalog is available in the Windows.Management.PackageManager api. This api allows to load
all the packages installed to the current user, each package can be categorized based on the
kind of signature used, and can be: Store, Developer, Enterprise or None.

### Windows 10 Contract as NuGet packages

The Windows 10 apis are available with the Windows 10 SDK as contracts in the `winmd` format.
These contracts have a dependency with the runtime interop assemblies. 


### WPF for .NET Framework and .NET Core 3 
