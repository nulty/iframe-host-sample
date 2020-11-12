# Iframe to Host

## Description

Test and experiment with the features available for communication between a host window and and iframe loaded by the host.

## Docs

[`postMessage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)

## Run

**With foreman/overmind**

`Procfile` will run both servers

`foreman start` \
`overmind start`


**Without process manager**
In two different terminals run:

    node iframe.js
    node host.js


## Visit the host page

[http://localhost:3000](http://localhost:3000)
    
