---
title: The Cert Central Protocol
date: "2019-03-14"
---

I was discussing this morning with a colleague about storing the [Cert Central](https://certcentral.x509.online) certificates as gists, 

The same evening I saw this tweet 
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">📍 Today we’re shipping the ability to pin gists to your GitHub profile. We’re excited about the potential of gists — watch this space! ✨ <a href="https://t.co/Lu9n6tovzN">pic.twitter.com/Lu9n6tovzN</a></p>&mdash; Nat Friedman (@natfriedman) <a href="https://twitter.com/natfriedman/status/1105866817564631040?ref_src=twsrc%5Etfw">March 13, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

So I decided to give it a try and created a gist with the next content

```
-----BEGIN CERTIFICATE-----
MIIDCDCCAfCgAwIBAgIQNriD2H3bVblEfoWJthRIqTANBgkqhkiG9w0BAQsFADAV
MRMwEQYDVQQDDApSaWRvVGhlRGV2MB4XDTE5MDMwMTA1MTQ0MFoXDTIwMDMwMTA1
MzQ0MFowFTETMBEGA1UEAwwKUmlkb1RoZURldjCCASIwDQYJKoZIhvcNAQEBBQAD
ggEPADCCAQoCggEBAJx0nTH3Jtck8Jwz7xJ1aU83oniBcCnP5wc69GjNDoDbMtw/
VEMQWzU9UO+msW2T1CVC9PIAzvl5tVWK4YzFKKYzmcgksXLH8NRpVKt4E0+NTwqA
97oyRDtfOeeEcU7osFmK5NfzbDMdr9u4z7PaCu9I/lg+9nPrxAtT99E58rHFoObR
wKiuPmiXQQ29exl8MvkFwsMczdT8KAFyWWR2JdUSxSzEh174PKw6vk/7fKBiCsgX
UoY1TYcykL3ruhRjPMaIaxzirYZY2tZnmmcEY2saFObqV4/P50/urc97RcWR2+U/
Jek/1TcM1aJe7ee0tHPfhvKNT9dwdrm1jPzDjeUCAwEAAaNUMFIwDgYDVR0PAQH/
BAQDAgeAMBMGA1UdJQQMMAoGCCsGAQUFBwMDMAwGA1UdEwEB/wQCMAAwHQYDVR0O
BBYEFBGn5QIIuANVImJCJy4hDpU2BGgpMA0GCSqGSIb3DQEBCwUAA4IBAQAZJ8mw
CjaRad1G/dqWlFiWJY4CSebs7Lr0var77HxVeFOw9M2cJNKttTOo7c5YM2GydDrG
RvrROWDA/wUJTKcrtH+wzs00MW8xV8fazJ07ImWRkMGFiu4KONnZj9ZKkqKDCHkf
27uQdH+2VO2lclEKf1JzjA+dX8fnAznxVi2ioaom05LzzyhD95mpAmDC5v9DTZlw
G+5oTnJnhNm4dj4yaOL2TJhlVdc3kfBhQUGL7BZ44xHJpsiFix28lXJA/aP0lP6d
+RN39XpEsmt8x69EP5V56vUVJG97LG3qgJJIH+a+gdTV+7gZCbT00jsQ+t2OsJgW
p6vUSuIYhoQshVZM
-----END CERTIFICATE-----
```

[RidoTheDev.cer](https://gist.githubusercontent.com/ridomin/85ffb2f933c68683b87bbfb27ca114cf/raw/77ac9ac02dc553e4c7810c7ddb1cfa4c0ba6e6db/RidoTheDev.cer)

## Would you trust this public key?

Of course not !!. 

As a gist owner I can add any public key to my account and there are no proofs that 
the GitHub account has access to the private key.

## How Cert Central solves this problem

The `ccc push` command list all the certificates in the certificate store `CurrentUser\Personal` that satisfy the 
Code Sigining EKU requirements. Selecting a certificate will start a dialog with the server:

0. Login from the CLI with the API Key obtained after register
1. The client asks the server for a random number 
2. The server stores the random number and returns it to the client
3. The client signs the random number and sends a SignedCMS object
4. The server validates the signature and the stored random number
5. If succeed the server stores the public certificate included in the SignedCMS object

Any user who *trust* in the *CertCentral registry* can search and download  certificates based in a url like:

[https://certcentral.x509.online/api/cert/getusercert?username=ridomin&thumbprint=728511CC02E6A80B45ABC0CC862FEF1BFD9617D7](https://certcentral.x509.online/api/cert/getusercert?username=ridomin&thumbprint=728511CC02E6A80B45ABC0CC862FEF1BFD9617D7)

>Note how the `username` parameter to make the link between the cert and the github account explicit

To add the certificate to the `LocalMachine\TrustedPeople` with a single command execute

```bash
ccc trust -u ridomin -t 728511CC02E6A80B45ABC0CC862FEF1BFD9617D7
```

## Summary

Although CertCentral could use the Gist storage system, users could always modify the gist contents. To store the public keys in GitHub the server must expose a protocol to verify the user has access to the private key.

Having the storage system closed for anonymous access is a price to pay to avoid malicious modifications, here is where a block chain could help to mantain a read-only database of developer certificates, but it will also require a number of organizations to mantain a reasonable consensus.
