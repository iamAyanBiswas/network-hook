# network-hook

random-crypto-api is a Typescript/Javascript library to know device network status and events.

## Overview

A simple Typescript/JavaScript library for dynamically change site icon and title. This package allows you to run a callback function when device goes online to offline or offline to online.


## Node.js (Install)

Requirements:

- Node.js
- npm (Node.js package manager)

```bash
npm install network-hook
```

### Usage



```javascript
import { state, onOnline, onOffline} from 'network-hook';

  console.log(state()) // it will return network state, means online or offline

  onOnline(()=>{
    console.log('Online')
  })  // this event trigger, when your device got Offline to Online

  onOffline(()=>{
    console.log('Offline')
  })  // this event trigger, when your device got Online to Offline




// OR 

import networkHook from 'network-hook';

  console.log(networkHook.state()) // it will return network state, means online or offline

  networkHook.onOnline(()=>{
    console.log('Online')
  })  // this event trigger, when your device got Offline to Online

  networkHook.onOffline(()=>{
    console.log('Offline')
  })  // this event trigger, when your device got Online to Offline

  
```
