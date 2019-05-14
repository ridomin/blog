---
title: More on package signing
date: "2019-05-10T21:08:02"
---

I was reading [Package Author Identity through Social Proofs](https://haacked.com/archive/2019/05/10/friend-signing-packgages/) and I was so happy to see that is not only me who wants to improve package managers security and trust without dependencies to public CAs.

I was tempted to reply on the comments of that blog post, but it was a long reply. Instead I'm writing this post..

I love the fact that some respected developer as Phill Haack is looking into this problem. And I agree with the overall sentiment, however there are two facts I'd like to highlight: 

- KeyBase does not allow to register X.509 keys, only GPG based keys.
- NuGet does not allow signing with GPG, only X.509 signatures. (And I feel responsible for this)

This means, that the next sentence:

>I can imagine a world where package managers leverage Keybase to provide more secure options for establishing identity

It's no so easy to implement, we would need to bring GPG to .NET, or make KeyBase accept X.509.

Also, I think the next statement is not accurate:

> Today, when you publish a package to NuGet.org, NuGet.org signs the package with its own certificate. The public key of that certificate ought to be published on Keybase.io.

NuGet repository key is published within the v3 protocol here: [https://api.nuget.org/v3-index/repository-signatures/certificates/0e5f38f57dc1bcc806d8494f4f90fbcedd988b46760709cbeec6f4219aa6157d.crt](https://api.nuget.org/v3-index/repository-signatures/certificates/0e5f38f57dc1bcc806d8494f4f90fbcedd988b46760709cbeec6f4219aa6157d.crt)

To establish trust, without any central authority, we should focus on Author Signatures, instead of repository signatures.

# Introducing CertCentral

I agree with Phill's assesment on NuGet package signing: [Why NuGet Package Signing Is Not (Yet) for Me](https://haacked.com/archive/2019/04/03/nuget-package-signing/). I believe that requiring author signatures from public CAs adds a lot of friction to the process.

To solve this problem, I started [CertCentral](https://certcentral.x509.online) to explore some ideas:

## Use X.509 self signed certificates as GPG keys

Without pretending to be a crypto expert, the commands `New-SelfSignedCertificate` and `gpg --generate-key` are equivalent, as both generate an RSA key pair that can be used to apply PKI concepts such as digital signatures. 

GPG is not perfect, but is widely used in the Open Source community. Why we can't use self signed certificates with the same purpose?

## Trust public keys from known URLs

Because GPG keys are not centralized, or backed up by any cental authority, the most common option to distribute public keys is through well known URLs, hence the public key used by Microsoft to sign Linux packages is available here:
[http://packages.microsoft.com/keys/microsoft.asc](http://packages.microsoft.com/keys/microsoft.asc)

## Link public keys to social identities

Inspired by KeyBase, I believe that the connection to a well known social identity will add more value to the public key that the subject name verified by a Public CA. Therefore I used GitHub identities to link public keys.

