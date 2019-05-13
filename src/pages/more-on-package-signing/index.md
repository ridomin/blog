---
title: More on package signing
date: "2019-05-10T21:08:02"
---

I was reading [Package Author Identity through Social Proofs](https://haacked.com/archive/2019/05/10/friend-signing-packgages/) and I was so happy to see that is not only me who wants to improve package managers without the dependency to public CAs.

I was tempted to reply on the comments of that blog post, but it was a long reply. Instead I'm writing this post..

First, I love the fact that some respected developer as Phill Haack is looking into this problem. And I agree with the overall sentiment, however there are two facts I'd like to highlight: 

- KeyBase does not allow X.509 key registration (only GPG based keys)
- NuGet does not allow signing with PGP (and I feel responsible of this decission)

This means, that the next sentence:

>I can imagine a world where package managers leverage Keybase to provide more secure options for establishing identity

It's no so easy to implement, we would need to bring PGP to .NET, or make KeyBase accept X.509.

Also, I think the next statement is not relevant on this space:

> Today, when you publish a package to NuGet.org, NuGet.org signs the package with its own certificate. The public key of that certificate ought to be published on Keybase.io.

NuGet repository key is published within the v3 protocol here: [https://api.nuget.org/v3-index/repository-signatures/certificates/0e5f38f57dc1bcc806d8494f4f90fbcedd988b46760709cbeec6f4219aa6157d.crt](https://api.nuget.org/v3-index/repository-signatures/certificates/0e5f38f57dc1bcc806d8494f4f90fbcedd988b46760709cbeec6f4219aa6157d.crt)

# Introducing CertCentral

I agree with Phill's assesment on NuGet package signing: [Why NuGet Package Signing Is Not (Yet) for Me](https://haacked.com/archive/2019/04/03/nuget-package-signing/) but I want to bring some ideas to solve this problem, so I created [CertCentral](https://certcentral.x509.online) based on the next design principles:

## Use X.509 as the container for RSA public/private keys. 

Although GPG keys are widely accepted on the Linux world, for .NET and Windows developers the default option is based on X.509. 

Use X.509 as the format to manage keys.

## Use a decentralized system.

Users have the right to generate public-private key-pairs to sign their stuff, in the case of developers this is most accomplished with code signing certificates based on X.509. The default usage in most platforms relies on Certificate Authorities who issue code signing certificates to legal entities, individuals or organizations. 

Use self-signed X.509 certificates.

## Use social proofs to verify public keys

Developers can associate their keys to their public identities. While KeyBase does not allow to register X.509 certificates use an alternate system to store the relationship between the developer identity and his keys.

Public registry to store keys associated to a developer identity.

> As a proof of concept, CertCentral uses GitHub OAuth to verify developer identities.

## Play nicely with existing platforms

Existing software must be able to successfully verify the signature using the same APIs and existing infrastructure.



X509 usage is based on Public CAs that charge money (with legit reasons) to issue a code signing certificate. The X509 spec includes **self-signed** certficates as an alternative to use the same format without requiring any CA. 


The current public/private key landscape requires entitities with legal power to back up the responsabilities that might occur when using these keys. 





