---
title: Azure IoT Edge getting started experience
date: "2019-06-25"
---

The next big concept to learn in the Azure IoT space is **IoT Edge**. This piece enables scenarios like gateways to IoT Hub for devices, and most interestingly aplying AI at the edge to reduce Cloud consumption that will improve performance and ultimately your cloud bill.

To learn about this concept I've been pointed to this new brand tutorial:

## Tutorial: An end-to-end solution using Azure Machine Learning and IoT Edge
[link to tutorial](https://docs.microsoft.com/en-us/azure/iot-edge/tutorial-machine-learning-edge-01-intro)

.. and this is a great tutorial that could be even better following the next suggestions:

## Benefits are not clearly exposed

I completed the tutorial - it took 6 hours approx over two different days - with success, but after all the pieces where built and deployed I missed a final demo to explore all the potential benefits of having the intelligent edge processing the ML model we just trained.

> Finalize the tutorial with a demo to highlight the benefits and potential of having AI models processed at the edge.

## Too much detail to produce the ML model

I spent most of the time in the tutorial in the Azure Notebooks to run the python scripts to produce the model. Although this was very interesting, I had not enough *python* background to follow the notebook and I ended following the tutorial steps without a understanding what I was doing. IMHO this part should be extracted to a different tutorial targeting Data Scientists. For someone learning IoT Edge, these details are not the most important concepts to learn.

> Focus on the module life-cycle, how to create, publish and deploy, without spending much time on the module authoring.

## Azure Notebook repeatability

I did not complete the full tutorial on a single day, when I got back the next day the Notebook was not in a good state. I tried to resume my work from where I stopped the day before but I got some issues, eg. the scripts are not prepared and failed if the AzureML instance already exists, once removed I could create the AzureML instance but the associated resources such as Storage and KeyVault were created again. Even with the new instances I could not *re-start* the tutorial because random errors processing the input streams.

> There should instructions to enable *re-start* the AzureML notebooks at well-known locations.

## Other minor issues (and typos)

I was able to complete the tutorial but found some minor issues that might require updates to the content and/or the demo scripts.

### Default VS code terminal

When trying to *Build & Push IoT Edge Solution* I hit this same issue [#351](https://github.com/microsoft/vscode-azure-iot-edge/issues/351), despite the fact that I had followed the instructions to change the default @Code terminal.

### AzureML not installed by default on Azure Notebooks

https://github.com/Azure-Samples/IoTEdgeAndMlSample/pull/44

### configedge.sh not found 

https://github.com/MicrosoftDocs/azure-docs/issues/34630 
